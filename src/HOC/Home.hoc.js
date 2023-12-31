import React, {Component} from "react";
import { Route,Routes } from "react-router-dom";

//Layouts
import HomeLayout from "../Layout/Home.layout";

const HomeLayoutHOC = ({Component:Component, ...rest}) => {
    return (
        <>
            <Routes>
            <Route
                {...rest}
                Component = {(props) => (
                    <HomeLayout>
                        <Component {...rest}/>
                    </HomeLayout>
                )}
            />
            </Routes>
        </>
    );
};

export default HomeLayoutHOC;