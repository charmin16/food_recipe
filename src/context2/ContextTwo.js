import { createContext } from "react";
import { useReducer } from "react";

export const ContextTwo = createContext()

const secReducer = (state, action) => {
    switch (action.type) {
        case 'NAME_CHANGE':
            return { ...state, name: action.payload }
        case 'HOME_CHANGE': 
            return { ...state, home: action.payload }
        case 'COLOR_CHANGER':
            return { ...state, color: action.payload }
        case 'ELLA': 
            return { ...state, name: 'Emmanuella' }
        case 'JENNIFER': 
            return { ...state, name: 'Jennifer' }
        case 'TOGLE': 
            return { ...state, switsh: !state.switsh }
        
        default:
        return {...state}
    }
}

export function ContextTwoProvider({ children }) {

    const [state, dispatch] = useReducer(secReducer, {
        name: 'Victoria',
        home: 'Buguma',
        age: 25,
        rship: true,
        siblings: 3,
        wifeAble: true,
        color: 'pink',
        switsh : true
    })

    const nameChanger = (ere) => {
        dispatch({type: 'NAME_CHANGE', payload: ere })
    }

    const colorChanger = (color) => {
        dispatch({type: 'COLOR_CHANGER', payload: color})
    }

    const ellaName = () => {
        dispatch({type: 'ELLA'})
    }

    const jenniferName = () => {
        dispatch({type: 'JENNIFER'})
    }

    const togle = () => {
        dispatch({type: 'TOGLE'})
    }
    
    return (
        <ContextTwo.Provider value={{...state, nameChanger, colorChanger, jenniferName, ellaName, togle}}>
            {children}
        </ContextTwo.Provider>
    )
}