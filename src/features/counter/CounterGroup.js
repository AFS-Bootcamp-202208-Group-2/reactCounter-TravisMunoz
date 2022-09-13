import Counter from "./Counter";

const CounterGroup = (prop) => {

    const size = prop.size;
    const sizeGroup = Array(size).fill(0);


    return sizeGroup.map((counter, index) => {
        return <Counter key={index} /> 
        
    })
}

export default CounterGroup;