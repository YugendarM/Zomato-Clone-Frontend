import React from "react";
import {BsChevronDown} from "react-icons/bs";
import {BiChevronRight} from "react-icons/bi";
import Footer from "../Footer";
import HomeLayoutHOC from "../../HOC/Home.hoc";
import Master from "../Home";
import { Link } from "react-router-dom";

const Lander = () => {

    const cities = [
        "Chennai",
        "Agra",
        "Ahmedabad",
        "Mumbai",
        "Bhopal",
        "Gwalior",
        "Coimbatore",
        "Dehradun",
        "Darjeeling",
        "Delhi",
        "Gangtok",
        "Goa",
        "Guntur",
        "Jabalupur",
        "Jaipur",
        "Jammu",
        "Jalandhar",
        "Manali",
        "Mussoorie",
        "Lucknow",
        "Puducherry"
    ];

    return (
        <>

        <div className="relative w-full h-full">
            <div className=" w-full h-full top-0 right-0">
                <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" className="w-full object-cover" style={{height: "550px"}} />
            </div>
            <div className="absolute top-5 lg:px-52 px-4 flex items-center justify-end gap-5 w-full">
                <p className="text-white text-xl">Add restaurant</p>
                <div className="text-white text-xl flex items-center gap-2">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.vvmpWt0qBu3LeBgZuUfmGAHaFt&pid=Api&P=0&h=180" className="h-10 w-10 rounded-full object-cover"/>
                    <p className="font-semibold">Yugendar</p>
                    <BsChevronDown/>
                </div>
            </div>
            <div className="flex justify-center items-center w-full">
            <div className="absolute top-56 w-2/6 flex flex-col items-center gap-6">
                <div className="w-72">
                    <img className="h-full w-full" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="logo"/>
                </div>
                <h2 className="w-96 md:w-auto text-4xl text-center text-white ">Find the best restaurants, cafés and bars in India</h2>
            </div>
            </div>
        </div>

        <div className="text-2xl md:text-4xl flex w-full justify-center items-center flex-col gap-5 my-10 px-4">
            <div className="flex gap-1 items-center">
                <h1>Popular locations in</h1>
                <img src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp " className="h-6 md:h-10 object-cover"/>
                <h1>India</h1>
            </div>
            <p className="text-lg md:text-xl md:w-3/5 text-center text-gray-500">From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-3 md:px-20 lg:px-52 justify-between ">
            {cities.map((city) => (
                <Link to={"/delivery"} className="flex px-3 py-4 rounded-md text-xl text-gray-700 items-center shadow-md justify-between h-20 md:h-16 w-full my-2  md:my-12 md:mb-0 md:mr-10" >
                    <p>{city} Restaurants</p>
                    <BiChevronRight/>
                </Link>
            ))}
        </div>


        <Footer/>
          
            {/* <Link to={"/delivery"}>Delivery</Link> */}
            
            {/* <h1>Restaurant tab alignments</h1>
            <h1>Image Viewer for restaurant grid</h1> */}
            

        </>

    );
};

export default Lander;