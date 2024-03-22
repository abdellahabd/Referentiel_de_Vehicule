import axios from "axios";
export const fetchall = async () => {
  const { data } = await axios.get("http://localhost:2500/admin/getusers");
  return data;
};
export const fetchOne = async (id) => {
  const { data } = await axios.get(`http://localhost:2500/admin/getone/${id}`);
  return data;
};
export const Postadduser = async (user, rolles) => {
  const { data } = await axios.post("http://localhost:2500/admin/adduser", {
    user,
    rolles,
  });
  return data;
};

export const updateuser = async (user, rolles, id) => {
  const { data } = await axios.put(`http://localhost:2500/admin/update/${id}`, {
    user,
    rolles,
  });
  return data;
};

export const validate = async (id) => {
  const { data } = await axios.get(
    `http://localhost:2500/admin/validate/${id}`
  );
  return data;
};

export const removeuser = async (id) => {
  const { data } = await axios.get(`http://localhost:2500/admin/remove/${id}`);
  return data;
};
