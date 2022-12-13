/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFavorite = /* GraphQL */ `
  subscription OnCreateFavorite(
    $filter: ModelSubscriptionFavoriteFilterInput
    $owner: String
  ) {
    onCreateFavorite(filter: $filter, owner: $owner) {
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
export const onUpdateFavorite = /* GraphQL */ `
  subscription OnUpdateFavorite(
    $filter: ModelSubscriptionFavoriteFilterInput
    $owner: String
  ) {
    onUpdateFavorite(filter: $filter, owner: $owner) {
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
export const onDeleteFavorite = /* GraphQL */ `
  subscription OnDeleteFavorite(
    $filter: ModelSubscriptionFavoriteFilterInput
    $owner: String
  ) {
    onDeleteFavorite(filter: $filter, owner: $owner) {
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
export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $owner: String
  ) {
    onCreateCartItem(filter: $filter, owner: $owner) {
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
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $owner: String
  ) {
    onUpdateCartItem(filter: $filter, owner: $owner) {
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
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem(
    $filter: ModelSubscriptionCartItemFilterInput
    $owner: String
  ) {
    onDeleteCartItem(filter: $filter, owner: $owner) {
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart(
    $filter: ModelSubscriptionCartFilterInput
    $owner: String
  ) {
    onCreateCart(filter: $filter, owner: $owner) {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart(
    $filter: ModelSubscriptionCartFilterInput
    $owner: String
  ) {
    onUpdateCart(filter: $filter, owner: $owner) {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart(
    $filter: ModelSubscriptionCartFilterInput
    $owner: String
  ) {
    onDeleteCart(filter: $filter, owner: $owner) {
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
export const onCreateDonut = /* GraphQL */ `
  subscription OnCreateDonut($filter: ModelSubscriptionDonutFilterInput) {
    onCreateDonut(filter: $filter) {
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
export const onUpdateDonut = /* GraphQL */ `
  subscription OnUpdateDonut($filter: ModelSubscriptionDonutFilterInput) {
    onUpdateDonut(filter: $filter) {
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
export const onDeleteDonut = /* GraphQL */ `
  subscription OnDeleteDonut($filter: ModelSubscriptionDonutFilterInput) {
    onDeleteDonut(filter: $filter) {
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
