import React from "react";

export default function LabelCheckbox(props) {
  return (
    <div className={`flex items-top mb-6 ${props?.className}`}>
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        className="flex-shrink-0 ml-2 w-5 h-5 mr-2"
        onChange={props?.onChange}
      />
      {props?.label && (
        <label htmlFor={props.name} className="text-sm text-gray-700">
          {props.label}
        </label>
      )}
    </div>
  );
}
