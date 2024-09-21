import React, {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(c => c+1); // is c is count but cant use the same name for updation
    }

    const decrement = () =>{
        setCount(c => c-1);
    }

    const resetcount = () =>{
        setCount(0);
    }

    return (
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrease</button>
            <button className="counter-button" onClick={resetcount}>Reset</button>
            <button className="counter-button" onClick={increment}>Increase</button>
        </div>
    );
}

export default Counter;

