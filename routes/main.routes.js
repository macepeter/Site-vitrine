import express from 'express';

import { mainRoutes } from "../controllers/main.controller.js";

const router = express.Router();

router.get("/", mainRoutes);

export default router;

