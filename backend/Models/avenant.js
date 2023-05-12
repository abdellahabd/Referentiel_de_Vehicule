import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";

const avenant = sequelize.define(
  "avenant",
  {
    id_avenant: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date_d: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    type_A: {
      type: DataTypes.STRING,
      values: [
        "Prolongation",
        "Remplacement_vehicule",
        "Remplacement_CHAUFFEUR",
        "RELATION_AVENANT",
      ],
    },
    Date_fin_prolongation: {
      type: DataTypes.DATE,
    },
  },
  { createdAt: false, updatedAt: false }
);

export default avenant;
