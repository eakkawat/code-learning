import { Box, Button, Chip, Flex, Image, Text } from '@mantine/core';
import { IconHandFingerLeft, IconHandFingerRight } from '@tabler/icons-react';
import emojiSmileUrl from '@/assets/images/smile.webp';
import emojiSadUrl from '@/assets/images/sad.webp';

interface ResultProps {
  question: string;
  isCorrect: boolean;
  correctAnswer: string;
  tryAgain: () => void;
  nextQuestion: () => void;
}

function Result({ question, isCorrect, correctAnswer, nextQuestion, tryAgain }: ResultProps) {
  return (
    <Box>
      <Text
        size="md"
        mt={16}
      >
        {question}
      </Text>
      <Flex
        direction="column"
        align="center"
      >
        {isCorrect ? (
          <Image
            mt={40}
            src={emojiSmileUrl}
            alt="emoji smile for correct answer"
            w={120}
            fit="cover"
          />
        ) : (
          <Image
            mt={40}
            src={emojiSadUrl}
            alt="emoji sad for wrong answer"
            w={120}
            fit="cover"
          />
        )}

        {isCorrect ? (
          <>
            <Chip
              mt={15}
              defaultChecked
              color="teal.6"
              size="xs"
            >
              Correct
            </Chip>
            <Text
              mt={11}
              color="teal.9"
              fs="sm"
              fw="bold"
            >
              {correctAnswer}
            </Text>
            <Button
              mt={34}
              size="xl"
              radius="xl"
              color="blue.4"
              onClick={nextQuestion}
              style={{ width: 'fit-content' }}
              rightSection={<IconHandFingerRight size={24} />}
            >
              Next question
            </Button>
          </>
        ) : (
          <>
            <Chip
              mt={15}
              defaultChecked
              color="red.6"
              size="xs"
            >
              Wrong
            </Chip>
            <Flex gap="md">
              <Button
                mt={34}
                size="xl"
                radius="xl"
                color="blue.4"
                onClick={tryAgain}
                variant="outline"
                style={{ width: 'fit-content' }}
                leftSection={<IconHandFingerLeft size={24} />}
              >
                Try again
              </Button>
              <Button
                mt={34}
                size="xl"
                radius="xl"
                color="blue.4"
                onClick={nextQuestion}
                style={{ width: 'fit-content' }}
                rightSection={<IconHandFingerRight size={24} />}
              >
                Next question
              </Button>
            </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
}
export default Result;
