import axios from "axios";

export const GetModeles = async () => {
  const { data } = await axios.get(`http://localhost:2500/getmodeles`);
  return data;
};

export const addModele = async (modele) => {
  const { data } = await axios.post(`http://localhost:2500/addmodele`, modele);
  return data;
};

export const validatemodele = async (id) => {
  const { data } = await axios.get(
    `http://localhost:2500/validatemodele/${id}`
  );
  return data;
};
export const removemodele = async (id) => {
  const { data } = await axios.get(`http://localhost:2500/removemodele/${id}`);
  return data;
};
