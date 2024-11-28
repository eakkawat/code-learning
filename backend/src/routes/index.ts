import { Express } from 'express';
import userRouter from './user.routes';
import quizRouter from './quiz.routes';
import questionRouter from './question.routes';

function routes(app: Express) {
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/quizzes', quizRouter);
  app.use('/api/v1/questions', questionRouter);
}

export default routes;
