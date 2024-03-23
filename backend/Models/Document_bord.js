import sequelize from "../Connection/database.js";
import { DataTypes, Op } from "sequelize";
import { scheduleJob } from "node-schedule";
const Document_bord = sequelize.define(
  "Document_bord",
  {
    iD_bord: {
      type: DataTypes.INTEGER,

      primaryKey: true,
      autoIncrement: true,
    },
    nom: { type: DataTypes.STRING, allowNull: false },
    numero: { type: DataTypes.STRING },
    date_Expiration: { type: DataTypes.DATEONLY },
    valid: { type: DataTypes.BOOLEAN },
  },
  { createdAt: false, updatedAt: false }
);
const updateValidity = async () => {
  const currentdate = new Date();
  const expiredDocuments = await Document_bord.findAll({
    where: {
      [Op.and]: [
        { valid: false },
        { date_Expiration: { [Op.lte]: currentdate } },
      ],
    },
  });
  for (const document of expiredDocuments) {
    document.valid = false;
    await document.save();
  }
};
scheduleJob("0 0 * * *", updateValidity);

export default Document_bord;
// schedule.scheduleJob('0 0 * * *', updateValidity);
