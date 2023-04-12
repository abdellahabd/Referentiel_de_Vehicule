import axios from "axios";

export const fetchCars = async () => {
  const response = await axios.get("http://localhost:2500/vehicule");
  return response.data.cars;
};
