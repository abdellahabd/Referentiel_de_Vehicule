import { Structer, Access } from "../Models/Models-index.js";
import { get_strcuters } from "./getSubStructers.js";
export const craete = async () => {
  const Com = await Structer.create({
    wilaya: "Alger",
    Designation: "com",
    location: "Alger",
    abreviation: "Al",
    type: "Branche",
  });

  const gpl = await Structer.create({
    wilaya: "stif",
    Designation: "gpl",
    location: "stif",
    abreviation: "gp",
    type: "Branche",
  });
  const carburent = await Structer.create({
    wilaya: "chlef",
    Designation: "carburent",
    location: "chlef",
    abreviation: "car",
    type: "Branche",
  });

  /////////////////////////////////////////////////////////////////
  const district1 = await Structer.create({
    wilaya: "Alger",
    Designation: "district1",
    abreviation: "d1",
    location: "Alger",
    type: "district",
  });
  const district2 = await Structer.create({
    wilaya: "Alger",
    Designation: "district2",
    abreviation: "d2",
    location: "Alger",
    type: "district",
  });
  const district3 = await Structer.create({
    wilaya: "Alger",
    Designation: "district3",
    abreviation: "d3",
    location: "Alger",
    type: "district",
  });
  /////////////////////////////////////////////////////////////////////
  const centre1 = await Structer.create({
    wilaya: "Alger",
    Designation: "centre1",
    location: "Alger",
    abreviation: "c1",
    type: "centre",
  });
  const centre2 = await Structer.create({
    wilaya: "Alger",
    Designation: "centre2",
    location: "Alger",
    abreviation: "c2",
    type: "centre",
  });
  const centre3 = await Structer.create({
    wilaya: "Alger",
    Designation: "centre3",
    location: "Alger",
    abreviation: "c3",
    type: "centre",
  });
  // const centre4 = Structer.create({
  //   wilaya: "Alger",
  //   Designation: "centre4",
  //   location: "Alger",
  //   abreviation: "Al",
  //   type: "centre",
  // });

  /////////////////////////////////////////////////////////////////////

  // console.log(Structer.prototype);
  await Com.addStructer(district1);
  await gpl.addStructer(district2);
  await carburent.addStructer(district3);

  await district1.addStructer(centre1);
  await district2.addStructer(centre2);
  await district3.addStructer(centre3);

  ///////////////////////////////////////////////////
  await Access.create({ name: "addcar" });
  await Access.create({ name: "removecar" });
  await Access.create({ name: "adduser" });
  await Access.create({ name: "removeruser" });

  return;
};
