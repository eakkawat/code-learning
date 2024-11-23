import { Route } from 'react-router-dom';
import Quiz from '../pages/Quiz';

const quizRoutes = [
  <Route
    key="quiz"
    path="/quiz"
    element={<Quiz />}
  />,
];

export default quizRoutes;
