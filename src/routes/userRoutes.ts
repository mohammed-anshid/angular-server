import express , { Router } from 'express';
import { getFormData } from '../controller/formController';

const router :Router = express.Router();

router.post('/form',getFormData)

export default router ;