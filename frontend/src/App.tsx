// import { Container } from '@mantine/core';
// import Quiz from '@/components/Quiz';
import { Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Home from './pages/Home';

function App() {
  return (
    // <Container size="sm" py="xl">
    //   <Quiz id={sampleQuiz.id} title={sampleQuiz.title} questions={sampleQuiz.questions} />
    // </Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
}

export default App;
