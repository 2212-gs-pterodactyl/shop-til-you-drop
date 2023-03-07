import { useLocation, Link } from "react-router-dom";
import React from "react";
const PageNotFound = () => {
  const location = useLocation();
  return (
    <>
      <h1>
        Ah! Unfortunately, the extension {location.pathname} doesn't lead
        anywhere.
      </h1>
      <h4> Click below to visit the arboretum.</h4>
      <a href="/products">
        <img
          src="https://media.cntraveler.com/photos/5f75e15027ff4a3188ba1b94/16:9/w_2240,c_limit/DallasArboretum-2020-GettyImages-1055889312.jpg"
          alt="/products"
          width="390"
          height="220"
        ></img>
      </a>
    </>
  );
};

export default PageNotFound;
