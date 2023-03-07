import React from "react";
const About = () => {
  return (
    <>
      <h1>
        {" "}
        <i>ABOUT DACTYL.</i>
      </h1>
      <p>
        Dactyl Arboretum was first founded in February 2023 as a bi-coastal
        collaboration among Alex Kalupaila, Brian Wong, Forhad Zinnah and Jason
        Wang. Despite knowing next to nothing about plants (or Github
        operations), these four Fullstack operators put their skills to use to
        make a functioning eCommerce site. After all the merge conflicts, schema
        redesigns and thunk modifications, DACTYL ARBORETUM finally came alive
        on 8 March 2023. Click on the branchway below to check us out.{" "}
      </p>
      <br></br>
      <br></br>
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

export default About;
