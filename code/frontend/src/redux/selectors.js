import { createSelector } from '@reduxjs/toolkit';

export const productSelectors = (state) => state.products.products;
export const productSelector = (state) => state.products.product;
export const isLoginSelector = (state) => state.auth.isLogin;
export const productInCartSelectors = (state) => state.cart.products;
export const totalPriceSelector = (state) => state.cart.total;
export const categorySelectors = (state) => state.category.categories;
export const searchSelectors = (state) => state.filter.search;
export const filterBySelectors = (state) => state.filter.filterBy;
export const priceMinSelectors = (state) => state.filter.priceMin;
export const priceMaxSelectors = (state) => state.filter.priceMax;
export const tokenSelector = (state) => state.auth.token;
export const orderSelector = (state) => state.orders.orders;

export const productsRemain = createSelector(
  productSelectors,
  searchSelectors,
  filterBySelectors,
  priceMinSelectors,
  priceMaxSelectors,
  (products, search, filterBy, priceMin, priceMax) => {
    const regex = new RegExp(`${search}`, 'i');
    return products.filter(
      (product) =>
        product.categoryId === filterBy &&
        product.name.search(regex) !== -1 &&
        product.price >= priceMin &&
        product.price <= priceMax
    );
  }
);
