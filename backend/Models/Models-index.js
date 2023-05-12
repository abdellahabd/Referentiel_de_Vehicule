import Vehicule from "./Vehicule.js";
import Access from "./access.js";
import Contrat from "./Contrat.js";
import User from "./User.js";

import Structer from "./Structer.js";
import Avenant from "./avenant.js";
import Relation from "./relation.js";
import Transporteur from "./transporteur.js";

import Categorie from "./Categorie.js";
import Genre from "./Genre.js";
import Modele from "./Modele.js";

import Type_V from "./Type_V.js";
import marque from "./marque.js";

///////////////////////////////////////////// part 1 ////////////////////////////////////////////////////////////////////////////////

///////// Vehicul Type_V   /////////
Type_V.hasMany(Vehicule, { foreignKey: "type_id" });
Vehicule.belongsTo(Type_V);

/////////  Type_V marque   /////////
marque.hasMany(Type_V, { foreignKey: "marque_id" });
Type_V.belongsTo(marque);

/////////  Type_V marque   /////////
marque.hasMany(Type_V, { foreignKey: "marque_id" });
Type_V.belongsTo(marque);

///////////////////////////////////////////// part 2 ////////////////////////////////////////////////////////////////////////////////

///////// Genre Vehicul /////////
Genre.hasMany(Vehicule);
Vehicule.belongsTo(Genre);

///////// Modele Genre /////////
Genre.hasMany(Modele, { foreignKey: "Genre_id" });
Modele.belongsTo(Genre);

///////// Modele Categorie /////////
Categorie.hasMany(Modele, { foreignKey: "cat_id" });
Modele.belongsTo(Categorie);

///////////////////////////////////////////// part 3 ////////////////////////////////////////////////////////////////////////////////

///////// Structer Contrat /////////
Structer.hasMany(Contrat, { foreignKey: "str" });
Contrat.belongsTo(Structer);

///////// Contrat Avenant /////////
Contrat.hasMany(Avenant, { foreignKey: "Contractid" });
Avenant.belongsTo(Contrat);

///////// Contrat transporteur /////////
Transporteur.hasMany(Contrat, { foreignKey: "tr_id" });
Contrat.belongsTo(Transporteur);

///////// Contrat Vehicule /////////
Contrat.belongsToMany(Vehicule, { through: "Con_veh" });

///////////////////////////////////////////// part 4 ////////////////////////////////////////////////////////////////////////////////

///////// Structer User /////////
Structer.hasMany(User, { foreignKey: "Structerid" });
User.belongsTo(Structer);

///////// Structer Structer /////////
Structer.hasMany(Structer, { foreignKey: "Structerid" });
Structer.belongsTo(Structer, { foreignKey: "Structerid" });

///////// User Access /////////
User.belongsToMany(Access, { through: "User_Access" });
///////////////////////////////////////////// part 4 ////////////////////////////////////////////////////////////////////////////////

export {
  Vehicule,
  Contrat,
  User,
  Structer,
  Access,
  Avenant,
  Categorie,
  Genre,
  marque,
  Modele,
  Type_V,
  Transporteur,
  Relation,
};
