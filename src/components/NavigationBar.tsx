import {Button, Flex, Spacer} from "@chakra-ui/react";
import {ColorModeSwitcher} from "./ColorModeSwitcher";

export const NavigationBar = () => {
    return (
        <Flex h={'fit-content'} w={'100vw'}>
            <Button>Home</Button>
            <Spacer/>
            <Button>About Me</Button>
            <Button>CV</Button>
            <ColorModeSwitcher/>
        </Flex>
    );
};