import express from "express";
import { getAllNews, getSingleNews, postNews } from "../controllers/news.controllers.js";

const newsRouter = express.Router();

newsRouter.get("/", getAllNews).post("/", postNews);
newsRouter.get("/:id", getSingleNews);

export default newsRouter;