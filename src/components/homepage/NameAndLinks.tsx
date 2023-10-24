import {VStack, Text, HStack, IconButton, Link} from "@chakra-ui/react";
import {GrGithub, GrInstagram, GrLinkedin} from "react-icons/all";

export const NameAndLinks = () => {
    return (
        <VStack w={'50vw'}>
            <Text textStyle={'h1'}>Ezra Apple</Text>
            <Text textStyle={'h2'}>Machine Learning and Full Stack</Text>
            <Text>Small Intro about interests/skills</Text>
            <HStack>
                <Link href={'https://www.linkedin.com/in/ezraapple/'} isExternal>
                    <IconButton
                        icon={<GrLinkedin size={'5vh'}/>}
                        aria-label={'LinkedIn'}
                    />
                </Link>
                <Link href={'https://github.com/EzraApple'} isExternal>
                    <IconButton
                        icon={<GrGithub size={'5vh'}/>}
                        aria-label={'LinkedIn'}
                    />
                </Link>
                <Link href={'https://www.instagram.com/ezra.apple/'} isExternal>
                    <IconButton
                        icon={<GrInstagram size={'5vh'}/>}
                        aria-label={'LinkedIn'}
                    />
                </Link>
            </HStack>
        </VStack>
    );
};