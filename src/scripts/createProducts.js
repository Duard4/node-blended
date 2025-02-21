import { PATH_DB } from "../constants/index.js";
import { createFakeProduct } from "../utils/createFakeProduct.js";
import fs from "node:fs/promises";

const createProducts = async (quantity) => {
  try {
    const productsData = await fs.readFile(PATH_DB, "utf-8");

    const productsList = JSON.parse(productsData);
    //   First implementation
    const newData = new Array(quantity).fill(0).map(() => createFakeProduct());
    // const modifiedProductsList = productsList.concat(newData);
    const modifiedProductsList = [...productsList, ...newData];
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(modifiedProductsList, null, 2),
      "utf-8"
    );
    //   Second implementation
    // for (let i = 1; i <= quantity; i += 1) {
    //   productsList.push(createFakeProduct());
    // }
    // await fs.writeFile(PATH_DB, JSON.stringify(productsList, null, 2), "utf-8");
  } catch (error) {
    console.log(error.message);
  }
};

createProducts(4);
