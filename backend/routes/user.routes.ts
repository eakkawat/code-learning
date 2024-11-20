import express from 'express';
const router = express.Router();
import { getAllUsers, createUser } from '../controllers/user.controller';

router.get('/users', getAllUsers);
router.post('/users', createUser);

export default router;
