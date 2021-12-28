import _ from "lodash";
import React from "react";

export default function LabelSelect(props) {
  let options;

  if (_.isArray(props.options)) {
    options = props.options.map((option) => {
      return (
        <option value={option} key={option}>
          {option}
        </option>
      );
    });
  } else {
    options = Object.keys(props.options).map((key) => {
      return (
        <option value={key} key={key}>
          {props.options[key]}
        </option>
      );
    });
  }

  return (
    <div className={"flex flex-col mb-6 " + (props?.className || "")}>
      {props?.label && (
        <label htmlFor={props.name} className="mb-1">
          {props.label}
          {props.required && " *"}
        </label>
      )}
      <select
        name={props.name}
        className="block px-3 py-2 border-2 border-gray-200 rounded-md"
        required={props?.required || false}
        onChange={props?.onChange}
        value={props.value}
      >
        {options}
      </select>
    </div>
  );
}
