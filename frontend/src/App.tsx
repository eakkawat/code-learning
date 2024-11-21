import { Container } from '@mantine/core';
import UserList from '@/components/UserList';
import Quiz from '@/components/Quiz';

const sampleQuiz = {
  id: '1',
  title: 'JavaScript Fundamentals',
  questions: [
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
    {
      id: 'q3',
      question: "What is the result of 2 + '2' in JavaScript?",
      options: ['4', '22', 'NaN', 'Error'],
      correctAnswer: '22',
    },
  ],
};

function App() {
  return (
    <Container size="sm" py="xl">
      <Quiz {...sampleQuiz} />
      <UserList />
    </Container>
  );
}

export default App;
