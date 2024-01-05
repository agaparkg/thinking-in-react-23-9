import React, { Component } from "react";
import "./ProductTable.css";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export default class ProductTable extends Component {
  render() {
    const { products, inStockOnly, filterText } = this.props;
    // const filteredProducts = products
    let lastCategory = null;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stocked</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ category, id, name, stocked, price }) => {
            const obj = { id: id, name: name, stocked: stocked, price: price };
            let catrow = null;

            if (lastCategory !== category) {
              // null !== "Fruits" --> true
              // Fruits !== "Vegetables" --> true
              lastCategory = category; // "Fruits" -> "Vegetables"

              catrow = <ProductCategoryRow category={category} />;
            }

            return (
              <>
                {catrow}
                <ProductRow {...obj} />
              </>
            );
          })}
        </tbody>
      </table>
    );
  }
}
