import {
    Button,
    Text,
    useDisclosure,
    VStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter, ModalBody, Flex, Spacer
} from "@chakra-ui/react";

interface ProjectProps {
    title: string
    skills: string
    description: string

}
const Project: React.FC<ProjectProps> = ({title, skills, description}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <><Button
            onClick={onOpen}
            w={'20vw'}
            h={'25vh'}>
            <VStack h={'100%'}>
                <Text textStyle={'h2'}>{title}</Text>
                <Text textStyle={'body'}>{skills}</Text>
                <Text textStyle={'body'}>{description}</Text>
            </VStack>
        </Button><Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalBody>
                    <Text>{skills}</Text>
                    <Text>{description}</Text>
                </ModalBody>
                <ModalFooter>
                    <Button bg={''}>Learn More</Button>
                    <Button onClick={onClose} bg={'red'}>Close</Button>
                </ModalFooter>
             </ModalContent>
        </Modal></>
    );
};

export default Project