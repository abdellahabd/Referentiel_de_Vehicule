import Vehicule from "./Vehicule.js";
import Access from "./access.js";
import Contrat from "./Contrat.js";
import User from "./User.js";

import Structer from "./Structer.js";
import Avenant from "./avenant.js";
import Transporteur from "./transporteur.js";
import Categorie from "./Categorie.js";
import Genre from "./Genre.js";
import Modele from "./Modele.js";

import Client from "./Client.js";
import Chauffeur from "./chauffeur.js";
import Relation_S_D from "./Relation_Source_Distination.js";
import Document_bord from "./Document_bord.js";
// import Type_V from "./Type_V.js";
import marque from "./marque.js";
import Con_veh from "./con_veh.js";

///////////////////////////////////////////// part 1 ////////////////////////////////////////////////////////////////////////////////

///////// Vehicul Type_V   /////////
// Type_V.hasMany(Vehicule);
// Vehicule.belongsTo(Type_V);

/////////  Type_V marque   /////////
// marque.hasMany(Type_V);
// Type_V.belongsTo(marque);

/////////  Document_bord marque   /////////
Vehicule.hasMany(Document_bord);
Document_bord.belongsTo(Vehicule);

///////////////////////////////////////////// part 2 ////////////////////////////////////////////////////////////////////////////////

///////// Modele  marque   /////////
marque.hasMany(Modele);
Modele.belongsTo(marque);

///////// Genre Modele /////////
Modele.hasMany(Vehicule);
Vehicule.belongsTo(Modele);

///////// Modele Genre /////////
Genre.hasMany(Modele);
Modele.belongsTo(Genre);

///////// Modele Categorie /////////
// Categorie.hasMany(Modele);
// Modele.belongsTo(Categorie);

///////////////////////////////////////////// part 3 ////////////////////////////////////////////////////////////////////////////////

///////// Structer Contrat /////////
Structer.hasMany(Contrat);
Contrat.belongsTo(Structer);

///////// Contrat Avenant /////////
Contrat.hasMany(Avenant);
Avenant.belongsTo(Contrat);

///////// Contrat transporteur /////////
Transporteur.hasMany(Contrat);
Contrat.belongsTo(Transporteur);

///////// Contrat Vehicule /////////
Contrat.belongsToMany(Vehicule, { through: Con_veh });
Vehicule.belongsToMany(Contrat, { through: Con_veh });

///////// Contrat Chauffeur /////////
Contrat.belongsToMany(Chauffeur, { through: "con_Chf" });

///////// Contrat Relation  /////////
Contrat.belongsToMany(Relation_S_D, { through: "con_relation" });

///////////////////////////////////////////// part 4 ////////////////////////////////////////////////////////////////////////////////

///////// Structer User /////////
Structer.hasMany(User);
User.belongsTo(Structer);

///////// Structer Structer /////////
Structer.hasMany(Structer);
Structer.belongsTo(Structer);

///////// Structer Relation /////////
Structer.hasMany(Relation_S_D);
Relation_S_D.belongsTo(Structer);

///////// Structer Vehicule /////////
Structer.hasMany(Vehicule);
Vehicule.belongsTo(Structer);

///////// Structer Chauffeur /////////
Structer.hasMany(Chauffeur);
Chauffeur.belongsTo(Structer);

///////// User Access /////////
User.belongsToMany(Access, { through: "User_Access" });
///////////////////////////////////////////// part 5 ////////////////////////////////////////////////////////////////////////////////

// Distination.hasOne(Client, {});
// Distination.hasOne(Structer);
// // /
// // // Relation.belongsToMany(Client, {
// // //   through: Relation_S_D,
// // //   as: "distinationC",
// // //   foreignKey: "disIdCleint",
// // //   sourceKey: "idr",
// // // });
// // // Client;

// // // Relation.hasMany(Structer, {
// // //   throug: Relation_S_D,
// // //   as: "source",
// // //   foreignKey: "sourceid",
// // //   sourceKey: "idr",
// // // });

// // // Relation.belongsToMany(Structer, {
// // //   through: Relation_S_D,
// // //   as: "distinationS",
// // //   foreignKey: "disIdStructer",
// // //   sourceKey: "idr",
// // // });
// /
Relation_S_D.belongsTo(Structer, {
  as: "disnitaionStr",
  foreignKey: "DiIdStr",
});
Relation_S_D.belongsTo(Structer, { as: "source", foreignKey: "sourcid" });
Relation_S_D.belongsTo(Client, { as: "disnitaionCln", foreignKey: "DiIdC" });
// Relation_S_D.belongsTo(Relation);

// Client.belongsToMany(Structer, {
//   as: "distinationclient",
//   through: Relation_S_D,
// });
// Relation.belongsToMany(Distination, { through: Relation_S_D });

// Relation.belongsToMany(Structer, { through: Relation_S_D });

// Distination.belongsToMany(Structer, { through: Relation_S_D });
// Structer.belongsToMany(Distination, { through: Relation_S_D });

// Distination.belongsToMany(Relation, { through: Relation_S_D });
// Relation.belongsToMany(Distination, { through: Relation_S_D });

// Relation.belongsToMany(Structer, { through: Relation_S_D });
// Structer.belongsToMany(Relation, { through: Relation_S_D });

// Distination.belongsToMany(Structer, { through: Relation_S_D });
// Structer.belongsToMany(Distination, { through: Relation_S_D });

// console.log(User.prototype);

// console.log(Contrat.prototype);

// console.log(User.prototype);
// console.log(Vehicule.prototype);

export {
  Vehicule,
  Contrat,
  User,
  Structer,
  Access,
  Avenant,
  Categorie,
  Chauffeur,
  Genre,
  marque,
  Modele,
  Document_bord,
  Transporteur,
  Client,
  Relation_S_D,
  Con_veh,
};
