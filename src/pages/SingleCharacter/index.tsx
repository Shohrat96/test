import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React from "react";
import { useLocation } from "react-router-dom";

const SingleCharacter: React.FC = () => {
  const location = useLocation();
  const { person } = location.state;

  return (
    <Container maxW="128rem">
      <Heading my="4rem" textAlign="center" fontSize="xxx-large">
        {person.name}
      </Heading>
      <Box>
        <Text fontSize="x-large" fontWeight="bold">Eye color</Text>
        <Text fontSize="large">
          {person.eye_color}
        </Text>
      </Box>
      <Box>
        <Text fontSize="x-large" fontWeight="bold">Birth year</Text>
        <Text fontSize="large">
          {person.birth_year}
        </Text>
      </Box>
      <Box>
        <Text fontSize="x-large" fontWeight="bold">Gender</Text>
        <Text fontSize="large">
          {person.gender}
        </Text>
      </Box>
      <Box>
        <Text fontSize="x-large" fontWeight="bold">Birth year</Text>
        <Text fontSize="large">
          {person.birth_year}
        </Text>
      </Box>
      <Box>
        <Text fontSize="x-large" fontWeight="bold">Films</Text>
        {
          person?.films.map((film: string) => (
          <Text key={nanoid()} fontSize="large">
            {film}
          </Text>
          ))
        }
      </Box>
      <Box>
        <Text fontSize="x-large" fontWeight="bold">Starships</Text>
        {
          person?.starships.map((ship: string) => (
          <Text key={nanoid()} fontSize="large">
            {ship}
          </Text>
          ))
        }
      </Box>
      <Box>
        <Text fontSize="x-large" fontWeight="bold">Vehicles</Text>
        {
          person?.vehicles.map((item: string) => (
          <Text key={nanoid()} fontSize="large">
            {item}
          </Text>
          ))
        }
      </Box>
      <Box>
        <Text fontSize="x-large" fontWeight="bold">Species</Text>
        {
          person?.species.map((item: string) => (
          <Text key={nanoid()} fontSize="large">
            {item}
          </Text>
          ))
        }
      </Box>
    </Container>
  )
}

export default SingleCharacter