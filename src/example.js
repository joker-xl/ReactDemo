import React, { useState,useEffect,useContext } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'

function Examples(){
    const [count,setCount]=useState(0)
    const [work]=useState('cnm')
    const [age]=useState('20')

    return (
        <div>
            <div>wocao{count}</div>
            <div>{work}</div>
            <div>{age}</div>
            <button onClick={()=>{setCount(count+1)}}></button>
        </div>
    )
}


export default Examples