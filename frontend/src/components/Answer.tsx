import { Alert } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

interface AnswerProps {
  isCorrect: boolean;
  correctAnswer: string;
}

export default function Answer({ isCorrect, correctAnswer }: AnswerProps) {
  return (
    <Alert
      mt="md"
      icon={isCorrect ? <IconCheck size="1.1rem" /> : <IconX size="1.1rem" />}
      title={isCorrect ? "Correct!" : "Incorrect"}
      color={isCorrect ? "green" : "red"}
    >
      {!isCorrect && `The correct answer was: ${correctAnswer}`}
    </Alert>
  );
}
