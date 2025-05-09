import React from "react";

import { useGetAllDishes } from "../../services/Hooks/useMenus";
import VgAndNonvgMenuSections from "../../components/Menu/TotalMenuHeading/VgAndNonvgMenuSections";
import MenuGridSection from "../../components/Menu/TotalMenuHeading/MenuGridSection";

const PunjabiNonVegMenu = () => {
    const {data:punjabiNonVegDishes,isLoading:isLoadingNonVeg,isError:isNonVegError}=useGetAllDishes({vendor:"fieryGrills",category:"non-vegetarian"})
    const {data:punjabiVegDishes,isLoading:isLoadingVeg,isError:isVegError}=useGetAllDishes({vendor:"fieryGrills",category:"vegetarian"})
    const {data:punjabiSalads,isLoading:isLoadingSalads,isError:isSaladsError}=useGetAllDishes({vendor:"fieryGrills",category:"salad"})

    const isLoading=isLoadingNonVeg || isLoadingSalads || isLoadingVeg
    const isError=isNonVegError || isSaladsError || isVegError

    if(isLoading){return <div>Loading</div>}
    if(isError){return <div>Have error</div>}

    return (
        <div className="min-h-screen bg-white text-slate-800">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-6xl mx-auto">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-5xl font-bold text-amber-800 mb-4">Fiery Grills Punjabi Tiffin</h1>
                    <p className="text-lg text-gray-700 max-w-lg">
                        Savor the rich traditions of Punjab with our authentic vegetarian and non-vegetarian specialties,
                        complemented by fresh salads. Each dish is prepared using traditional spices and time-honored
                        cooking techniques.
                    </p>
                </div>
                <div className="w-1/2 flex justify-center">
                    {/* <div className="rounded-lg shadow-lg overflow-hidden h-120 flex justify-center items-start w-full"> */}
                        <img src="/assets/menu2.png" alt="Punjabi Non-Veg Food" className="object-fill object-bottom w-full h-full " />
                    {/* </div> */}          
                </div>
            </div>

        
            <VgAndNonvgMenuSections
            title="Our Non-Vegetarian Specialties"
            image="/assets/nonveg.jpeg"
            dishes={punjabiNonVegDishes}
            imageFirst={true}
            />

            <VgAndNonvgMenuSections
             title="Our Vegetarian Specialties"
             image="/assets/veg1.jpeg"
              dishes={punjabiVegDishes}
              imageFirst={false}
            />

            {/* Salads Section */}
            <MenuGridSection
            title="Fresh Punjabi Salads & Accompaniments"
            data={punjabiSalads}
            columns={3}
            />

        </div>
    );
};

export default PunjabiNonVegMenu;
