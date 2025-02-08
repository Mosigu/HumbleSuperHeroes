"use client";
import { useState, useEffect } from "react";
import {
  Container,
  Heading,
  Button,
  Flex,
  TextField,
  Text,
  Slider,
  Card,
  Box,
  ScrollArea,
} from "@radix-ui/themes";
import { getSuperheroes, postSuperheroes } from "@/utils/humbleSuperHeroAPI";
import { SuperheroCard } from "./components/SuperheroCard";
import { Superhero } from "./interfaces/superhero.interface";

export default function Home() {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [superPower, setSuperPower] = useState("");
  const [humilityScore, setHumilityScore] = useState(5);

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  const fetchSuperheroes = async () => {
    try {
      const heroes = await getSuperheroes();
      setSuperheroes(heroes);
    } catch (error) {
      console.error("Error fetching superheroes:", error);
    }
  };

  const handleCreateSuperhero = async () => {
    try {
      setIsLoading(true);
      await postSuperheroes(name, superPower, humilityScore);
      // Reset form
      setName("");
      setSuperPower("");
      setHumilityScore(5);
      // Refresh list
      await fetchSuperheroes();
    } catch (error) {
      console.error("Error creating superhero:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSuperPowerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSuperPower(event.target.value);
  };

  return (
    <Container>
      <Heading as="h1" size="9" align="center" weight="bold" mt="2">
        Humble Superheroes🦸
      </Heading>
      <Flex direction="column" gap="4" align="center" mt="2">
        <Flex gap="9" mt="6">
          {/* Create hero */}
          <Box className="w-full max-2xl: flex flex-col">
            <Flex direction="column" gap="4">
              <Box>
                <Heading
                  as="h2"
                  size="7"
                  className="mb-6"
                  weight="bold"
                  color="ruby"
                >
                  Create a superhero
                </Heading>
              </Box>
              <Card className="aspect-square p-12">
                <Flex
                  direction="column"
                  gap="8"
                  className="h-full justify-between"
                >
                  <Flex direction="column" gap="4">
                    <Flex direction="column" gap="2">
                      <Text weight="bold" size="4">
                        Name
                      </Text>
                      <TextField.Root
                        size="3"
                        placeholder="Enter the superhero's name"
                        onChange={handleNameChange}
                        value={name}
                      />
                    </Flex>

                    <Flex direction="column" gap="2">
                      <Text weight="bold" size="4">
                        Superpower
                      </Text>
                      <TextField.Root
                        size="3"
                        placeholder="Enter the superhero's power"
                        onChange={handleSuperPowerChange}
                        value={superPower}
                      />
                    </Flex>

                    <Flex direction="column" gap="4">
                      <Text weight="bold" size="4">
                        Humility score
                      </Text>
                      <Text align="center" size="6" weight="bold" color="ruby">
                        {humilityScore}
                      </Text>
                      <Slider
                        size="3"
                        value={[humilityScore]}
                        onValueChange={(value) => setHumilityScore(value[0])}
                        radius="full"
                        min={0}
                        max={10}
                      />
                    </Flex>
                  </Flex>

                  <Button
                    size="4"
                    onClick={handleCreateSuperhero}
                    disabled={isLoading || !name || !superPower}
                    className="w-full"
                  >
                    {isLoading ? "Creating..." : "Create superhero"}
                  </Button>
                </Flex>
              </Card>
            </Flex>
          </Box>

          {/* Heroes List */}
          <Box className="w-full max-w-xl flex flex-col">
            <Flex direction="column" gap="4">
              <Heading as="h2" size="7" color="ruby" weight="bold">
                Available superheroes
              </Heading>
              {superheroes.length > 0 ? (
                <ScrollArea
                  type="hover"
                  scrollbars="vertical"
                  style={{ height: 500 }}
                >
                  <Flex direction="column" gap="4" className="w-full pr-6">
                    {superheroes.map((hero, index) => (
                      <SuperheroCard
                        key={index}
                        name={hero.name}
                        superPower={hero.superPower}
                        humilityScore={hero.humilityScore}
                      />
                    ))}
                  </Flex>
                </ScrollArea>
              ) : (
                <Card variant="surface">
                  <Flex align="center" justify="center" p="6">
                    <Text size="3" color="gray">
                      No superheroes available yet. Create one!
                    </Text>
                  </Flex>
                </Card>
              )}
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
