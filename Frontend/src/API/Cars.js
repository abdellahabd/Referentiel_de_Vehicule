import axios from "axios";
export const postcar = async (car) => {
  const { data } = await axios.post(
    "http://localhost:2500/vehicule/ajoute",
    car
  );
  return data;
};
export const fetchCars = async () => {
  const { data } = await axios.get("http://localhost:2500/vehicule/getall");
  return data.cars;
};

export const getcar_contract = async (id_con) => {
  const { data } = await axios.get(
    `http://localhost:2500/vehicule/getcar/${id_con}`
  );
  return data;
};

export const GetGenres = async () => {
  const { data } = await axios.get(`http://localhost:2500/vehicule/getgenres`);
  return data;
};

export const validateCar = async (id) => {
  const { data } = await axios.get(
    `http://localhost:2500/vehicule/validate/${id}`
  );
  return data;
};
export const removeCar = async (id) => {
  const { data } = await axios.get(
    `http://localhost:2500/vehicule/remove/${id}`
  );
  return data;
};
