interface Props{
    step : number;
    setStep : (value: number) =>void;
};

const StepInput = ({step, setStep}: Props) =>{
    return (
        <div className="mb-3">

            <label className="form-label">Step Value</label>
            <input className="form-control"
            type = "number"
            value = {step}
            onChange={(e) => setStep(Number(e.target.value))}
            />

        </div>
    )
}

export default StepInput;