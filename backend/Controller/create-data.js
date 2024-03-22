import {
  Vehicule,
  Contrat,
  Structer,
  Genre,
  Transporteur,
  Modele,
  User,
  Client,
  Chauffeur,
  Access,
} from "../Models/Models-index.js";
import bcrypt from "bcryptjs";
export const create_data = async () => {
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

  const con1 = await Contrat.create({
    transporteurIDT: 1,
    Ref_Contrar: 75962,
    Date_F: new Date("2023-05-29"),
    type: "gree a gree",
    StructerCodeS: 1,
  });
  const con2 = await Contrat.create({
    Ref_Contrar: 2343524,
    Date_F: Date.now(),
    type: "gree a gree",
    StructerCodeS: 1,
    transporteurIDT: 2,
  });
  const con3 = await Contrat.create({
    Ref_Contrar: 42397,
    Date_F: new Date("2023-06-08"),
    type: "gree a gree",
    StructerCodeS: 7,
    transporteurIDT: 3,
  });
  const con4 = await Contrat.create({
    Ref_Contrar: 32432,
    Date_F: Date.now(),
    type: "consulataton",
    StructerCodeS: 2,
    transporteurIDT: 4,
  });
  const con5 = await Contrat.create({
    Ref_Contrar: 456547,
    Date_F: Date.now("2023-06-11"),
    type: "gree a gree",
    StructerCodeS: 4,
    transporteurIDT: 5,
  });
  const con6 = await Contrat.create({
    Ref_Contrar: 234665675,
    Date_F: Date.now("2023-06-20"),
    type: "gree a gree",
    StructerCodeS: 1,
    transporteurIDT: 1,
  });
  const con7 = await Contrat.create({
    Ref_Contrar: 2345346,
    Date_F: Date.now(),
    type: "gree a gree",
    StructerCodeS: 6,
    transporteurIDT: 2,
  });
  const con8 = await Contrat.create({
    Ref_Contrar: 6445324,
    Date_F: Date.now("2023-06-24"),
    type: "consulataton",
    StructerCodeS: 1,
    transporteurIDT: 3,
  });
  const con9 = await Contrat.create({
    Ref_Contrar: 8656454,
    Date_F: Date.now("2023-04-20"),
    type: "gree a gree",
    StructerCodeS: 4,
    transporteurIDT: 4,
  });
  const con10 = await Contrat.create({
    Ref_Contrar: 1064326,
    Date_F: Date.now(),
    type: "gree a gree",
    StructerCodeS: 4,
    transporteurIDT: 5,
  });
  const con11 = await Contrat.create({
    Ref_Contrar: 3456789,
    Date_F: Date.now(),
    type: "consulataton",
    StructerCodeS: 7,
    transporteurIDT: 1,
  });
  const con12 = await Contrat.create({
    Ref_Contrar: 656456,
    Date_F: Date.now(),
    type: "gree a gree",
    StructerCodeS: 4,
    transporteurIDT: 2,
  });
  const con13 = await Contrat.create({
    Ref_Contrar: 8592093,
    Date_F: Date.now(),
    type: "consulataton",
    StructerCodeS: 1,
    transporteurIDT: 3,
  });
  const con14 = await Contrat.create({
    Ref_Contrar: 2342304,
    Date_F: Date.now(),
    type: "gree a gree",
    StructerCodeS: 1,
    transporteurIDT: 4,
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

  const g1 = await Genre.create({ name: "CAMION ANTI-INCENDIE", id_G: "H" });
  const g2 = await Genre.create({ name: "CAMION BENNE", id_G: "D" });
  const g3 = await Genre.create({ name: "VEHICULE UTILITAIRE", id_G: "Y" });
  const g4 = await Genre.create({ name: "TRACTEUR ROUTIER", id_G: "L" });
  const g5 = await Genre.create({ name: "TRACTEUR AVITAILLEUR", id_G: "W" });
  const g6 = await Genre.create({
    name: "SEMI-REMORQUE PORTE-PALETTES",
    id_G: "P",
  });
  const g7 = await Genre.create({ name: " SEMI-REMORQUE PLATEAU", id_G: "M" });
  const g8 = await Genre.create({
    name: "SEMI-REMORQUE CITERNE GPL",
    id_G: "S",
  });
  const g9 = await Genre.create({
    name: "SEMI-REMORQUE CITERNE CBR",
    id_G: "R",
  });
  const g10 = await Genre.create({
    name: "SEMI-REMORQUE CITERNE BTM",
    id_G: "N",
  });
  const g11 = await Genre.create({
    name: "SEMI-REMORQUE CITERNE AVITAILL",
    id_G: "X",
  });
  const g12 = await Genre.create({ name: "REMORQUE AVITAILLEUR", id_G: "V" });
  const g13 = await Genre.create({ name: "ENGIN", id_G: "Z" });
  const g14 = await Genre.create({ name: "CAMION PORTE-PALETTES", id_G: "C" });
  const g15 = await Genre.create({ name: "CAMION PLATEAU", id_G: "A" });
  const g16 = await Genre.create({ name: "CAMION CITERNE GPL", id_G: "F" });
  const g17 = await Genre.create({ name: "CAMION CITERNE CBR", id_G: "E" });
  const g18 = await Genre.create({
    name: "CAMION CITERNE AVITAILLEUR",
    id_G: "T",
  });
  const M1 = await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "séquentielle",
    BV_marque: "fsdfdsfds",
    genreIdG: "A",
  });
  const M2 = await Modele.create({
    moteur_Puossance: "sdsfsd",
    moteur_type: "V",
    Cylindree: "fsdfsdf",
    BV_type: "automatique",
    BV_marque: "dfsfegkuky",
    genreIdG: "C",
  });
  const M3 = await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "eheyhtr",
    BV_type: "manuelle",
    BV_marque: "ferrgre",
    genreIdG: "T",
  });
  const M4 = await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "manuelle",
    BV_marque: "fsdfdsfds",
    genreIdG: "E",
  });
  const M5 = await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "manuelle",
    BV_marque: "fsdfdsfds",
    genreIdG: "L",
  });
  const M6 = await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "L",
    Cylindree: "gsgds",
    BV_type: "manuelle",
    BV_marque: "fsdfdsfds",
    genreIdG: "F",
  });
  const M7 = await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "séquentielle",
    BV_marque: "fsdfdsfds",
    genreIdG: "Z",
  });
  const M8 = await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "manuelle",
    BV_marque: "fsdfdsfds",
    genreIdG: "S",
  });
  const M9 = await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "séquentielle",
    BV_marque: "fsdfdsfds",
    genreIdG: "R",
  });
  const M10 = await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "automatique",
    BV_marque: "fsdfdsfds",
    genreIdG: "S",
  });
  const M11 = await Modele.create({
    moteur_Puossance: "asdfsaf",
    moteur_type: "V",
    Cylindree: "gsgds",
    BV_type: "manuelle",
    BV_marque: "fsdfdsfds",
    genreIdG: "H",
  });
  const veh1 = await Vehicule.create({
    Matricule: "sdfghjk",
    type: "tiers",
    validite: true,
    modeleIdM: 1,
    numero_chassis: "3456765",
  });
  const veh2 = await Vehicule.create({
    Matricule: "cvbnm,",
    type: "tiers",
    StructerCodeS: 3,
    validite: true,
    modeleIdM: 2,
    numero_chassis: "4567654567",
  });
  const veh3 = await Vehicule.create({
    Matricule: "erghj",
    type: "tiers",
    numero_chassis: "123456987",
    validite: true,
    modeleIdM: 3,
  });
  const veh4 = await Vehicule.create({
    Matricule: "kofew",
    type: "tiers",
    StructerCodeS: 3,
    modeleIdM: 3,
    validite: true,
    numero_chassis: "79875457",
  });
  const veh5 = await Vehicule.create({
    Matricule: "fssdfio",
    type: "tiers",
    modeleIdM: 4,
    numero_chassis: "209747",
    validite: true,
  });
  const veh6 = await Vehicule.create({
    Matricule: "mcifwe",
    type: "tiers",
    numero_chassis: "3746884",
    validite: true,
    modeleIdM: 6,
  });
  const veh7 = await Vehicule.create({
    type: "tiers",
    Matricule: "qwpadja",
    numero_chassis: "3253297",
    StructerCodeS: 7,
    modeleIdM: 5,
    validite: true,
  });
  const veh8 = await Vehicule.create({
    type: "tiers",
    Matricule: "noasje",
    validite: true,
    modeleIdM: 6,
    numero_chassis: "456743242",
  });
  const veh9 = await Vehicule.create({
    type: "tiers",
    Matricule: "asvcxpo",
    validite: true,
    modeleIdM: 9,
    numero_chassis: "974329472",
  });
  const veh10 = await Vehicule.create({
    type: "tiers",
    Matricule: "popxsc",
    validite: true,
    modeleIdM: 3,
    numero_chassis: "9823423",
  });
  const veh11 = await Vehicule.create({
    type: "tiers ",
    Matricule: "buisad",
    StructerCodeS: 2,
    numero_chassis: "23464556",
    validite: true,
    modeleIdM: 11,
  });
  const veh12 = await Vehicule.create({
    type: "tiers",
    Matricule: "cxpo",
    validite: true,
    modeleIdM: 10,
    numero_chassis: "234657654",
  });
  const veh13 = await Vehicule.create({
    type: "Naftal",
    Matricule: "cxcasw",
    StructerCodeS: 7,
    modeleIdM: 11,
    numero_chassis: "123675756",
    validite: true,
  });
  const veh14 = await Vehicule.create({
    type: "tiers",
    Matricule: "mxnous",
    modeleIdM: 8,
    numero_chassis: "08745673423",
    validite: true,
  });
  const veh15 = await Vehicule.create({
    type: "Naftal",
    Matricule: "qpeiun",
    StructerCodeS: 2,
    modeleIdM: 7,
    numero_chassis: "52493009134",
    validite: true,
  });
  const veh16 = await Vehicule.create({
    type: "tiers",
    Matricule: "xgsicba",
    modeleIdM: 8,
    numero_chassis: "5429013",
    validite: true,
  });
  const veh17 = await Vehicule.create({
    type: "Naftal",
    Matricule: "ifjdken",
    StructerCodeS: 4,
    modeleIdM: 4,
    numero_chassis: "65428731034",
    validite: true,
  });
  const veh18 = await Vehicule.create({
    type: "tiers",
    Matricule: "cbsoien",
    modeleIdM: 4,
    numero_chassis: "456743985294242",
    validite: true,
  });
  const veh19 = await Vehicule.create({
    type: "Naftal",
    Matricule: "ocinsh",
    StructerCodeS: 3,
    modeleIdM: 9,
    numero_chassis: "674809332",
    validite: true,
  });
  const veh20 = await Vehicule.create({
    StructerCodeS: 3,
    type: "Naftal",
    Matricule: "echspoe",
    modeleIdM: 5,
    numero_chassis: "1920357273894",
    validite: true,
  });
  const veh21 = await Vehicule.create({
    StructerCodeS: 8,
    type: "Naftal",
    Matricule: "nkchape",
    modeleIdM: 9,
    numero_chassis: "108953492",
    validite: true,
  });
  const veh22 = await Vehicule.create({
    StructerCodeS: 7,
    type: "Naftal",
    Matricule: "hivnsds",
    modeleIdM: 8,
    numero_chassis: "7534924",
    validite: true,
  });
  const veh23 = await Vehicule.create({
    type: "tiers",
    Matricule: "gkcjw",
    modeleIdM: 2,
    numero_chassis: "1293482102",
    validite: true,
  });
  const veh24 = await Vehicule.create({
    StructerCodeS: 2,
    type: "Naftal",
    Matricule: "nkdhwp",
    modeleIdM: 5,
    numero_chassis: "983529310",
    validite: true,
  });
  const veh25 = await Vehicule.create({
    type: "Naftal",
    Matricule: "kkqkwu",
    StructerCodeS: 1,
    modeleIdM: 11,
    numero_chassis: "6572381034291",
    validite: true,
  });
  const veh26 = await Vehicule.create({
    type: "Naftal",
    Matricule: "ncwhdwp",
    modeleIdM: 8,
    numero_chassis: "09242334543",
    validite: true,
  });
  const veh27 = await Vehicule.create({
    StructerCodeS: 2,
    type: "Naftal",
    Matricule: "cnijwdw",
    modeleIdM: 7,
    numero_chassis: "5679812341",
    validite: true,
  });
  const veh28 = await Vehicule.create({
    StructerCodeS: 4,
    type: "Naftal",
    Matricule: "23454",
    modeleIdM: 6,
    numero_chassis: "920383264789",
    validite: true,
  });
  const veh29 = await Vehicule.create({
    StructerCodeS: 5,
    type: "Naftal",
    Matricule: "widjwiod",
    modeleIdM: 6,
    numero_chassis: "78628374523",
  });
  const veh30 = await Vehicule.create({
    StructerCodeS: 3,
    type: "Naftal",
    Matricule: "kddxlwpd",
    modeleIdM: 3,
    numero_chassis: "57342985723",
    validite: true,
  });
  const veh31 = await Vehicule.create({
    state: "propose a la reforme",
    StructerCodeS: 2,
    type: "Naftal",
    Matricule: "9876545678",
    modeleIdM: 7,
    numero_chassis: "234565789",
  });
  const veh32 = await Vehicule.create({
    state: "reforme",
    StructerCodeS: 4,
    type: "Naftal",
    Matricule: "3653546756",
    modeleIdM: 6,
    numero_chassis: "345698765467",
  });
  const veh33 = await Vehicule.create({
    state: "reforme",
    StructerCodeS: 5,
    type: "Naftal",
    Matricule: "3765gbf",
    modeleIdM: 6,
    numero_chassis: "324543234",
  });
  const veh34 = await Vehicule.create({
    state: "propose a la reforme",
    StructerCodeS: 3,
    type: "Naftal",
    Matricule: "2345464",
    modeleIdM: 3,
    numero_chassis: "2346546765",
  });

  const veh35 = await Vehicule.create({
    StructerCodeS: 3,
    type: "tiers",
    Matricule: "ghjklfwef",
    modeleIdM: 3,
    numero_chassis: "32786287682342",
    validite: true,
  });
  const veh36 = await Vehicule.create({
    StructerCodeS: 3,
    type: "tiers",
    Matricule: "hjkfwokgop",
    modeleIdM: 3,
    numero_chassis: "829742389523",
    validite: true,
  });
  const veh37 = await Vehicule.create({
    StructerCodeS: 3,
    type: "tiers",
    Matricule: "ofkepwkfwe[qw",
    modeleIdM: 3,
    numero_chassis: "3456789",
    validite: true,
  });
  const veh38 = await Vehicule.create({
    StructerCodeS: 3,
    type: "tiers",
    Matricule: "4567890dede",
    modeleIdM: 3,
    numero_chassis: "rewrwerwerwerew",
    validite: true,
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

  // await g1.addVehicules([veh1, veh2, veh3]);
  // await g2.addVehicules([veh4, veh5]);
  // await g3.addVehicules([veh6, veh7]);
  // await g4.addVehicules([veh8, veh9]);
  // await g5.addVehicules([veh10, veh11]);
  // await g6.addVehicules([veh12, veh13]);
  // await g7.addVehicules([veh14, veh15]);
  // await g8.addVehicules([veh16, veh17]);
  // await g9.addVehicules([veh18, veh19]);
  // await g10.addVehicules([veh20, veh21, veh24]);
  // await g11.addVehicules([
  //   veh22,
  //   veh23,
  //   veh25,
  //   veh26,
  //   veh27,
  //   veh28,
  //   veh29,
  //   veh30,
  // ]);

  // const veh1 = await g1.createVehicule({
  //   // Code_Viecule: `${Math.random()}`,
  //   Matricule: "sdfghjk",
  //   type: "tiers",
  // });

  await Client.create({ num_registre: 3232, nom: "dsd", prenome: "dsdsds" });
  const ch1 = await Chauffeur.create({
    nom: "abdellah",
    prenome: "ouazane",
    etat: "en conge",
    age: 20,
    numero: "0775438343",
    type_p: "Ca",
    Matricule: "sdfghj",
    StructerCodeS: 1,
  });
  const ch2 = await Chauffeur.create({
    nom: "Ahmed",
    prenome: "Zmouli",
    numero: "0534343423",
    age: 20,
    etat: "actif",
    type_p: "Vl",
    Matricule: "skhygrd",
    StructerCodeS: 7,
  });
  const ch3 = await Chauffeur.create({
    nom: "morad",
    prenome: "kasi",
    numero: "074320532",
    etat: "inactif",
    age: 20,
    type_p: "Cr",
    Matricule: "nfedcd",
    StructerCodeS: 4,
  });
  const ch4 = await Chauffeur.create({
    nom: "Zoubir",
    numero: "0645793343",
    etat: "actif",
    prenome: "orad",
    age: 20,
    type_p: "Vl",
    Matricule: "srtfwokw",
    StructerCodeS: 4,
  });
  const k1 = await Access.findByPk(1);
  const k2 = await Access.findByPk(2);
  const k3 = await Access.findByPk(3);
  const k4 = await Access.findByPk(4);
  const k5 = await Access.findByPk(5);
  const k6 = await Access.findByPk(6);
  const k7 = await Access.findByPk(7);
  const k8 = await Access.findByPk(8);
  const k9 = await Access.findByPk(9);
  const k10 = await Access.findByPk(10);
  const k11 = await Access.findByPk(11);
  const k12 = await Access.findByPk(12);
  const k13 = await Access.findByPk(13);
  const k14 = await Access.findByPk(14);
  const k15 = await Access.findByPk(15);
  const k16 = await Access.findByPk(16);
  const k17 = await Access.findByPk(17);
  const k18 = await Access.findByPk(18);
  const k19 = await Access.findByPk(19);
  const k20 = await Access.findByPk(20);
  const k21 = await Access.findByPk(21);
  const k22 = await Access.findByPk(22);
  const k23 = await Access.findByPk(23);
  const k24 = await Access.findByPk(24);
  const k25 = await Access.findByPk(25);
  const k26 = await Access.findByPk(26);
  const k27 = await Access.findByPk(27);
  const k28 = await Access.findByPk(28);
  const k29 = await Access.findByPk(29);
  const k30 = await Access.findByPk(30);
  const k31 = await Access.findByPk(31);
  const k32 = await Access.findByPk(32);

  const passhached = await bcrypt.hash("a", 10);
  const Admin = await User.create({
    name: "admin",
    prenom: "admin",
    passwordLenght: 1,
    password: passhached,
    email: "admin@gmail.com",
    StructerCodeS: 1,
  });
  Admin.addAccesses([
    k1,
    k2,
    k3,
    k4,
    k5,
    k6,
    k7,
    k8,
    k9,
    k10,
    k11,
    k12,
    k13,
    k14,
    k15,
    k16,
    k17,
    k18,
    k19,
    k20,
    k21,
    k22,
    k23,
    k24,
    k25,
    k26,
    k27,
    k28,
    k29,
    k30,
    k31,
    k32,
  ]);

  await User.create({
    passwordLenght: 16,
    name: "abdellah",
    prenom: "ouazane",
    password: "fghjkl;;kjhfghj",
    email: "abdellah@Naftal.com",
    StructerCodeS: 4,
  });
  await User.create({
    passwordLenght: "fghjksdsdk".length,
    name: "Ahmed",
    prenom: "Zmouli",
    password: "fghjksdsdk",
    email: "ahmed@Naftal.com",
    StructerCodeS: 4,
  });
  await User.create({
    passwordLenght: "fgfefekjhfghj".length,
    name: "khaled",
    prenom: "laraba",
    password: "fgfefekjhfghj",
    email: "ahmed@Naftal.com",
    StructerCodeS: 7,
  });
  await User.create({
    passwordLenght: "fghjkl".length,
    name: "Zoubir",
    prenom: "othmani",
    password: "fghjkl;",
    email: "Zoubir@Naftal.com",
    StructerCodeS: 7,
  });
  return;
};
