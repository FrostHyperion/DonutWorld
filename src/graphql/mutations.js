/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDonut = /* GraphQL */ `
  mutation CreateDonut(
    $input: CreateDonutInput!
    $condition: ModelDonutConditionInput
  ) {
    createDonut(input: $input, condition: $condition) {
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
export const updateDonut = /* GraphQL */ `
  mutation UpdateDonut(
    $input: UpdateDonutInput!
    $condition: ModelDonutConditionInput
  ) {
    updateDonut(input: $input, condition: $condition) {
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
export const deleteDonut = /* GraphQL */ `
  mutation DeleteDonut(
    $input: DeleteDonutInput!
    $condition: ModelDonutConditionInput
  ) {
    deleteDonut(input: $input, condition: $condition) {
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
export const createFavorite = /* GraphQL */ `
  mutation CreateFavorite(
    $input: CreateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    createFavorite(input: $input, condition: $condition) {
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
export const updateFavorite = /* GraphQL */ `
  mutation UpdateFavorite(
    $input: UpdateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    updateFavorite(input: $input, condition: $condition) {
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
export const deleteFavorite = /* GraphQL */ `
  mutation DeleteFavorite(
    $input: DeleteFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    deleteFavorite(input: $input, condition: $condition) {
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
export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
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
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $input: UpdateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    updateCartItem(input: $input, condition: $condition) {
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
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
