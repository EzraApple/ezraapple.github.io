import {HStack} from "@chakra-ui/react";
import Project from "./Project";

export const ProjectList = () => {
    return (
        <HStack justifyContent={'center'}>
            <Project title={'Project 1'}/>
            <Project title={'Project 2'}/>
            <Project title={'Project 3'}/>
            <Project title={'Project 4'}/>
        </HStack>
    );
};