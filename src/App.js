import React from "react";
import { Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Bubble from "./Components/Bubble/Bubble";
import Selection from './Components/Selection/Selection';
import Insertion from './Components/Insertion/Insertion';
import Quick from './Components/Quick/Quick';
//import Merge from './Components/Merge/Merge';

function App() {
  return (
    <div className="App">
      <Header />


      <Route exact path="/" component={Home} />


      <Route path="/bubble" component={Bubble} />
      <Route path="/selection" component={Selection} />
      <Route path="/insertion" component={Insertion} />
      <Route path="/quick" component={Quick} />
      {/* <Route path="/merge" component={Merge} /> */}
    </div>
  );
}

export default App;
