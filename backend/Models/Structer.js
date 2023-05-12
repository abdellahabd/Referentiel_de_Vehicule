import sequelize from "../Connection/database.js";
import { DATE, DataTypes } from "sequelize";

const Structer = sequelize.define(
  "Structer",
  {
    CodeS: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    wilaya: { type: DataTypes.STRING },
    Designation: { type: DataTypes.STRING, unique: true },
    abreviation: { type: DataTypes.STRING },
    location: { type: DataTypes.STRING },
    type: {
      type: DataTypes.STRING,
      values: ["Branche", "district", "Dg", "centre"],
    },
    // Branch: { type: DataTypes.STRING ,values:["Branche","di"] },
  },
  { createdAt: false, updatedAt: false }
);

export default Structer;
