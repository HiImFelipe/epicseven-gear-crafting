import { searchForCharactersController } from "../../controllers/player/searchPlayer.controller";
import { Router } from "express";

export const characterRoutes = Router();

characterRoutes.get("/", searchForCharactersController);
