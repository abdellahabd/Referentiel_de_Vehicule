import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
const Contrat = sequelize.define(
  "Contrat",
  {
    Id_Contrar: {
      type: DataTypes.INTEGER,

      primaryKey: true,
      autoIncrement: true,
    },
    Ref_Contrar: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    type: { type: DataTypes.STRING, values: ["gree a gree", "consulataton"] },
    validite: { type: DataTypes.BOOLEAN, defaultValue: false },
    Date_Debut: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
    Date_F: { type: DataTypes.DATEONLY, allowNull: false },
  },
  { createdAt: false, updatedAt: false }
);

export default Contrat;
