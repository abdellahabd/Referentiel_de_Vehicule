import axios from "axios";
export const postContart = async (Contrat, trons, infor) => {
  const { data } = await axios.post("http://localhost:2500/addcontat", {
    Contrat,
    trons,
    infor,
  });
  return data;
};
export const fetchAll = async () => {
  const { data } = await axios.get("http://localhost:2500/getContracts");
  return data;
};

export const fetchTransporteurs = async () => {
  const { data } = await axios.get("http://localhost:2500/getTransporteurs");
  return data;
};

export const getbyid = async (id) => {
  const { data } = await axios.get(`http://localhost:2500/getContract/${id}`);
  return data;
};

export const getAvenants = async (id) => {
  const { data } = await axios.get(`http://localhost:2500/getavenants/${id}`);
  return data;
};
export const addAvenant = async (id) => {
  const { data } = await axios.post(`http://localhost:2500/addavenant/${id}`);
  return data;
};
export const counterWarning = async () => {
  const { data } = await axios.get(`http://localhost:2500/counterWarning`);
  return data;
};

export const validateContract = async (id) => {
  const { data } = await axios.get(
    `http://localhost:2500/validatecontract/${id}`
  );
  return data;
};

export const removeContract = async (id) => {
  const { data } = await axios.get(
    `http://localhost:2500/removecontract/${id}`
  );
  return data;
};
