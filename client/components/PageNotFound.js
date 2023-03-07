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

      <h4>
        But <Link to={`/products/`}>this</Link> will take you to the arboretum.
      </h4>
    </>
  );
};

export default PageNotFound;
