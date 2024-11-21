import { Box, Title, Stack } from '@mantine/core';
import { useState } from 'react';
import Question from './Question';

interface QuizProps {
  id: string;
  title: string;
  questions: Array<{
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
  }>;
}

export default function Quiz({ title, questions }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <Box p="md">
      <Title order={2} mb="lg">{title}</Title>
      <Stack>
        {questions[currentQuestionIndex] && (
          <Question
            {...questions[currentQuestionIndex]}
            onAnswered={handleNextQuestion}
          />
        )}
      </Stack>
    </Box>
  );
}
