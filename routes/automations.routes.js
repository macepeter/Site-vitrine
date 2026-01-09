import express from 'express';
import { automationsPages } from '../controllers/automations.controller.js';

const router = express.Router();

router.get('/', automationsPages);

export default router;
