import express from 'express';
import { servicesRoutes } from '../controllers/services.controller.js';





const router = express.Router();

router.get('/', servicesRoutes);

export default router;