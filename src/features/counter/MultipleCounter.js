import { useState } from "react";
import CounterSizeGenerator from "../CounterSizeGenerator";
import CounterGroup from "./CounterGroup";

const MultipleCounter =() => {
    const [size, setSize] = useState(0);

    const handleSizeChange = (size) => {
        setSize(size);
    }

    return<><CounterSizeGenerator onSizeChange={handleSizeChange} />
    <CounterGroup size={size} />
    </>
}

export default MultipleCounter;