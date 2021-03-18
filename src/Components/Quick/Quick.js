import React, { useState } from "react";
import BarChart from "./BarChart";

import Part from './Part';




function Quick() {
  const [iteration, setIteration] = useState(0);
  const[left,setLeft] =useState(1)
  const[right,setRight] =useState(1)
  const [names, setNames] = useState(0);
  const [colors,setColors] =useState([
      "coral",
      "lemonchiffon",
      "greenyellow",
      "paleturquoise",
      "lavender",
      "burlywood",
      "lightpink",
      "blue",
      "palegreen",
      "olivedrab",
      "antiquewhite",
      "yellow",
      "lightsteelblue",
      "lightsalmon"
    ])

  const [data, setData] = useState([
    {
      name: "one",
      value: 9,
      color: "#f4efd3"
    },
    {
      name: "two",
      value: 7,
      color: "#cccccc"
    },
    {
      name: "three",
      value: 5,
      color: "#c2b0c9"
    },
    {
      name: "four",
      value: 11,
      color: "#9656a1"
    },
    {
      name: "five",
      value: 12,
      color: "#fa697c"
    },
    {
      name: "six",
      value: 2,
      color: "#fcc169"
    },
    {
      name: "seven",
      value: 14,
      color: "blue"
    },
    {
      name: "eight",
      value: 3,
      color: "orange"
    },
    {
      name: "nine",
      value: 10,
      color: "grey"
    },
    {
      name: "ten",
      value: 6,
      color: "yellow"
    }
    
  ]);

  let onSubmit=(e)=>{
    e.preventDefault();
  
  }
  let c = data.map(x=>{
    return(
      
        
          <td Style="border:1px solid black">{x.value}</td>
        
    
      ) 
})


  return (
    <React.Fragment>
      <div className="container">
      <h1>Quick Sort</h1>
      <td> <p id="it"></p>
      <form onSubmit={onSubmit} Style="height:15px">
      <button onClick={()=>{
        data.pop()
        setData(data.map((entry)=>entry ))
      }}>Delete </button>
      
      <button onClick={()=>{
  let y = document.getElementById("array").value;
  let c = parseInt(y)
  let col = colors[Math.floor(Math.random()*13)]
  let na = names.toString()
  console.log(names)
  setNames(names+1)
  
  let z = {
    name: na,
    value: c,
    color: col
  }
  data.push(z)
console.log(data)
setData(data.map((entry)=>entry ))

}}>Put value inside the table</button>
<input id="array" type="text" Style="width:100px;height:25px; background-color:	cornsilk;" ></input>
      </form>
     </td>
     <table Style="border:1px solid black"><tr>{c}</tr></table>
          
          <BarChart data={data} />
        
     
      
    <button onClick={()=>Part(data,setData,0,data.length-1,setIteration,setLeft,setRight,left,right)}>Quick sort</button>
      <p>Iteration: {iteration}</p>
      <h3 id="final" Style="background-color:green"></h3>
      <h5 id="st" Style="background-color:green"></h5>
      <h5 id="ins" Style="background-color:yellow"></h5>
          

      </div>
    </React.Fragment>
  );
}

export default Quick;

