import React, { useContext, useEffect, useState } from "react";
import config from "../aws-exports";
import "./Admin.css";
import { AccountContext } from "../context/account";
import { useNavigate } from "react-router-dom";
import { DonutContext } from "../context/donuts";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket,
} = config;

const Admin = () => {
  const { user } = useContext(AccountContext);
  const { createDonut } = useContext(DonutContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      !user?.signInUserSession.accessToken.payload.hasOwnProperty(
        "cognito:groups"
      )
    ) {
      window.alert("Only Admins are allowed");
      navigate("/");
    }

    if (!user) {
      window.alert("You need to signin in order to access this page.");
      navigate("/");
    }
  }, [navigate, user]);

  const [image, setImage] = useState(null);
  const [donutDetails, setDonutDetails] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    stripe_price_id: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!donutDetails.name || !donutDetails.price) return;
      createDonut(donutDetails);
      setDonutDetails({
        name: "",
        description: "",
        image: "",
        price: "",
        stripe_price_id: "",
      });
      navigate("/donuts");
    } catch (err) {
      console.log(err);
      window.alert(err.message);
    }
  };

  return (
    <section className="admin-wrapper">
      <section>
        <header className="form-header">
          <h3>Add New donut</h3>
        </header>
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <div className="form-image">
            {image ? (
              <img className="image-preview" src={image} alt="" />
            ) : (
              <input
                type="file"
                accept="image/jpg"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  setDonutDetails({
                    ...donutDetails,
                    image: e.target.files[0],
                  });
                }}
              />
            )}
          </div>
          <div className="form-fields">
            <div className="name-form">
              <p>
                <label htmlFor="name">Title</label>
              </p>
              <p>
                <input
                  name="email"
                  type="name"
                  placeholder="Type the name"
                  value={donutDetails.name}
                  onChange={(e) =>
                    setDonutDetails({ ...donutDetails, name: e.target.value })
                  }
                  required
                />
              </p>
            </div>
            <div className="description-form">
              <p>
                <label htmlFor="description">Description</label>
              </p>
              <p>
                <textarea
                  name="description"
                  type="text"
                  rows="8"
                  placeholder="Type the description of the donut"
                  value={donutDetails.description}
                  onChange={(e) =>
                    setDonutDetails({
                      ...donutDetails,
                      description: e.target.value,
                    })
                  }
                  required
                />
              </p>
            </div>
            <div className="price-form">
              <p>
                <label htmlFor="price">Price ($)</label>
                <input
                  name="price"
                  type="number"
                  placeholder="What is the Price of the donut (USD)"
                  value={donutDetails.price}
                  onChange={(e) =>
                    setDonutDetails({
                      ...donutDetails,
                      price: parseFloat(e.target.value),
                    })
                  }
                  required
                />
              </p>
            </div>
            <div className="price-form">
              <p>
                <label htmlFor="stripe_price_id">Stripe price key</label>
                <input
                  name="stripe_price_id"
                  type="text"
                  placeholder="Stripe price key"
                  value={donutDetails.stripe_price_id}
                  onChange={(e) =>
                    setDonutDetails({
                      ...donutDetails,
                      stripe_price_id: e.target.value,
                    })
                  }
                  required
                />
              </p>
            </div>
            <div className="submit-form">
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Admin;
