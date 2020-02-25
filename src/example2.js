import React, { useState,useContext,createContext } from 'react';

const CountContext = createContext()

function Counter(){
    const counts = useContext(CountContext)
    return (
        <div>{counts}</div>
    )
}

function Example2(){
    const [count,setCount] = useState(0)
    return (
        <div>
           <p>click {count}</p> 
           <button onClick={()=>{setCount(count+1)}}>点击</button>
           <CountContext.Provider value={count}>
              <Counter/>
           </CountContext.Provider>
        </div>
    )
}

export default Example2
