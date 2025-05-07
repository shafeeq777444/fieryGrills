import { axiosInstance } from "../axiosInstance"
import { ENDPOINTS } from "../ENDPOINTS"

export const getMealCategories=async()=>{
   const response= await axiosInstance.get(ENDPOINTS.PLANS.CATEGORIES)
   return response.data
}

export const getMealSizes=async(categories)=>{
   const response= await axiosInstance.get(ENDPOINTS.PLANS.SIZES(categories))
   return response.data
}

export const getMealDuration=async({category,size})=>{
   const response= await axiosInstance.get(ENDPOINTS.PLANS.SIZES(categories))
   return response.data
}
