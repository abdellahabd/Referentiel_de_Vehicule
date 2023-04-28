import Vehicule from "./Vehicule.js";
import Access from "./access.js";
import Contrat from "./Contrat.js";
import User from "./User.js";
import ContractVehicle from "./ContractVehicle.js";
import Structer from "./Structer.js";

Contrat.belongsToMany(Vehicule, {
  through: ContractVehicle,
});

User.belongsToMany(Access, { through: "User_Access" });

Structer.hasMany(User, { foreignKey: "Structerid" });
User.belongsTo(Structer);

Structer.hasMany(Structer, { foreignKey: "Structerid" });
Structer.belongsTo(Structer, { foreignKey: "Structerid" });

export { Vehicule, Contrat, User, Structer, Access };
