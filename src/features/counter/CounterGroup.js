import Counter from "./Counter";

const CounterGroup = (prop) => {
    const {updateSum} = prop;
    const {size} = prop;
    const sizeGroup = Array(size).fill(0);


    return sizeGroup.map((counter, index) => {
        return <Counter key={index} updateSum={updateSum} sizeChange={size}  /> 
        
    })
}

export default CounterGroup;