import { Router } from "express";
import { helloWorld } from "../controllers/main";

export const MainRouter: Router = Router()
MainRouter.get('/', helloWorld)