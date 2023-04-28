import axios from "axios";
export const fetchallStr = async () => {
  const { data: allstructer } = await axios.get(
    "http://localhost:2500/structer/getall"
  );
  return allstructer;
};
// export const fetchAll = async () => {
//   const { data } = await axios.get("http://localhost:2500/vehicules");
//   return data.contarcts;
// };
