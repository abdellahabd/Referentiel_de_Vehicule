import express from "express";
import { Client } from "../Models/Models-index.js";
const route = express.Router();

route.get("/getall", async (req, res) => {
  const client = await Client.findAll();
  const includename = client.map((c) => {
    return { ...c.dataValues, type: c.constructor.name };
  });

  res.json(includename);
});
export default route;
