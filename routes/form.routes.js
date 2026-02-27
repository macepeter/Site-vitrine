import express from 'express';
import { formPage } from '../controllers/form.controller.js'

const router = express.Router();

router.get('/', formPage);

export default router;