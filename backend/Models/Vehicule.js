import sequelize from "../Connection/database.js";
import { DataTypes } from "sequelize";
import Document_bord from "./Document_bord.js";
const Vehicule = sequelize.define(
  "vehicule",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Code_Viecule: {
      type: DataTypes.STRING,
      unique: true,
    },
    Matricule: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    validite: { type: DataTypes.BOOLEAN, defaultValue: false },
    validite_d: { type: DataTypes.BOOLEAN, defaultValue: false },
    type: {
      type: DataTypes.STRING,
      values: ["Naftal", "tiers"],
      defaultValue: "Naftal",
    },
    numero_chassis: {
      type: DataTypes.STRING,
      unique: true,
    },

    state: {
      type: DataTypes.STRING,
      defaultValue: "en marche",
      values: [
        "En attente d'affectation",
        "immobilise",
        "en marche",
        "en instance de reforme",
        "propose a la reforme",
        "reforme",
        "liquide",
      ],
    },
  },
  { createdAt: false, updatedAt: false }
);

Vehicule.afterCreate(async (car) => {
  const m = await car.getModele();
  const g = m.genreIdG;
  if (car.type == "Naftal") {
    await Vehicule.update(
      { Code_Viecule: g + car.id.toString().padStart(5, "0") },
      { where: { id: car.id } }
    );
  } else {
    await Vehicule.update(
      { Code_Viecule: car.id.toString().padStart(5, "0") + g },
      { where: { id: car.id } }
    );
  }
  await car.createDocument_bord({ nom: "Assurance" });
  await car.createDocument_bord({ nom: "Carte grise" });
  await car.createDocument_bord({ nom: "Contrôle technique" });
  await car.createDocument_bord({ nom: "Permis de conduire" });
  await car.createDocument_bord({ nom: "Vignette" });
  await car.createDocument_bord({ nom: "ATMD" });
});
// Vehicule.beforeCreate(async (instance) => {
//   const getid = await instance.getGenre();
//   // console.log(getid.id_G);
//   const id = await Vehicule.max("id");
//   // findOne({
//   //   attributes: [[sequelize.fn("MAX", sequelize.col("id")), "maxId"]],
//   //   row: true,
//   // });
//   if (id == null) {
//     instance.Code_Viecule = new String(getid) + "00000";
//   }

// });

export default Vehicule;
