import express from 'express';
import { contactForm } from '../controllers/contact.controller.js'




const router = express.Router();

router.get('/', contactForm);

export default router;