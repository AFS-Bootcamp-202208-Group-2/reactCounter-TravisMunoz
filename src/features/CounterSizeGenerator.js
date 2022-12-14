import { useState } from "react";

const CounterSizeGenerator =(props) => {
    const [size, setSize] = useState(0);
    const { onSizeChange } = props;
    
    const onChange = (event) =>{
        const inputValue = event.target.value;
        const sizeNumber = inputValue=== ''? 0 :parseInt(inputValue)
        setSize(sizeNumber);
        onSizeChange(sizeNumber);
    };
    
    return<div>
        <span>Size: </span>
    <input type="number" min={0} value={size} onChange={onChange}/>
    </div>
}

export default CounterSizeGenerator;