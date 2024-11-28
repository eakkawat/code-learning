import { Express } from 'express';
import userRouter from './user.routes';
import quizRouter from './quiz.routes';

function routes(app: Express) {
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/quizzes', quizRouter);
}

export default routes;
