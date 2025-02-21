import { PATH_DB } from "../constants/index.js";
import { createFakeProduct } from "../utils/createFakeProduct.js";
import fs from "node:fs/promises";

const createProducts = async (quantity) => {
	try {
		const productsData = await fs.readFile(PATH_DB, "utf-8");

		const productsList = JSON.parse(productsData);
		const newData = new Array(quantity).fill(createFakeProduct());
		const modifiedProductsList = productsList.concat(newData);
		// const modifiedProductsList = [...productsList, ...newData];

		await fs.writeFile(
			PATH_DB,
			JSON.stringify(modifiedProductsList, null, 2),
			"utf-8"
		);
	} catch (error) {
		console.log(error.message);
	}
};

createProducts(4);
