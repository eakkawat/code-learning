import { Button, Card, Container, Group, Text } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import { useState } from 'react';
import Question from './Question';
import Result from './Result';
import Finish from './Finish';

interface QuizProps {
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}

function Quiz({ questions }: QuizProps) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState<number>(0);

  const finishQuiz = currentQuestionIndex > questions.length - 1;

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedChoice(null);
    setIsCorrect(null);
  };

  const handleTryAgain = () => {
    setIsCorrect(null);
  };

  const checkAnswer = () => {
    if (selectedChoice === questions[currentQuestionIndex].correctAnswer) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }
  };

  if (finishQuiz)
    return (
      <Finish
        subject="Javascript - beginner"
        score={score}
        numOfQuestions={questions.length}
      />
    );

  return (
    <Container size={720}>
      <Card
        shadow="sm"
        py={32}
        px={40}
        radius="md"
        withBorder
      >
        <Group justify="space-between">
          <Text
            size="lg"
            fw={500}
          >
            Javascript
          </Text>
          <Text
            size="lg"
            fw={500}
          >
            {/* Display progress of the quiz */}
            {currentQuestionIndex + 1}/{questions.length}
          </Text>
        </Group>
        {isCorrect === null ? (
          <>
            <Question
              id={questions[currentQuestionIndex].id}
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              onSelect={(choice: string) => setSelectedChoice(choice)}
            />
            <Button
              mt={48}
              variant="outline"
              radius="xl"
              color="blue"
              rightSection={<IconEye size={24} />}
              style={{ width: 'fit-content', marginInline: 'auto' }}
              onClick={checkAnswer}
            >
              Check answer
            </Button>
          </>
        ) : (
          <Result
            nextQuestion={handleNextQuestion}
            tryAgain={handleTryAgain}
            isCorrect={isCorrect}
            correctAnswer={questions[currentQuestionIndex].correctAnswer}
            question={questions[currentQuestionIndex].question}
          />
        )}
      </Card>
    </Container>
  );
}
export default Quiz;
