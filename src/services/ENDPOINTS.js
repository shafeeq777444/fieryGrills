export const ENDPOINTS={
    PLANS:{
        CATEGORIES:"/plans/categories",
        SIZES:(categories)=>`/plans/${categories}/sizes`
    },
    MENUS:{
        DISHES:({vendor,category})=>`/menus/${vendor}/${category}/dishes`
    }
}