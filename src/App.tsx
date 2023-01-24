import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import CharactersPage from './pages/CharactersPage';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import SingleCharacter from './pages/SingleCharacter';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <CharactersPage />,
  },
  {
    path: "/characters/:id",
    element: <SingleCharacter />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <RouterProvider router={router} /> 
      </ChakraProvider>
    </QueryClientProvider>

  );
}

export default App;
