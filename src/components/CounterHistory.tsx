interface Props {
    history : number[];
}

const CounterHistory = ({history} : Props) =>{

    return(
        <div className="mb-3">
            <h5>Count History: </h5>
            <div>
                {history.length ? history.join(","): "No history yet"}
            </div>
        </div>
    )

}

export default CounterHistory;