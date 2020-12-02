import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer'

const Child2 = () => {
    let [state, dispatch]= useReducer(CounterReducer,1);//1 is the default value
    console.log(state)
    return(
        <div>
                <h2>This is second child using Counter Reducer</h2>
                <h3>Value of reducer state is: {state} </h3>
                <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
                <br />      
                <button onClick={()=>dispatch('DECREMENT')}>Decrement Reducer</button>
        </div>
    )
}
export default Child2;