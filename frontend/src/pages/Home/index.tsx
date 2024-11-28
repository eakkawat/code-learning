import { Badge, Button, Card, Container, Flex, Group, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import useQuizzes from '@/hooks/quiz';
import { IQuiz } from '@/types/quiz';

function HomePage() {
  const quizzes = useQuizzes();
  const navigate = useNavigate();

  return (
    <Container>
      <Flex
        gap={8}
        wrap="wrap"
      >
        {quizzes.map((quiz: IQuiz) => (
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
              // eslint-disable-next-line no-underscore-dangle
              onClick={() => navigate(`/quiz/${quiz._id}`)}
            >
              Take Quiz
            </Button>
          </Card>
        ))}
      </Flex>
    </Container>
  );
}
export default HomePage;
