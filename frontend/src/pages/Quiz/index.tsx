import { Button, Card, Container, Group, Text } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import { useState } from 'react';
import Question from './Question';
import Correct from './Correct';

function Quiz() {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const question = {
    id: 'q1',
    question: 'What is JavaScript primarily used for?',
    options: ['Web Development', 'Database Management', 'Operating System Development', 'Mobile App Development'],
    correctAnswer: 'Web Development',
  };

  const checkAnswer = () => {
    if (selectedChoice === question.correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

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
            1/10
          </Text>
        </Group>
        {isCorrect === null ? (
          <>
            <Question
              id={question.id}
              question={question.question}
              options={question.options}
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
          <Correct question={question.question} />
        )}
      </Card>
    </Container>
  );
}
export default Quiz;
