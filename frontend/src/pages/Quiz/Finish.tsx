import { Container, Card, Group, Text, Button, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface FinishProps {
  subject: string;
  score: number;
  numOfQuestions: number;
}

function Finish({ subject, score, numOfQuestions }: FinishProps) {
  const navigate = useNavigate();

  return (
    <Container size={720}>
      <Card
        shadow="sm"
        py={32}
        px={40}
        radius="md"
        withBorder
      >
        <Text
          size="lg"
          fw={500}
          color="dark.2"
          ta="center"
        >
          {subject}
        </Text>
        <Group
          justify="center"
          mt="xs"
        >
          <Text
            color="dark.6"
            size="xl"
            fw={700}
          >
            Score:
          </Text>
          <Title
            order={1}
            c="green.8"
            size="h1"
          >
            {score}/{numOfQuestions}
          </Title>
        </Group>
        <Button
          mt={63}
          mx="auto"
          size="xl"
          radius="xl"
          color="blue.4"
          style={{ width: 'fit-content' }}
          onClick={() => navigate('/')}
        >
          Back to quizzes
        </Button>
      </Card>
    </Container>
  );
}
export default Finish;
