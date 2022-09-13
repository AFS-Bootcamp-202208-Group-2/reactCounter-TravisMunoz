import { useState } from "react";

const Counter = () =>{

    const [number, setNumber] = useState(1);
    const increase = () => {
        setNumber(number + 1);
    }

    const decrease = () => {
        setNumber(number - 1);
    }
    
    return <div>
        <button onClick={increase}>+</button>
        <span>{number}</span>
        <button onClick={decrease}>-</button>
    </div>;
}

export default Counter