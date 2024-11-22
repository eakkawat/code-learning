import { Box, Text, Button, useMantineTheme, SimpleGrid } from '@mantine/core';
import { useState } from 'react';

interface QuestionProps {
  // eslint-disable-next-line react/no-unused-prop-types
  id: string;
  question: string;
  options: string[];
  onSelect: (choice: string) => void;
}

export default function Question({ question, options, onSelect }: QuestionProps) {
  // theme
  const theme = useMantineTheme();

  // states
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    onSelect(answer);
  };

  const isSelected = (answer: string) => selectedAnswer === answer;

  return (
    <Box>
      <Text
        size="md"
        mt={16}
      >
        {question}
      </Text>

      <SimpleGrid
        cols={2}
        mt={40}
      >
        {options.map((option) => (
          <Button
            key={option}
            variant="light"
            size="md"
            radius="md"
            style={{
              backgroundColor: isSelected(option) ? theme.colors.gray[7] : theme.colors.gray[2],
              color: isSelected(option) ? 'white' : theme.colors.dark[3],
            }}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </Button>
        ))}
      </SimpleGrid>
    </Box>
  );
}
