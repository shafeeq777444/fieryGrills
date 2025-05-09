import { axiosInstance } from "../axiosInstance";
import { ENDPOINTS } from "../ENDPOINTS";

export const getAllDishes = async ({ vendor, category }) => {
    const response = await axiosInstance.get(ENDPOINTS.MENUS.DISHES({ vendor, category }));
    return response.data;
};

export const getWeeklyDishes = async (category) => {
    console.log(category,"category")
    const response = await axiosInstance.get(ENDPOINTS.MENUS.WEEKLYMENU({ vendor:"fieryGrills", category }));
    console.log(response.data,"response")
    return response.data;
};