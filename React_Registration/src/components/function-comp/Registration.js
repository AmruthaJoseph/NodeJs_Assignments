import React from "react";
import "./style.css";

function Registration(props) {
  const { onbuttonClick } = props;

  const clickHandler = () => {
    onbuttonClick();
  };

  return (
    <div className="main-div">
      <div className="sub-div">
        <center>
          <h1> Registration Form</h1>
        </center>
        <br />
        <label> First Name </label>
        <input type="text" id="firstName" />
        <br />
        <label> Last Name </label>
        <input type="text" id="lastName" />
        <br />
        <label> Address </label>
        <textarea id="address"></textarea>
        <br />
        <label> Gender </label>
        <input type="radio" name="gender" value="male" />
        <span id="male">Male</span>
        <input type="radio" name="gender" value="female" />
        <span id="female">Female</span> <br />
        <br />
        <label> State </label>
        <select>
          <option>Select</option>
          <option>Kerala</option>
          <option>Punjab</option>
          <option>Tamil Nadu</option>
          <option>Karnataka</option>
        </select>
        <br />
        <label> Citizenship </label>
        <input type="checkbox" name="check1" />
        <span id="indian"> Indian </span>
        <input type="checkbox" name="check2" />
        <span id="non-indian"> Non-Indian </span>
        <br />
        <br />
        <button className="buttons" onClick={clickHandler}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Registration;
