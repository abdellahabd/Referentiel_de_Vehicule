import {
  Vehicule,
  Contrat,
  Structer,
  Genre,
  Transporteur,
  Modele,
} from "../Models/Models-index.js";

export const create_data = async () => {
  const con1 = await Contrat.create({
    Ref_Contrar: 75962,
    Date_F: Date.now(),
    type: "gree a gree",
  });
  const con2 = await Contrat.create({
    Ref_Contrar: 2343524,
    Date_F: Date.now(),
    type: "gree a gree",
  });
  const con3 = await Contrat.create({
    Ref_Contrar: 42397,
    Date_F: Date.now(),
    type: "gree a gree",
  });
  const con4 = await Contrat.create({
    Ref_Contrar: 32432,
    Date_F: Date.now(),
    type: "consulataton",
  });
  const con5 = await Contrat.create({
    Ref_Contrar: 456547,
    Date_F: Date.now(),
    type: "gree a gree",
  });
  const con6 = await Contrat.create({
    Ref_Contrar: 234665675,
    Date_F: Date.now(),
    type: "gree a gree",
  });
  const con7 = await Contrat.create({
    Ref_Contrar: 2345346,
    Date_F: Date.now(),
    type: "gree a gree",
  });
  const con8 = await Contrat.create({
    Ref_Contrar: 6445324,
    Date_F: Date.now(),
    type: "consulataton",
  });
  const con9 = await Contrat.create({
    Ref_Contrar: 8656454,
    Date_F: Date.now(),
    type: "gree a gree",
  });
  const con10 = await Contrat.create({
    Ref_Contrar: 1064326,
    Date_F: Date.now(),
    type: "gree a gree",
  });
  const con11 = await Contrat.create({
    Ref_Contrar: 3456789,
    Date_F: Date.now(),
    type: "consulataton",
  });
  const con12 = await Contrat.create({
    Ref_Contrar: 656456,
    Date_F: Date.now(),
    type: "gree a gree",
  });
  const con13 = await Contrat.create({
    Ref_Contrar: 8592093,
    Date_F: Date.now(),
    type: "consulataton",
  });
  const con14 = await Contrat.create({
    Ref_Contrar: 2342304,
    Date_F: Date.now(),
    type: "gree a gree",
  });

  const str1 = await Structer.findByPk(1);
  const str2 = await Structer.findByPk(2);
  const str3 = await Structer.findByPk(3);
  const str4 = await Structer.findByPk(4);
  const str5 = await Structer.findByPk(5);
  const str6 = await Structer.findByPk(6);
  const str7 = await Structer.findByPk(7);
  const str8 = await Structer.findByPk(8);
  const str9 = await Structer.findByPk(9);

  const veh1 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,
    Matricule: "sdfghjk",
    type: "tiers",
  });
  const veh2 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    Matricule: "cvbnm,",
    type: "tiers",
  });
  const veh3 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    Matricule: "erghj",
    type: "tiers",
  });
  const veh4 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    Matricule: "kofew",
    type: "tiers",
  });
  const veh5 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    Matricule: "fssdfio",
    type: "tiers",
  });
  const veh6 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    Matricule: "mcifwe",
    type: "tiers",
    type: "tiers",
  });
  const veh7 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "qwpadja",
  });
  const veh8 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "noasje",
  });
  const veh9 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "asvcxpo",
  });
  const veh10 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "popxsc",
  });
  const veh11 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "buisad",
  });
  const veh12 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "cxpo",
  });
  const veh13 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "cxcasw",
  });
  const veh14 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "mxnous",
  });
  const veh15 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "qpeiun",
  });
  const veh16 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "xgsicba",
  });
  const veh17 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "ifjdken",
  });
  const veh18 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "cbsoien",
  });
  const veh19 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "ocinsh",
  });
  const veh20 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "echspoe",
  });
  const veh21 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "nkchape",
  });
  const veh22 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "hivnsds",
  });
  const veh23 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "gkcjw",
  });
  const veh24 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "nkdhwp",
  });
  const veh25 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,
    type: "tiers",
    Matricule: "kkqkwu",
  });
  const veh26 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "ncwhdwp",
  });
  const veh27 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "cnijwdw",
  });
  const veh28 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "mcwdwdwdkm",
  });
  const veh29 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "widjwiod",
  });
  const veh30 = await Vehicule.create({
    Code_Viecule: `${Math.random()}`,

    type: "tiers",
    Matricule: "kddxlwpd",
  });

  await con1.addVehicules([veh1, veh2, veh3]);
  await con2.addVehicules([veh4, veh5]);
  await con3.addVehicules([veh6, veh7]);
  await con4.addVehicules([veh8, veh9]);
  await con5.addVehicules([veh10, veh11]);
  await con6.addVehicules([veh12, veh13]);
  await con7.addVehicules([veh14, veh15]);
  await con8.addVehicules([veh16, veh17]);
  await con9.addVehicules([veh18, veh19]);
  await con10.addVehicules([veh20, veh21]);
  await con11.addVehicules([veh22, veh23]);
  await con12.addVehicules([veh24, veh25]);
  await con13.addVehicules([veh26, veh27]);
  await con14.addVehicules([veh29, veh28, veh30]);

  await str1.addContrats([con1, con2]);
  await str2.addContrats([con3, con4]);
  await str3.addContrats([con5, con6]);
  await str4.addContrats([con7, con8]);
  await str5.addContrats([con9, con10]);
  await str6.addContrats(con11);
  await str7.addContrats(con12);
  await str8.addContrats(con13);
  await str9.addContrats(con14);

  const g1 = await Genre.create({ name: "gerne1", id_G: "L" });
  const g2 = await Genre.create({ name: "gerne2", id_G: "A" });
  const g3 = await Genre.create({ name: "gerne3", id_G: "M" });
  const g4 = await Genre.create({ name: "gerne4", id_G: "N" });
  const g5 = await Genre.create({ name: "gerne5", id_G: "B" });
  const g6 = await Genre.create({ name: "gerne6", id_G: "P" });
  const g7 = await Genre.create({ name: "gerne7", id_G: "Q" });
  const g8 = await Genre.create({ name: "gerne8", id_G: "W" });
  const g9 = await Genre.create({ name: "gerne9", id_G: "I" });
  const g10 = await Genre.create({ name: "gerne10", id_G: "F" });
  const g11 = await Genre.create({ name: "gerne11", id_G: "S" });

  await g1.addVehicules([veh1, veh2, veh3]);
  await g2.addVehicules([veh4, veh5]);
  await g3.addVehicules([veh6, veh7]);
  await g4.addVehicules([veh8, veh9]);
  await g5.addVehicules([veh10, veh11]);
  await g6.addVehicules([veh12, veh13]);
  await g7.addVehicules([veh14, veh15]);
  await g8.addVehicules([veh16, veh17]);
  await g9.addVehicules([veh18, veh19]);
  await g10.addVehicules([veh20, veh21]);
  await g11.addVehicules([veh22, veh23]);

  await Transporteur.create({
    name: "abdellah",
    Adress: "sdfsdgs",
    telephone: 12312321,
  });
  await Transporteur.create({
    name: "ahmad",
    Adress: "dsadsasdsad",
    telephone: 5554032,
  });
  await Transporteur.create({
    name: "samir",
    Adress: "sddasdsa'dafsdgs",
    telephone: 3213123,
  });
  await Transporteur.create({
    name: "fouad",
    Adress: "dasdssadsa",
    telephone: 32132132,
  });
  await Transporteur.create({
    name: "zoubir",
    Adress: "dsadsads",
    telephone: 3242342,
  });

  await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "fsdfsdfs",
    BV_marque: "fsdfdsfds",
  });
  await Modele.create({
    moteur_Puossance: "sdsfsd",
    moteur_type: "V",
    Cylindree: "fsdfsdf",
    BV_type: "dsfsds",
    BV_marque: "dfsfegkuky",
  });
  await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "eheyhtr",
    BV_type: "therfg",
    BV_marque: "ferrgre",
  });
  await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "fsdfsdfs",
    BV_marque: "fsdfdsfds",
  });
  await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "fsdfsdfs",
    BV_marque: "fsdfdsfds",
  });
  await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "L",
    Cylindree: "gsgds",
    BV_type: "fsdfsdfs",
    BV_marque: "fsdfdsfds",
  });
  await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "fsdfsdfs",
    BV_marque: "fsdfdsfds",
  });
  await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "fsdfsdfs",
    BV_marque: "fsdfdsfds",
  });
  await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "fsdfsdfs",
    BV_marque: "fsdfdsfds",
  });
  await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "fsdfsdfs",
    BV_marque: "fsdfdsfds",
  });
  await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "fsdfsdfs",
    BV_marque: "fsdfdsfds",
  });

  return;
};
