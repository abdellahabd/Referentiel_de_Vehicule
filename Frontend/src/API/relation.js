import axios from "axios";

export const Getrelations = async () => {
  const { data } = await axios.get(`http://localhost:2500/relation/getall`);
  return data;
};

export const addrelations = async (relation) => {
  const { data } = await axios.post(
    `http://localhost:2500/relation/addone`,
    relation
  );
  return data;
};

export const Get_Sourc_relations = async () => {
  const { data } = await axios.get(`http://localhost:2500/relation/getSourcs`);
  return data;
};

export const validaterelations = async (id) => {
  const { data } = await axios.get(`http://localhost:2500/relation/${id}`);
  return data;
};
export const removerelations = async (id) => {
  const { data } = await axios.get(`http://localhost:2500/relation/${id}`);
  return data;
};
