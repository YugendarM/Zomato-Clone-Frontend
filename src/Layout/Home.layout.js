import React from "react";
import Navbar from "../Components/Navbar/Navbar.component";
import Tab from "../Components/Tab";
import Footer from "../Components/Footer";
import { useParams,useLocation } from "react-router-dom";
import Lander from "../Components/Lander Page";

const HomeLayout = (props) => {
    const location = useLocation();
    const currentPath = location.pathname;

    if(currentPath === "/") return <Lander/>;

    return (
        <>
            <Navbar/>
            <Tab/>
            {props.children}
            <Footer/>
        </>
    );
};

export default HomeLayout;