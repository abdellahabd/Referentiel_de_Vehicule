import { Structer } from "../Models/Models-index.js";
import { Op } from "sequelize";
export const get_strcuters = async (str, type) => {
  var allstrs = [];

  if (type === "centre") {
    return [str];
  } else {
    allstrs = await Structer.findAll({ where: { Structerid: str } });
    if (type === "Branche") {
      const instances = await Structer.findAll({
        where: { [Op.or]: allstrs.map((str) => ({ Structerid: str.CodeS })) },
      });
      allstrs = [...allstrs, ...instances];
    }
    const result = [str, ...allstrs.map((e) => e.CodeS)];
    return result;
  }
};
