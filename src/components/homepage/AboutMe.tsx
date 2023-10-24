import {Text, VStack, Image} from "@chakra-ui/react";

export const AboutMe = () => {
    return (
        <VStack w={'50vw'}>
            <Image
                w={'30vw'}
                src={'face.jpg'}/>
            <Text>Some stuff about me</Text>
        </VStack>
    );
};