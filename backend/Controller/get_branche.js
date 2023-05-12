import { Structer } from "../Models/Models-index.js";

export const getBranche = async (str) => {
  try {
    var code = str;

    while (code != null) {
      var strucer = await Structer.findOne({ where: { CodeS: code } });
      code = strucer.Structerid;
    }
  } catch (error) {
    console.log(error);
  }

  return strucer.CodeS;
};
