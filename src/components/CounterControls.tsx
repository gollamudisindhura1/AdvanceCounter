interface Props {
    onIncrement: ()=> void;
    onDecrement : ()=> void;
    onReset : () => void;
}

const CounterControls=({onIncrement, onDecrement, onReset} : Props)=>{

    return(
       <div className="d-flex justify-content-center gap-2 my-3">
        <button className="btn btn-danger" onClick={onDecrement}>Decrement</button>
        <button className="btn btn-primary" onClick={onIncrement
        }>Increment</button>
        <button className="btn btn-secondary" onClick={onReset}>Reset</button>
       </div>

    )


}
export default CounterControls;