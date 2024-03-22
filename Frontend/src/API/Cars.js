import axios from "axios";
export const postcar = async (car) => {
  const { data } = await axios.post(
    "http://localhost:2500/vehicule/ajoute",
    car
  );
  return data;
};
export const fetchCarsParc = async () => {
  const { data } = await axios.get("http://localhost:2500/vehicule/getparc");
  return data.cars;
};
export const fetchCarsReforme = async () => {
  const { data } = await axios.get("http://localhost:2500/vehicule/getReforme");
  return data.cars;
};
export const fetchOne = async (id) => {
  const { data } = await axios.get(
    `http://localhost:2500/vehicule/getone/${id}`
  );
  return data.car;
};

export const getcar_contract = async (id_con) => {
  const { data } = await axios.get(
    `http://localhost:2500/vehicule/getcar/${id_con}`
  );
  return data;
};

// export const GetGenres = async () => {
//   const { data } = await axios.get(`http://localhost:2500/vehicule/getgenres`);
//   return data;
// };
export const updateDocement = async (Documant, name, id) => {
  const { data } = await axios.post(
    `http://localhost:2500/vehicule/updateDoc`,
    { Doc: Documant, name: name, id_car: id }
  );
  return data;
};
// export const GetGenre_veh = async (id_v) => {
//   const { data } = await axios.get(
//     `http://localhost:2500/vehicule/getgenre/${id_v}`
//   );
//   return data;
// };

export const validateCar = async (id) => {
  const { data } = await axios.get(
    `http://localhost:2500/vehicule/validate/${id}`
  );
  return data;
};

export const updatecar = async (car, id) => {
  const { data } = await axios.put(
    `http://localhost:2500/vehicule/update/${id}`,
    car
  );
  return data;
};
export const removeCar = async (id) => {
  const { data } = await axios.get(
    `http://localhost:2500/vehicule/remove/${id}`
  );
  return data;
};

export const Vehicules_tier = async () => {
  const { data } = await axios.get(`http://localhost:2500/vehicule/get_tiers`);
  return data;
};

export const CountNotValidDoc = async () => {
  const { data } = await axios.get(
    `http://localhost:2500/vehicule/countNotValidDoc`
  );
  return data;
};
