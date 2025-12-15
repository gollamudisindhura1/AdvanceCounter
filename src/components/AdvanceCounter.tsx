/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react"
import { saveCount,loadCount } from "../utils/localStorage";
import CounterControls from "./CounterControls";
import StepInput from "./StepInput";
import CounterHistory from "./CounterHistory";
import { keyboardCounter } from "../hooks/keyboardCounter";

const AdvanceCounter = ()=>{
    const [count, setCount]= useState(0);
    const [history, setHistory] = useState<number[]>([]);
    const [step, setStep] = useState(1);
    const [status, setStatus] = useState("")

    useEffect(() =>{
        const fetchCount = async () => {
            const saved = await loadCount();
            if(saved !== null){
                setCount(saved);
                setHistory([saved])
            }
        }
        fetchCount();
    },[])

    useEffect(()=>{
        let active = true;
    setStatus("Saving..");
    const save = async()=>{
        await saveCount(count);
        if(active) setStatus("Changes saved.")
    }
save();
return ()=>{
    active = false;
}
},[count] );
useEffect (()=>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHistory((prev)=>[...prev, count]);
}, [count])

    keyboardCounter({
    increment : ()=> setCount((c) => c + step),
    decrement : ()=> setCount((c)=> c - step),
})

const reset = ()=>{
    setCount(0);
    setHistory([]);
}

    return(
        <div className="container mt -5">
            <div className="card p-4 shadow-sm">
                <h3 className="text-center mb-3">Counter</h3>
                <h2 className="text-center">Current Count: {count}</h2>
            <CounterControls 

            onDecrement={() => setCount((c) => c - step) }
            onIncrement={() => setCount((c) => c + step) }
            onReset={reset}
            />

            <StepInput
            step = {step} setStep = {setStep}
            />
            <p className="text-muted text-center mt-3">
               {status}
            </p>
            <CounterHistory history={history}
            
            />

            <p className="text-muted text-center mt-3">
                Use ArrowUp to increment and ArrowDown to decrement.
            </p>
            </div>
        </div>
    )

}
export default AdvanceCounter