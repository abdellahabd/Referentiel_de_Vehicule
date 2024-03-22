import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  initialState: { name: "" },
  name: "user",
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeuser: (state, action) => {
      return {};
    },
  },
});
const DoirtUser = createSlice({
  initialState: {
    Contrat: [false, false, false, false, false, false],
    Modele: [false, false, false, false, false],
    car: [false, false, false, false, false, false],
    chf: [false, false, false, false, false],
    relation: [false, false, false, false, false],
    user: [false, false, false, false, false],
  },
  name: "Droit",
  reducers: {
    adddroit: (state, action) => {
      return action.payload;
    },
    removeDoirt: (state, action) => {
      return {};
    },
  },
});

const ContractSlices = createSlice({
  initialState: [],
  name: "Contract_cars",
  reducers: {
    addcars: (ContractCars, action) => {
      return [...ContractCars, action.payload];
    },
    removecar(ContractCars, action) {
      return ContractCars.filter((car) => car.Code_Viecule != action.payload);
    },
    submitContrat(ContractCars, action) {
      return [];
    },
  },
});

export const store = configureStore({
  reducer: {
    Contract_cars: ContractSlices.reducer,
    User: user.reducer,
    Droit: DoirtUser.reducer,
  },
});
export const { addcars, removecar, submitContrat } = ContractSlices.actions;
export const { addUser, removeuser } = user.actions;
export const { adddroit, removeDoirt } = DoirtUser.actions;
