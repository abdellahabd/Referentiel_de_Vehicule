import { DataTypes } from "sequelize";
import sequelize from "../Connection/database.js";

const Access = sequelize.define("Access", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default Access;
