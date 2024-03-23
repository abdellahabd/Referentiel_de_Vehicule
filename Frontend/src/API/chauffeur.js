import axios from "axios";
export const postChauffeur = async (Chauffeur) => {
  const { data } = await axios.post(
    "http://localhost:2500/chauffeur/ajoute",
    Chauffeur
  );
  return data;
};
export const fetchChauffeurs = async () => {
  const { data } = await axios.get("http://localhost:2500/chauffeur/getall");
  return data;
};

export const getChauffeur_contract = async (id_con) => {
  const { data } = await axios.get(
    `http://localhost:2500/chauffeur/getcar/${id_con}`
  );
  return data;
};

export const validateChauffeurr = async (id) => {
  const { data } = await axios.get(
    `http://localhost:2500/chauffeur/validate/${id}`
  );
  return data;
};

export const updateChauffeur = async (modele, id) => {
  const { data } = await axios.put(
    `http://localhost:2500/chauffeur/update/${id}`,
    modele
  );
  return data;
};

export const removeChauffeurr = async (id) => {
  const { data } = await axios.get(
    `http://localhost:2500/chauffeur/remove/${id}`
  );
  return data;
};
export const affictationChauffeurr = async (id, strid) => {
  const { data } = await axios.post(
    `http://localhost:2500/chauffeur/affictation/${id}`,
    { str: strid }
  );
  return data;
};

export const Chauffeur_tier = async () => {
  const { data } = await axios.get(`http://localhost:2500/chauffeur/get_tiers`);
  return data;
};
