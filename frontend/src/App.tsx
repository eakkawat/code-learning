// import { Container } from '@mantine/core';
// import Quiz from '@/components/Quiz';
import { Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    // <Container size="sm" py="xl">
    //   <Quiz id={sampleQuiz.id} title={sampleQuiz.title} questions={sampleQuiz.questions} />
    // </Container>
    <>
      <header>
        <Navbar />
      </header>
      <main style={{ marginBlock: '30px' }}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/quiz"
            element={<Quiz />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
