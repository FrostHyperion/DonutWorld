import {createContext, useContext, useEffect, useState} from "react";
import { v4 as uuidv4 } from "uuid";
import config from "../aws-exports";
import {API, Storage} from "aws-amplify";
import {AccountContext} from "./account";
import {listDonuts, getDonut, listFavorites} from "../graphql/queries"
import {createDonut as addDonut, createFavorite, deleteFavorite} from "../graphql/mutations"

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const DonutContext = createContext();

const DonutProvider = ({ children }) => {
  const [donuts, setDonuts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredDonuts, setFilteredDonuts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const {user} = useContext(AccountContext)

  const fetchDonuts = async () => {
    try {
      const response = await API.graphql({query: listDonuts, authMode: "API_KEY"});
      setDonuts(response.data.listDonuts.items);
    } catch (error) {
      throw error;
    }
  };

  const fetchFavorites = async () => {
    try {
      let response = await API.graphql({query: listFavorites});

      setFavorites(response.data.listFavorites.items);
      return response.data.listFavorites.items;
    } catch (error) {
      throw error;
    }
  };

  const createDonut = async (createDonutDetails) => {
    try {
      if (
        !createDonutDetails.name ||
        !createDonutDetails.price ||
        !createDonutDetails.description
      )
        return;

      createDonutDetails.image = await createS3ImageLink(createDonutDetails.image)

      let response = await API.graphql({query: addDonut, variables: {input: createDonutDetails}});
        return response;
    } catch (err) {
      throw err;
    }
  };

  const fetchImage = async (imageUrl) => {
    const key = `images${imageUrl.split("images")[1]}`;
    try {
        const image = await Storage.get(key, {level: "public"});
      return image;
    } catch (error) {
      throw error;
    }
  };

  const createS3ImageLink = async (imageFile) => {
    const extension = imageFile.name.split(".")[1];
    const name = imageFile.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      // Upload the file to s3 with public access level.
      await Storage.put(key, imageFile, {
        level: "public",
        contentType: imageFile.type,
      });

      return url;
    } catch (err) {
      throw err;
    }
  };

  const fetchDonut = async (donutId) => {
    try {
      const response = await API.graphql({query: getDonut, variables: {id: donutId}})
      return response.data.getDonut;
    } catch (error) {
      throw error;
    }
  };

  const addToFavorites = async (donutId) => {
    try {
      const donut = await fetchDonut(donutId);
      const fav = await API.graphql({query: listFavorites, variables: {filter: {
          donut_id: {
              eq: donutId
          }
      }}})
      if(donut){
        if(!fav.data.listFavorites.items[0]){

          const response = await API.graphql({query: createFavorite, variables: {input: {donut_id: donutId}}})

          fetchFavorites();
          return response;
        }
      }
    } catch (error) {
      throw error;
    }
  };

  const removeFromFavorites = async (id, donutId) => {
    try {
      const donut = await fetchDonut(donutId);
      const fav = await API.graphql({query: listFavorites, variables: {input: {id: id}}})

      if(donut){
        if(fav.data.listFavorites.items[0]){
          const response = await API.graphql({query: deleteFavorite, variables: {input: {id: id}}});

          fetchFavorites();
          return response;
        }
      }
    } catch (error) {}
  };

  const filterDonuts = (searchInput) => {
    const filtered = [...donuts].filter((donut) => {
      return donut.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredDonuts(filtered);
  };

  useEffect(() => {
    fetchDonuts();
    fetchFavorites();
  }, []);

  return (
    <DonutContext.Provider
      value={{
        donuts,
        searchInput,
        setSearchInput,
        filteredDonuts,
        favorites,
        createDonut,
        fetchDonut,
        addToFavorites,
        removeFromFavorites,
        fetchDonuts,
        fetchFavorites,
        filterDonuts,
        fetchImage,
      }}
    >
      {children}
    </DonutContext.Provider>
  );
};

export { DonutContext, DonutProvider };
