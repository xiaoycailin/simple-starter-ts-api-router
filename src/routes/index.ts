import { Router } from "express";
import { MainRouter } from "./main";
export const Routers = Router()

Routers.use('/main', MainRouter)