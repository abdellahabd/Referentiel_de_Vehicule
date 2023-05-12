import sequelize from "../Connection/database.js";

import { DataTypes } from "sequelize";
const Genre = sequelize.define(
  "genre",
  {
    name: { type: DataTypes.STRING },
    id_G: { primaryKey: true, type: DataTypes.CHAR },
  },
  { createdAt: false, updatedAt: false }
);

export default Genre;
