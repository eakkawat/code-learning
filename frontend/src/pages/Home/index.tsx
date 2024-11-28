import { Badge, Button, Card, Container, Flex, Group, Text } from '@mantine/core';
import GetQuizzes from './getQuizzes';
import { Quiz } from '@/types/quiz';

function index() {
  const quizzes = GetQuizzes();

  return (
    <Container>
      <Flex
        gap={8}
        wrap="wrap"
      >
        {quizzes.map((quiz: Quiz) => (
          <Card
            key={quiz.title}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
          >
            <Group justify="space-between">
              <Text
                fw={500}
                size="lg"
              >
                {quiz.title}
              </Text>
              <Badge color="pink">{quiz.difficulty}</Badge>
            </Group>
            <Text style={{ width: '25ch' }}>{quiz.description}</Text>
            <Button
              mt="lg"
              variant="filled"
              color="blue"
            >
              Take Quiz
            </Button>
          </Card>
        ))}
      </Flex>
    </Container>
  );
}
export default index;
