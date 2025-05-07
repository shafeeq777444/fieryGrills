import { useQuery } from '@tanstack/react-query';
import { getAllDishes } from '../apis/menuService';

// getCategories
 export const useGetAllDishes=({vendor,category})=>{ 
 return useQuery({
    queryKey:["dishes",vendor,category],
    queryFn:()=>getAllDishes({vendor,category})
 })
}