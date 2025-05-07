import { axiosInstance } from "../axiosInstance";
import { ENDPOINTS } from "../ENDPOINTS";

export const getAllDishes = async ({ vendor, category }) => {
    const response = await axiosInstance.get(ENDPOINTS.MENUS.DISHES({ vendor, category }));
    return response.data;
};
