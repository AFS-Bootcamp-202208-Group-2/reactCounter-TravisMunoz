import { useState } from "react";

const CounterSizeGenerator =() => {
    const [size, setSize] = useState(0);
    
    const onChange = (event) =>{
        const inputValue = event.target.value;
        setSize(inputValue);
    };
    
    return<div>
        <span>Size: </span>
    <input type="number" min={0} value={size} onChange={onChange}/>
    </div>
}

export default CounterSizeGenerator;