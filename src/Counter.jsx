import { useState } from "react";
const Counter = () => {
    const [counter,setCounter] = useState(() => {
        return 10
    });
    const incrementCounter = () => {
        setCounter((prevState) => {
            return prevState + 1;
        })
    }
    const decrementCounter = () => {
        setCounter((prevState) => {
            return prevState - 1;
        })
    }
   return(
    <div className="col-12 col-md-4 offset-md-4 border text-white">
        <span className="h2 pt-4 m-2 text-white-5">Fun Counter</span>
        <br/>
        <button className="btn btn-success m-1" onClick={incrementCounter}>+1</button> 
        <button className="btn btn-danger m-1" onClick={decrementCounter}>-1</button>
        <br/>
        <span className="h4">
            Conter : &nbsp;
            <span className="text-success">{counter}</span>
        </span>
    </div>
   )
}

export default Counter;