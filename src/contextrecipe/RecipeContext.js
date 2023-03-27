import { createContext, useReducer } from "react";

export const RecipeContext = createContext()

const recipeAuth = (state, action) => {
    switch (action.type) {
        case 'CHANGE_DATA':
            return { ...state }
        default:
            return {...state}
    }
}

export function RecipeContextProvider({ children }) {

    const [state, dispatch] = useReducer(recipeAuth, {recipeData: null})
    
    return (
        <RecipeContext.Provider value={{...state}}>
            {children}
        </RecipeContext.Provider>
    )
}