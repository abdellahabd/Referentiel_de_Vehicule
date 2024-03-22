import axios from "axios";

export const GetModeles = async () => {
  const { data } = await axios.get(`http://localhost:2500/modele/getalls`);
  return data;
};

export const addModele = async (modele) => {
  const { data } = await axios.post(`http://localhost:2500/modele/add`, modele);
  return data;
};
export const GetGenres = async () => {
  const { data } = await axios.get(`http://localhost:2500/modele/getgenres`);
  return data;
};
export const updateModele = async (modele, id) => {
  const { data } = await axios.post(
    `http://localhost:2500/modele/update/${id}`,
    modele
  );
  return data;
};
export const validatemodele = async (id) => {
  const { data } = await axios.get(
    `http://localhost:2500/modele/validate/${id}`
  );
  return data;
};
export const removemodele = async (id) => {
  const { data } = await axios.get(`http://localhost:2500/modele/remove/${id}`);
  return data;
};
