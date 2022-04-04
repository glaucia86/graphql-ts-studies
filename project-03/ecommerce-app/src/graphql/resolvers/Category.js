/**
 * file: src/graphql/resolvers/Category.js
 * description:
 * date: 02/28/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

exports.Category = {
  products: ({ id: categoryId }, { filter }, { db }) => {
    const categoryProducts = db.products.filter((product) => product.categoryId === categoryId);
    let filteredCategoryProducts = categoryProducts;

    if(filter) {
      if(filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter(product => {
          return product.onSale
        })
      }
    }

    return filteredCategoryProducts;
  }
};