import { Router } from 'express';
import {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  getAllQuestions,
  getQuestionById,
  createQuestion,
  submitAnswer,
} from '../controllers/quiz.controller';

const router = Router();

// Quiz routes
router.get('/', getAllQuizzes);
router.get('/:id', getQuizById);
router.post('/', createQuiz);

// Question routes
router.get('/questions', getAllQuestions);
router.get('/questions/:id', getQuestionById);
router.post('/questions', createQuestion);

// Answer routes
router.post('/answers', submitAnswer);

export default router;
