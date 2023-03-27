import { TrialContext } from "../context/TrialContext";
import { useContext } from "react";

export const useTrialContext = () => {
    const context = useContext(TrialContext)
    
    return context
}

