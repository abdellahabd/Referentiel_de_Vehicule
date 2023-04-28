import axios from "axios";
export const fetchall = async () => {
  const { data } = await axios.get("http://localhost:2500/admin/getusers");
  return data;
};
export const Postadduser = async (user, rolles) => {
  const { data } = await axios.post("http://localhost:2500/admin/adduser", {
    user,
    rolles,
  });
  return data.contarcts;
};
