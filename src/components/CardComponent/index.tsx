import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
  Button,
} from "@chakra-ui/react";
import { Person } from "../../models/index";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  person: Person;
  id: string;
}
const CardComponent: React.FC<Props> = ({ person, ...props }) => {
  const location = useLocation();

  const [showMore, setShowMore] = useState(false);
  
  const {
    name,
    eye_color,
    birth_year,
    gender,
    films,
    starships,
    species,
    vehicles,
  } = person;

  const navigate = useNavigate();

  
  return (
    <Card cursor="pointer" w="28rem" onClick={(e) => {
      navigate(`/characters/${props.id}`, {
        state: {
          person,
        }
      })
    }}>
      <CardHeader>
        <Heading fontSize="x-large" size="md">
          {name}
        </Heading>
      </CardHeader>

      <CardBody>
        <Stack>
          <Box>
            <Text fontWeight="bold" as="span" pt="2" fontSize="medium">
              Gender:
            </Text>
            <Text as="span" pt="2" fontSize="medium">
              {" " + gender}
            </Text>
          </Box>
          <Box style={{marginTop: '0'}}>
            <Text fontWeight="bold" as="span" pt="2" fontSize="medium">
              Eye color:
            </Text>
            <Text as="span" pt="2" fontSize="medium">
              {" " + eye_color}
            </Text>
          </Box>
        </Stack>
        {
          showMore && (
            <Stack>
              <Box>
                { films?.map((item: string, index:number) => (
                  <Text fontSize="2xl" key={index}>{item}</Text>
                )) }
              </Box>
            </Stack>
          )
        }
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setShowMore(!showMore);
          }}
          mt="2rem"
          fontSize="xl"
          colorScheme="green"
        >
          { showMore ? 'Show less' : 'Show more' }
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
