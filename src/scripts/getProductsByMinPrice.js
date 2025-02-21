import fs from "node:fs/promises";
import { PATH_DB } from "../constants/index.js";

const getProductsByMinPrice = async (minPrice) => {
  try {
    const productsData = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(productsData);
    const filterByPrice = products.filter(
      (product) => product.price >= minPrice
    );
    console.table(filterByPrice);
  } catch (error) {
    console.log(error);
  }
};

getProductsByMinPrice(500);
