import { useQuery } from '@tanstack/react-query';
import { getMealCategories, getMealSizes } from '../apis/planService';

// getCategories
 export const useGetMealCategories=()=>{ 
 return useQuery({
    queryKey:["mealCategories"],
    queryFn:getMealCategories
 })
}

// getSizes
export const useGetMealSizes=(categories)=>{ 
   return useQuery({
      queryKey:["mealSizes",categories],
      queryFn:()=>getMealSizes(categories)
   })
  }

  // getDurations
export const useGetMealDurations=({category,size})=>{ 
   return useQuery({
      queryKey:["mealDuration",category,size],
      // queryFn:()=>getMealDuration({category,size})
   })
  }

