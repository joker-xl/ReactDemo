import React, { useReducer } from 'react';
import  './index.css'
function ReducerDemo(){
    const [count,dispatch] = useReducer((state,action)=>{
        switch(action){
            case 'add':
                return state+1
            case 'sub':
                return state-1
            default:
                return state
        }
    },0)

    return (
        <>
            <div  className="Login">现在的分数{count}</div>
            <button style={{width:'100px',height:'30px',border:'1px solid'}} onClick={()=>dispatch('add')}>add</button>
            <button onClick={()=>dispatch('sub')}>sub</button>
        </>
    )
}

export default ReducerDemo