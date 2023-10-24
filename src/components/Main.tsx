import * as React from "react";
import {HomePage} from "./homepage/HomePage";
import {CVPage} from "./cv/CVPage";

interface MainProps {
    page: number
}

export const Main: React.FC<MainProps> = ({page}) => {

    if (page == 0) {
        return (<HomePage/>)
    } else {
        return (<CVPage/>)
    }
};