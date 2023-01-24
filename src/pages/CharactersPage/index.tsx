import { Box, Button, Collapse, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getCharacters } from "../../api/getCharacters";
import CardComponent from "../../components/CardComponent";
import * as types from "../../models";
import { nanoid } from 'nanoid';
import { Container } from "chakra-paginator";

interface Props {}
const CharactersPage: React.FC<Props> = () => {
  const [page, setPage] = useState(1);
  const { isLoading, error, data } = useQuery({
    queryKey: ["Characters", { page }],
    keepPreviousData: false,
    queryFn: () => getCharacters(page)
  });
  if (isLoading) return <Heading textAlign="center" fontSize="xx-large">Loading...</Heading>;

  if (error) return <div>Error happened...</div>;

  const maxSize = data?.count;
  const maxPageSize = Math.ceil(maxSize / 10);
  const pages = new Array(maxPageSize).fill(maxPageSize).fill(0);
  const changePage = (page: number) => {
    setPage(page)
  }
  
  return (
    <Box maxW="128rem" mx="auto">
      <Heading fontSize="xxx-large" my="4rem" textAlign="center">
        Characters
      </Heading>
      <Flex gap="3rem" wrap="wrap">
        {data?.results?.map((item: types.Person) => (
          <CardComponent id={nanoid()} key={nanoid()} person={item} />
        ))}
      </Flex>
      <Flex>
        <Flex mt="2rem" mx="auto" gap="1rem">
          {
            pages.map((item, index) => (
              <Button onClick={() => changePage(index+1)} colorScheme='green' key={index}>{index+1}</Button>
            ))
          }
        </Flex>
      </Flex>
    </Box>
  );
};

export default CharactersPage;
