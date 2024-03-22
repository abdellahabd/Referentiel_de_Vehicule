import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
const Client = sequelize.define(
  "client",
  {
    idclient: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    num_registre: { type: DataTypes.INTEGER, allowNull: false },
    nom: { type: DataTypes.STRING },
    prenome: { type: DataTypes.STRING },
  },

  { createdAt: false, updatedAt: false }
);

export default Client;
