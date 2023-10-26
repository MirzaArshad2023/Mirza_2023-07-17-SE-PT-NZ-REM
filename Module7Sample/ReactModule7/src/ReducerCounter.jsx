import { useReducer } from "react"

export function ReducerCounter()
{
    const[counter, dispatch] = useReducer(processData, 0)
    function HandleIncrement()
    {

        dispatch({type: "Increment"})
    }
    function HandleDecrement()
    {
        dispatch({type: "Decrement"})
    }
    function processData(values, method)
    {
        switch(method.type)
        {
            case "Increment":
                return values + 1;
            break;
            case "Decrement":
                return values - 1;
            break;
            default:
                return values;
        }
    }
    return(
        <>
            <div>
                <p>Counter:{counter}</p>
            </div>
            <div>
                <button onClick={HandleIncrement}>Increment</button>
                <button onClick={HandleDecrement}>Decrement</button>
            </div>
        </>
    )
}