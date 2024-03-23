import axios from "axios";
export const fetchClients = async () => {
  const { data } = await axios.get("http://localhost:2500/client/getall");
  return data;
};
