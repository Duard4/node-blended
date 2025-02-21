import fs from "node:fs/promises";
import { PATH_DB } from "../constants/index.js";

const getTotalPrice = async () => {
  const productsData = await fs.readFile(PATH_DB, "utf-8");
  const products = JSON.parse(productsData);
  const totalPrice = products.reduce(
    (total, product) => (total += Number(product.price)),
    0
  );
  console.log(Number(totalPrice.toFixed(2)));
};

getTotalPrice();
