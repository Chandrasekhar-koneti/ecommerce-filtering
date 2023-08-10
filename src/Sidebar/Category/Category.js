import Input from "../../components/Input";
import "./Category.css";
import React from "react";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      {/* <div>
        <label class="sidebar-label-container">
          <input type="radio" name="test" />
          <span class="checkmark"></span>All
        </label>
        <label class="sidebar-label-container">
          <input type="radio" name="test" />
          <span class="checkmark"></span>Sneakers
        </label>
        <label class="sidebar-label-container">
          <input type="radio" name="test" />
          <span class="checkmark"></span>Flats
        </label>
        <label class="sidebar-label-container">
          <input type="radio" name="test" />
          <span class="checkmark"></span>Sandals
        </label>
        <label class="sidebar-label-container">
          <input type="radio" name="test" />
          <span class="checkmark"></span>Heels
        </label>
      </div> */}
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test" />
        <span className="checkmark"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="flats"
        title="Flats"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="test"
      />
    </div>
  );
};

export default Category;
