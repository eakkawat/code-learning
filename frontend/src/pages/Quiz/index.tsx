import { Button, Card, Container, Group, SimpleGrid, Text } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import { useState } from 'react';

function Quiz() {
  // theme
  // const theme = useMantineTheme();

  // states
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const isSelected = (answer: string) => selectedAnswer === answer;

  return (
    <Container
      size={720}
      mt={50}
    >
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
        <Text
          size="md"
          mt={16}
        >
          What is JavaScript primarily used for?
        </Text>

        <SimpleGrid
          cols={2}
          mt={40}
        >
          <Button
            variant="light"
            color={isSelected('Web development') ? 'blue' : 'gray'}
            size="md"
            onClick={() => handleAnswerClick('Web development')}
          >
            Web development
          </Button>
          <Button
            variant="light"
            color={isSelected('Database management') ? 'blue' : 'gray'}
            size="md"
            onClick={() => handleAnswerClick('Database management')}
          >
            Database management
          </Button>
          <Button
            variant="light"
            color={isSelected('Operating system development') ? 'blue' : 'gray'}
            size="md"
            onClick={() => handleAnswerClick('Operating system development')}
          >
            Operating system development
          </Button>
          <Button
            variant="light"
            color={isSelected('Mobile app development') ? 'blue' : 'gray'}
            size="md"
            onClick={() => handleAnswerClick('Mobile app development')}
          >
            Mobile app development
          </Button>
        </SimpleGrid>
        <Button
          mt={96}
          variant="outline"
          radius="xl"
          color="blue"
          rightSection={<IconEye size={14} />}
          style={{ width: 'fit-content', marginInline: 'auto' }}
        >
          Check answer
        </Button>
      </Card>
    </Container>
  );
}
export default Quiz;
