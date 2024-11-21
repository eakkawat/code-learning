import express from 'express';
const router = express.Router();
import { getAllUsers, createUser } from '../controllers/user.controller';

router.get('/', getAllUsers);
router.post('/creat', createUser);

export default router;
