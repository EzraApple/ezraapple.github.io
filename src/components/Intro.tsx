import {Flex, Spacer} from "@chakra-ui/react";
import {AboutMe} from "./AboutMe";
import {NameAndLinks} from "./NameAndLinks";

export const Intro = () => {
    return (
        <Flex>
            <NameAndLinks/>
            <AboutMe/>
        </Flex>
    );
};