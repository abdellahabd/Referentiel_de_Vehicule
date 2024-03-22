import { Structer } from "../Models/Models-index.js";
export const getTypeStr = async (CodeS) => {
  const str = await Structer.findByPk(CodeS);
  // console.log(str);
  return str.type;
};
