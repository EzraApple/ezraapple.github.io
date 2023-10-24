import {Button} from "@chakra-ui/react";

interface ProjectProps {
    title: string

}
const Project: React.FC<ProjectProps> = ({title}) => {
    return (
        <Button w={'200px'} h={'200px'}>
            {title}
        </Button>
    );
};

export default Project