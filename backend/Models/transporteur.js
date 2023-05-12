import sequelize from "../Connection/database.js";
import { DATE, DataTypes } from "sequelize";

const transporteur = sequelize.define(
  "transporteur",
  {
    ID_T: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    Adress: { type: DataTypes.STRING },
    telephone: { type: DataTypes.INTEGER },
  },
  { createdAt: false, updatedAt: false }
);

export default transporteur;
