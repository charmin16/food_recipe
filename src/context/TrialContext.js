import { createContext, useReducer } from "react";

export const TrialContext = createContext()

const trialReducer = (state, action) => {
    switch (action.type) {
        case 'NAME_CHANGE':
            return { ...state, name: 'Princewill' }
        case 'COLOR_CHANGE': 
            return { ...state, favColor: action.payload }
        case 'COLOR_SWAP': 
            return {...state, colorSwap: !state.colorSwap}
    }
}

export function TrialContextProvider({ children }) {
    
    const [state, dispatch] = useReducer(trialReducer, {
        name: 'charming',
        favColor: 'blue',
        relationship: true,
        girlfriend: 'Victoria Renner',
        homeState: 'Rivers',
        homeTown: 'Buguma',
        career: 'Software Developer',
        toGoCity: 'Atlanta, Georgia',
        colorSwap: true
    })

    const newColor = (color) => {
       dispatch({type:'COLOR_CHANGE', payload: color})
    }

    const colorToggle = () => {
        dispatch({type: 'COLOR_SWAP' })
    }
    
    return (
        <TrialContext.Provider value={{...state, newColor, colorToggle}}>
            {children}
        </TrialContext.Provider>
    )
}