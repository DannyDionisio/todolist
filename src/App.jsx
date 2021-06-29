import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DetailedTask from "./pages/DetailedTask";

import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/detailedtask/:taskName" exact component={DetailedTask} />
    </BrowserRouter>
  );
};

export default App;
