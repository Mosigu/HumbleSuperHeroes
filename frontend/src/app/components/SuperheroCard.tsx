import React from "react";
import { Card, Text, Flex, Avatar } from "@radix-ui/themes";

type SuperheroCardProps = {
  name: string;
  superPower: string;
  humilityScore: number;
};

export const SuperheroCard = ({
  name,
  superPower,
  humilityScore,
}: SuperheroCardProps) => {
  return (
    <>
      <Card
        style={{
          width: "300px",
          padding: "16px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Flex align="center" gap="4">
          <Avatar size="5" radius="full" fallback={name.charAt(0)} />
          <Flex direction="column">
            <Text weight="bold">{name}</Text>

            <Text size="2" weight="medium">
              {superPower}
            </Text>
            <Text size="1" color="gray">
              Humility score: {humilityScore}
            </Text>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};
