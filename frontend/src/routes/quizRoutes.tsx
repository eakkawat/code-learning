import { Route } from 'react-router-dom';
import Quiz from '../pages/Quiz';

const quizRoutes = [
  <Route
    key="quiz-id"
    path="quiz/:id"
    element={<Quiz />}
  />,
];

export default quizRoutes;
