/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFavorite = /* GraphQL */ `
  query GetFavorite($id: ID!) {
    getFavorite(id: $id) {
      id
      donut_id
      donut {
        id
        name
        description
        price
        image
        stripe_price_id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listFavorites = /* GraphQL */ `
  query ListFavorites(
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        donut_id
        donut {
          id
          name
          description
          price
          image
          stripe_price_id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCartItem = /* GraphQL */ `
  query GetCartItem($id: ID!) {
    getCartItem(id: $id) {
      id
      donut_id
      donut {
        id
        name
        description
        price
        image
        stripe_price_id
        createdAt
        updatedAt
      }
      quantity
      createdAt
      updatedAt
      cartCartItemsId
      owner
    }
  }
`;
export const listCartItems = /* GraphQL */ `
  query ListCartItems(
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        donut_id
        donut {
          id
          name
          description
          price
          image
          stripe_price_id
          createdAt
          updatedAt
        }
        quantity
        createdAt
        updatedAt
        cartCartItemsId
        owner
      }
      nextToken
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      cartItems {
        items {
          id
          donut_id
          quantity
          createdAt
          updatedAt
          cartCartItemsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cartItems {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getDonut = /* GraphQL */ `
  query GetDonut($id: ID!) {
    getDonut(id: $id) {
      id
      name
      description
      price
      image
      stripe_price_id
      createdAt
      updatedAt
    }
  }
`;
export const listDonuts = /* GraphQL */ `
  query ListDonuts(
    $filter: ModelDonutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDonuts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        image
        stripe_price_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
