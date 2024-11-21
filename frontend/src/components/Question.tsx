import { Box, Text, Stack, Button, Group } from '@mantine/core';
import { useState } from 'react';
import Answer from './Answer';

interface QuestionProps {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswered: () => void;
}

export default function Question({ 
  question, 
  options, 
  correctAnswer,
  onAnswered 
}: QuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (selectedAnswer) {
      setShowResult(true);
      setTimeout(() => {
        setShowResult(false);
        setSelectedAnswer(null);
        onAnswered();
      }, 2000);
    }
  };

  return (
    <Box>
      <Text size="lg" mb="md">{question}</Text>
      <Stack spacing="sm">
        {options.map((option) => (
          <Button
            key={option}
            variant={selectedAnswer === option ? 'filled' : 'light'}
            onClick={() => setSelectedAnswer(option)}
            fullWidth
          >
            {option}
          </Button>
        ))}
      </Stack>
      <Group position="right" mt="md">
        <Button
          onClick={handleSubmit}
          disabled={!selectedAnswer}
        >
          Submit Answer
        </Button>
      </Group>
      {showResult && selectedAnswer && (
        <Answer 
          isCorrect={selectedAnswer === correctAnswer}
          correctAnswer={correctAnswer}
        />
      )}
    </Box>
  );
}
