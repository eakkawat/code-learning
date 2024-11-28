import { Route } from 'react-router-dom';
import questions from '../../../data.json';
import Quiz from '../pages/Quiz';

const quizRoutes = [
  <Route
    key="quiz"
    path="/quiz"
    element={<Quiz questions={questions} />}
  />,
];

export default quizRoutes;
