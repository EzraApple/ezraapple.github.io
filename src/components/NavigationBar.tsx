import {Button, Flex, Spacer} from "@chakra-ui/react";
import {ColorModeSwitcher} from "./homepage/ColorModeSwitcher";

interface NavBarProps {
    changePage: () => Function
}
export const NavigationBar: React.FC<NavBarProps> = ({changePage}) => {
    const change = changePage()
    return (
        <Flex h={'fit-content'} w={'100vw'}>
            <Button onClick={() => {change(0)}}>Home</Button>
            <Spacer/>
            <Button onClick={() => {change(1)}}>CV</Button>
            <ColorModeSwitcher/>
        </Flex>
    );
};