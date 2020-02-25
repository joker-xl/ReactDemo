import React, { useState,useEffect,useContext,createContext } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


function Index(){
    useEffect(()=>{
        console.log('useEffect=>老弟')
        return ()=>{
            console.log('老弟，你走啦 Index!!')
        }
    })
    return (
        <div>gun</div>
    )
}

function List(){
    useEffect(()=>{
     console.log('list----')
     return ()=>{
         console.log('LIST离开')
     } 
    })
    return (
        <div>
          YYYYYY
        </div>
    )
}

function example1(){
    return (
        <Router>
            <li><Link to="/">首页</Link></li>
            <li><Link to="/list">列表</Link></li>
            <Route path="/" component={Index} exact></Route>
            <Route path="/list/" component={List}></Route>
        </Router>
    )
}

export default example1