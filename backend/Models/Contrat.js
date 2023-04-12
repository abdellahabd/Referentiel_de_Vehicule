import sequelize from "../Connection/database.js";
import { DATE, DataTypes } from "sequelize";
const Contrat = sequelize.define("Contrat", {
  Id_Contrar: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement },
  Ref_Contrar: { type: DataTypes.INTEGER, allowNull: false, unique: true },
  validite: { type: DataTypes.BOOLEAN },
  Date_Debut: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  Date_F: { type: DataTypes.DATE, allowNull: false },
});
