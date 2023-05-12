export const logout = async () => {
  const { data } = await axios.get("http://localhost:2500/");
  return data;
};
