import { useContext } from "react";
import Context from './Context'; 

export default function useCardProvider() {
    const context = useContext(Context); 
    if(!context) throw new Error("Status Context is undefined"); 
    return context; 
}