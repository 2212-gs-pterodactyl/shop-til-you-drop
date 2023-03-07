import React from "react";
const Careers = () => {
  return (
    <>
      <h1>
        {" "}
        <i>DACTYL CAREERS.</i>
      </h1>
      <p>
        At Dactyl, we are always seeking talent. Send resume as a PDF to{" "}
        <b>hiring@dactylArbo.com</b> and indicate the desired position(s) in the
        subject line.
      </p>
      <p>
        <b>OPEN POSITIONS: </b>
      </p>
      <ul>
        <li>Chief of Github Operations</li>
        <li>Schema (re)Designer</li>
        <li>Database Seeder</li>
        <li>(Merge) Conflict Resolution Specialist</li>
        <li>Dummy Data Technician/Logistician</li>
        <li>CSS Maestro</li>
      </ul>
      Click the branchway to return to the arboretum.<br></br>
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

export default Careers;
