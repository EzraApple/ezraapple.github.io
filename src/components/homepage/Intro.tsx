import {Flex} from "@chakra-ui/react";
import {AboutMe} from "./AboutMe";
import {NameAndLinks} from "./NameAndLinks";

export const Intro = () => {
    return (
        <Flex w={'100vw'} h={'fit-content'}>
            <NameAndLinks/>
            <AboutMe/>
        </Flex>
    );
};