import { useState } from "react"


export default function Counter (){
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount(count + 1);
    }
    const handlerReduce = () => {
        const reduce = count - 1;
        setCount(reduce);
    }
    return(
        <div style={{border: '2px solid yellow'}}>
            <h3>Counter : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handlerReduce}>Add</button>
        </div>
    )
}