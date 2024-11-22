import { Button, Card, Container, Group, SimpleGrid, Text } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

function Quiz() {
  return (
    <Container size={720} mt={50}>
      <Card shadow="sm" py={32} px={40} radius="md" withBorder>
        <Group justify="space-between">
          <Text size="lg" fw={500}>
            Javascript
          </Text>
          <Text size="lg" fw={500}>
            1/10
          </Text>
        </Group>
        <Text size="md" mt={16}>
          What is JavaScript primarily used for?
        </Text>

        <SimpleGrid cols={2} mt={40}>
          <Button variant="light" color="gray" size="md">
            Web development
          </Button>
          <Button variant="light" color="gray" size="md">
            Database management
          </Button>
          <Button variant="light" color="gray" size="md">
            Operating system development
          </Button>
          <Button variant="light" color="gray" size="md">
            Mobile app development
          </Button>
        </SimpleGrid>
        <Button
          mt={96}
          variant="outline"
          radius="xl"
          color="blue"
          rightSection={<IconArrowRight size={14} />}
          style={{ width: 'fit-content', marginInline: 'auto' }}
        >
          Check answer
        </Button>
      </Card>
    </Container>
  );
}
export default Quiz;
