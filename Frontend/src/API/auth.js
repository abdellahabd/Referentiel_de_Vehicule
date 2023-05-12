import axios from "axios";
axios.defaults.withCredentials = true;
export const postUserLogin = async (User) => {
  const { data } = await axios.post("http://localhost:2500/login", User);
  return data;
};
export const getuser = async () => {
  const { data } = await axios.get("http://localhost:2500/login");
  return data;
};

export const logout = async () => {
  const { data } = await axios.get("http://localhost:2500/logout");
  return data;
};
