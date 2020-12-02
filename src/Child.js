import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child =  () => {

    let counterValue = useContext(counterContext)
    //console.log(counterValue)
    return (
        <div>
            <h2>This is first child using CounterContext</h2>
            {/* <h3>This is {props.name}</h3> */}
            <h4>Counter value is: {counterValue[0]}</h4>
            <button onClick={()=> {counterValue[1](++counterValue[0])}}>
                Increment
            </button>
        </div>
    )
}

export default Child;