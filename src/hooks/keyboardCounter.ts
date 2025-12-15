/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";

interface Props{
increment : () => void;
decrement : () => void;

}

export const keyboardCounter = ({increment, decrement}: Props) => {
    useEffect(()=>{
        const handleKey = (e: KeyboardEvent)=>{

            if(e.key === "ArrowUp") increment();
            if(e.key === "ArrowDown") decrement();
        }
        document.addEventListener("keydown", handleKey);

        return ()=>{
            document.removeEventListener("keydown", handleKey)
        }

        
    },[increment, decrement])

}