import React, { useState } from "react";
import BarChart from "./BarChart";

function Selection() {
  const [iteration, setIteration] = useState(0);
  const [names, setnames] = useState(0);
  const [colors,setcolors] =useState([
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
    ]);

  const [data, setData] = useState([
    {
      name: "One",
      value: 95,
      color: "#f4efd3"
    },
    {
      name: "Two",
      value: 72,
      color: "#cccccc"
    },
    {
      name: "Three",
      value: 45,
      color: "#c2b0c9"
    },
    {
      name: "Four",
      value: 8,
      color: "#9656a1"
    },
    {
      name: "Five",
      value: 90,
      color: "#fa697c"
    },
    {
      name: "Six",
      value: 50,
      color: "#fcc169"
    }
    
  ]);

  let onSubmit=(e)=>{
    e.preventDefault();
  }

  let c = data.map(x=>{
    return (
      <td Style="border:1px solid black">{x.value}</td>
      ) 
})

  return (
    <React.Fragment>
      <div className="container">
        <h3>Selection Sort</h3>
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
          setnames(names+1)
  
          let z = {
          name: na,
          value: c,
          color: col
        }

        data.push(z)
      console.log(data)
      setData(data.map((entry)=> entry ))

      }}>Put value inside the table</button>
      <input id="array" type="text" Style="width:100px;height:25px; background-color:	cornsilk;" ></input>
            </form>
          </td>
          <table Style="border:1px solid black"><tr>{c}</tr></table>
            <div Style="heigt:500px">
            <BarChart data={data} />
            </div>
      
            <button onClick={()=>{
              let i =0;
              let c=setInterval(()=>{
              if(i<data.length-1){
                let mi = i
                for(let j = i+1;j<data.length;j++){
                  if(data[j].value< data[mi].value){
                    document.getElementById("st").innerHTML =`let ${data[j].value} is new minimum`
                    mi = j
                  }
              }
       
                let temp1 = data[i];
                let temp2= data[mi]; 
                data[mi]=temp1;
                data[i]=temp2;
 
          
          
                setData(data.map((entry,index)=>index===i?temp2 :entry))
                setData(data.map((entry,index)=>index===mi?temp1 :entry))
                if(i<data.length-2){
                  setIteration(iteration =>iteration+1);

                }
           i++   
}
if(i===data.length-1){
  document.getElementById("st").innerHTML="array is sorted"
  clearInterval(c)
}
},1000)
}}>Selection sort</button>
      <p>Iteration: {iteration}</p>
      <h3 id="final" Style="background-color:green"></h3>
      <h5 id="st" Style="background-color:green">.</h5>




      
      </div>
    </React.Fragment>
  );
}

export default Selection;