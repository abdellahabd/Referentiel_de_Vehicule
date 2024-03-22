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
  await Access.create({ name: "viewsCar" });
  await Access.create({ name: "removecar" });
  await Access.create({ name: "Validcar" });
  await Access.create({ name: "editcar" });
  await Access.create({ name: "addcar" });
  await Access.create({ name: "affectcar" });
  ///////////////////////////////////////////////////
  await Access.create({ name: "viewsContrat" });
  await Access.create({ name: "removeContrat" });
  await Access.create({ name: "ValidContrat" });
  await Access.create({ name: "editContrat" });
  await Access.create({ name: "addContrat" });
  await Access.create({ name: "avnenantContrat" });
  ///////////////////////////////////////////////////
  await Access.create({ name: "viewsuser" });
  await Access.create({ name: "removeruser" });
  await Access.create({ name: "Validuser" });
  await Access.create({ name: "edituser" });
  await Access.create({ name: "adduser" });
  ///////////////////////////////////////////////////
  await Access.create({ name: "viewsModele" });
  await Access.create({ name: "removeModele" });
  await Access.create({ name: "ValidModele" });
  await Access.create({ name: "editModele" });
  await Access.create({ name: "addModele" });
  ///////////////////////////////////////////////////
  await Access.create({ name: "viewsChauffeur" });
  await Access.create({ name: "removeChauffeur" });
  await Access.create({ name: "ValidChauffeur" });
  await Access.create({ name: "editChauffeur" });
  await Access.create({ name: "addChauffeur" });
  ///////////////////////////////////////////////////
  await Access.create({ name: "viewsRelation" });
  await Access.create({ name: "removeRelation" });
  await Access.create({ name: "ValidRelation" });
  await Access.create({ name: "editRelation" });
  await Access.create({ name: "addRelation" });

  //////////////////////////////////////////////////////

  ///////////////////////////////////////////////////
  const r1 = await Com.createRelation_S_D({ Pu: 232, km: "flplv" });
  const r2 = await Com.createRelation_S_D({ Pu: 232, km: "flplv" });
  const r3 = await Com.createRelation_S_D({ Pu: 232, km: "flplv" });

  const r4 = await gpl.createRelation_S_D({ Pu: 232, km: "flplv" });
  const r5 = await gpl.createRelation_S_D({ Pu: 232, km: "flplv" });
  const r6 = await gpl.createRelation_S_D({ Pu: 232, km: "flplv" });

  await r1.setDisnitaionStr(gpl);
  await r1.setSource(carburent);

  await r2.setDisnitaionStr(district1);
  await r2.setSource(district2);

  await r3.setDisnitaionStr(district1);
  await r3.setSource(district3);

  await r4.setDisnitaionStr(gpl);
  await r4.setSource(carburent);

  await r5.setDisnitaionStr(gpl);
  await r5.setSource(carburent);

  await r6.setDisnitaionStr(gpl);
  await r6.setSource(carburent);

  // await r1.setDisnitaionStr(gpl);
  // await r1.setSource(carburent);

  return;
};
