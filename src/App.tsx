import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Divider,
} from "@chakra-ui/react"
import {NavigationBar} from "./components/NavigationBar";
import theme from './styles/theme'
import {Intro} from "./components/Intro";
import {ProjectList} from "./components/ProjectList";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <VStack>
        <NavigationBar/>
        <Intro/>
        <Divider/>
        <ProjectList/>
      </VStack>
    </Box>
  </ChakraProvider>
)
