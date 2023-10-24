import * as React from "react"
import {
  ChakraProvider,
  Box,
} from "@chakra-ui/react"
import {NavigationBar} from "./components/NavigationBar";
import theme from './styles/theme'
import {Main} from "./components/Main";
import {useState} from "react";

export const App = () => {
  const [page, setPage] = useState(0)
  return (
  <ChakraProvider theme={theme}>
    <Box>
      <NavigationBar changePage={()=>setPage}/>
      <Main page={page}/>
    </Box>
  </ChakraProvider>
)}
