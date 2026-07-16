import { api } from "../../../lib/axios";

export const getCategories = async () => {
  const { data } = await api.get("/categories");

  return data.map((category) => ({
    ...category,
    id: Number(category.id),
  }));
};
