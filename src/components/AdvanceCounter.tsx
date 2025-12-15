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
            <div className="card p-4 counter-card">
                <h3 className="text-center mb-3 counter-title">Counter</h3>
                <h2 className="text-center counter -value">Current Count: {count}</h2>
            <div className="counter-actions mt-3">
            <CounterControls 

            onDecrement={() => setCount((c) => c - step) }
            onIncrement={() => setCount((c) => c + step) }
            onReset={reset}
            />
            </div>
            <div className="step-input mt-3">
            <StepInput
            step = {step} setStep = {setStep}
            />
            </div>
            <p className="text-center mt-3 save-status">
               {status}
            </p>
            <div className="history-box p-3 mt-3">
            <CounterHistory history={history}
            
            />
            </div>

            <p className="text-muted text-center mt-3">
                Use ArrowUp to increment and ArrowDown to decrement.
            </p>
            </div>
        </div>
    )

}
export default AdvanceCounter