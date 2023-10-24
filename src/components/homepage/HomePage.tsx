import {Intro} from "./Intro";
import {Divider, VStack} from "@chakra-ui/react";
import {ProjectList} from "./ProjectList";
import * as React from "react";

export const HomePage = () => {
    return (
        <VStack>
            <Intro/>
            <Divider/>
            <ProjectList/>
        </VStack>
    );
};