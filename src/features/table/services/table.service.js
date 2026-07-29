import { api } from "../../../lib/axios";
export const getTableByToken = async (token) => {
  const { data } = await api.get(`/tables/${token}`);

  return data.data;
};
