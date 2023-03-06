import React from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
