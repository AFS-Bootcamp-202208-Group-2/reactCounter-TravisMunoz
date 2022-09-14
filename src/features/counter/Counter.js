import { useEffect, useState } from "react";

const Counter = (prop) =>{
    const {updateSum} = prop;
    const {sizeChange} = prop;

    useEffect(()=> {
        setNumber(0)
    },[sizeChange])


    const [number, setNumber] = useState(1);
    const increase = () => {
        setNumber(number + 1);
        updateSum(1)
    }

    const decrease = () => {
        setNumber(number - 1);
        updateSum(-1)
    }
    
    return <div>
        <button onClick={increase}>+</button>
        <span>{number}</span>
        <button onClick={decrease}>-</button>
    </div>;
}

export default Counter