import { useEffect, useState } from "react";
import CounterSizeGenerator from "../CounterSizeGenerator";
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";

const MultipleCounter =() => {
    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);
    

    const handleSizeChange = (size) => {
        setSize(size);
    }

    const updateSum = (Add) => {
        setSum(sum + Add);
      };

    useEffect(() =>{
        setSum(0);
    },[size])

    return<><CounterSizeGenerator onSizeChange = {handleSizeChange} />
    {sum}
    <CounterGroup size = {size} updateSum = {updateSum}  />
    </>
}

export default MultipleCounter;