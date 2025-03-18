import React from 'react'
import "./App.css"
export default function App1() {
   let a=10
   let b=20
   const mystyle={
       color:"red",
       backgroundColor:"yellow",
       padding:"10px",
       fontFamily:"Arial"
   }
   return (
      <div>
        {a+b}
        <p style={{backgroundColor:"pink"}}>Hello World</p>
        <p style={mystyle}>Good Morning</p>


      </div>
    )
    }
