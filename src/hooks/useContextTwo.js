import { useContext } from "react";
import { ContextTwo } from "../context2/ContextTwo";

export const useContextTwo = () => {
    const context = useContext(ContextTwo)

    return context
}

