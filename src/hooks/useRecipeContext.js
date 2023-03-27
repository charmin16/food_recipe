import { useContext } from "react";
import { RecipeContext } from "../contextrecipe/RecipeContext";

export const useRecipeContext = () => {

    const context = useContext(RecipeContext)
    return context
}