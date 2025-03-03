import { useState } from "react";
import "./SelectClass.scss";

const SelectClass = ({ onChange, className }) => {
  const classes = ["5A", "6B", "CSE-1"];

  return (
    <select name="" id="" onChange={onChange}>
      <option value={className} disabled>
        Select Class
      </option>
      {classes.map((item, i) => {
        return (
          <option key={i} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default SelectClass;
