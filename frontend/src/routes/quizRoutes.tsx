import { Route } from 'react-router-dom';
import Quiz from '../pages/Quiz';

const questions = [
  {
    id: 'q1',
    question: 'What is JavaScript primarily used for?',
    options: ['Web Development', 'Database Management', 'Operating System Development', 'Mobile App Development'],
    correctAnswer: 'Web Development',
  },
  {
    id: 'q2',
    question: 'Which keyword is used to declare variables in JavaScript?',
    options: ['var', 'let', 'const', 'All of the above'],
    correctAnswer: 'All of the above',
  },
];

const quizRoutes = [
  <Route
    key="quiz"
    path="/quiz"
    element={<Quiz questions={questions} />}
  />,
];

export default quizRoutes;
