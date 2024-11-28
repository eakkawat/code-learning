import { getAllQuestions, getQuestionById, createQuestion } from '@/controllers/quiz.controller';
import { Router } from 'express';

const router = Router();

// Question routes
router.get('/', getAllQuestions);
router.get('/:id', getQuestionById);
router.post('/', createQuestion);

export default router;
