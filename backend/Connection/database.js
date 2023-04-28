import { Sequelize } from "sequelize";

const sequelize = new Sequelize("ref", "root", "abdellah2002", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default sequelize;
