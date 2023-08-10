import Input from "../../components/Input";
import "./Colors.css";

import React from "react";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="colo-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test1" />
        <span className="checkmark all"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          value="white"
          name="test1"
        />
        <span
          className="checkmark"
          style={{ background: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
      {/* <label class="sidebar-label-container color-title">
        <input type="radio" name="test2" />
        <span class="checkmark"></span>All
      </label>
      <label class="sidebar-label-container">
        <input type="radio" name="test2" />
        <span class="checkmark"></span>Black
      </label>
      <label class="sidebar-label-container">
        <input type="radio" name="test2" />
        <span class="checkmark"></span>Blue
      </label>
      <label class="sidebar-label-container">
        <input type="radio" name="test2" />
        <span class="checkmark"></span>Red
      </label>
      <label class="sidebar-label-container">
        <input type="radio" name="test2" />
        <span class="checkmark"></span>Green
      </label>
      <label class="sidebar-label-container">
        <input type="radio" name="test2" />
        <span class="checkmark"></span>White
      </label> */}
    </div>
  );
};

export default Colors;
