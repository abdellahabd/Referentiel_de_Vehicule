import express from "express";
import { Structer } from "../Models/Models-index.js";
const route = express.Router();

route.get("/getall", async (req, res) => {
  const str = await Structer.findAll();

  res.json(str);
});
export default route;
