import axios from "axios";
export const postContart = async (Contrat, cars) => {
  const { data } = await axios.post("http://localhost:2500/addcontat", {
    Contrat,
    cars,
  });
  return data;
};
export const fetchAll = async () => {
  const { data } = await axios.get("http://localhost:2500/vehicules");
  return data.contarcts;
};
