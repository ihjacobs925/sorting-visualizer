import React, { useState } from "react";
import BarChart from "./BarChart";

function Merge() {
  const [iteration, setIteration] = useState(0);
  const [left, setLeft] = useState(1);
  const [right, setRight] = useState(1);
  const [names, setNames] = useState(0);
  const [colors, setColors] = useState([
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
    "lightsalmon",
  ]);

  const [data, setData] = useState([
    {
      name: "one",
      value: 9,
      color: "#f4efd3",
    },
    {
      name: "two",
      value: 7,
      color: "#cccccc",
    },
    {
      name: "three",
      value: 5,
      color: "#c2b0c9",
    },
    {
      name: "four",
      value: 11,
      color: "#9656a1",
    },
    {
      name: "five",
      value: 12,
      color: "#fa697c",
    },
    {
      name: "six",
      value: 2,
      color: "#fcc169",
    },
    {
      name: "seven",
      value: 14,
      color: "blue",
    },
    {
      name: "eight",
      value: 3,
      color: "orange",
    },
    {
      name: "nine",
      value: 10,
      color: "grey",
    },
    {
      name: "ten",
      value: 6,
      color: "yellow",
    },
  ]);

  let onSubmit = (e) => {
    e.preventDefault();
  };

  let c = data.map((x) => {
    return <td Style="border:1px solid black">{x.value}</td>;
  });

  return (
      <React.Fragment>
          <div className="container">
              <h1>Merge Sort</h1>
              <td> <p id="it"></p>
              <form onSubmit={onSubmit} Style="height:15px">
              <button onClick={() => {
                  data.pop()
                  setData(data.map((entry) => entry))
              }}>Delete</button>

              <button onClick={() => {
                  let y = document.getElementById("array").value;
                  let c = parseInt(y)
                  let col = colors[Math.floor(Math.random()*13)]
                  let na = names.toString()
                  console.log(names)
                  setNames(names+1)

                  let z = {
                      names: na,
                      value: c,
                      color: col
                  }

                  data.push(z)
                  console.log(data)
                  setData(data.map((entry) => entry))
              }}>Put value inside the table</button>
              <input id="array" type="text" Style="width:100px;height25px; background-color: cornsilk;"></input>
                </form>
              </td>
              <table Style="border:1px solid black"><tr>{c}</tr></table>

                    <BarChart data={data} />

               

          </div>
      </React.Fragment>
  )
}


export default Merge;
