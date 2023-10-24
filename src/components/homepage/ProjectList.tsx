import {HStack} from "@chakra-ui/react";
import Project from "./Project";

interface Project {
    title: string,
    skills: string,
    description: string
}

const projects: Project[] = [
    {
        title: "Project 1",
        skills: "Python",
        description: "I did stuff"
    },
    {
        title: "Project 2",
        skills: "Python?",
        description: "I did other stuff"
    },
    {
        title: "Project 3",
        skills: "Python!",
        description: "I did different stuff"
    },
]

export const ProjectList = () => {
    return (
        <HStack justifyContent={'center'}>
            {projects.map(product => {
                return <Project
                    title={product.title}
                    skills={product.skills}
                    description={product.description}
                    />
            })}
        </HStack>
    );
};