import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
const Relation_Source_Distination = sequelize.define(
  "Relation_S_D",
  {
    Pu: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    km: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // RelationId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "relation",
    //     key: "idr",
    //   },
    // },
    // sourceid: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "Structer",
    //     key: "CodeS",
    //   },
    // },
    // disIdStructer: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "Structer",

    //     key: "CodeS",
    //   },
    // },
    // disIdCleint: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: "client",
    //     key: "idclient",
    //   },
    // },
  },
  { createdAt: false, updatedAt: false }
);

export default Relation_Source_Distination;
