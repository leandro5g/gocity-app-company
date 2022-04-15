import { api } from "../api";

import { Category } from "../../dtos/category";

async function getCategories() {
  try {
    const response = await api.get("/categories-company");

    console.log(response.data);

    const { data } = response;

    return data as Category[];
  } catch (error) {
    console.log(error);
    return "error";
  }
}

export { getCategories };
