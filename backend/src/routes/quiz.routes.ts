import { Router } from 'express';
import { getAllQuizzes, getQuizById, createQuiz } from '@/controllers/quiz.controller';

const router = Router();

// Quiz routes
router.get('/', getAllQuizzes);
router.get('/:id', getQuizById);
router.post('/', createQuiz);

export default router;
