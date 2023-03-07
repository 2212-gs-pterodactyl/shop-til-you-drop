import React from "react";

import NavBar from "./components/Navbar";
import Routes from "./Routes";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes />
    </div>
  );
};

export default App;
