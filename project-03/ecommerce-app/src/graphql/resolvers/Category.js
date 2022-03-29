/**
 * file: src/graphql/typeDefs/schema.js
 * description:
 * date: 02/28/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

exports.Category = {
  products: ({ id: categoryId }, { filter }, { products }) => {
    const categoryProducts = products.filter((product) => product.categoryId === categoryId);
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