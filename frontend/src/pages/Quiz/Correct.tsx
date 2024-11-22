import { Box, Button, Chip, Flex, Image, Text } from '@mantine/core';
import { IconHandFingerRight } from '@tabler/icons-react';
import emojiUrl from '@/assets/images/512.webp';

function Correct({ question }: { question: string }) {
  // const theme = useMantineTheme();

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
        <Image
          mt={40}
          src={emojiUrl}
          alt="emoji"
          w={120}
          fit="cover"
        />
        <Chip
          mt={15}
          defaultChecked
          color="teal.1"
          size="xs"
          autoContrast
        >
          Correct
        </Chip>
        <Text
          mt={11}
          color="teal.9"
          fs="sm"
          fw="bold"
        >
          Web Development
        </Text>
        <Button
          mt={34}
          size="xl"
          radius="xl"
          color="blue.4"
          style={{ width: 'fit-content' }}
          rightSection={<IconHandFingerRight size={24} />}
        >
          Next question
        </Button>
      </Flex>
    </Box>
  );
}
export default Correct;
