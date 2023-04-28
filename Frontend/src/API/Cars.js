import axios from "axios";
export const postcar = async (car) => {
  const { data } = await axios.post("http://localhost:2500/ajoutVehicule", car);
  return data;
};
export const fetchCars = async () => {
  const { data } = await axios.get("http://localhost:2500/vehicules");
  return data.cars;
};
