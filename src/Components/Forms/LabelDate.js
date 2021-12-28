import React from "react";

export default function LabelDate(props) {
  return (
    <div className={`flex flex-col mb-6 ${props?.className}`}>
      {props?.label && (
        <label htmlFor={props.name} className="mb-1">
          {props.label}{props.required && " *"}
        </label>
      )}
      <input
        type="date"
        name={props?.name}
        className="block w-full px-3 py-2 border-2 border-gray-200 rounded-md"
        value={props?.value || ""}
        required={props?.required || false}
        onChange={props?.onChange}
        max={props?.max || false}
      />
    </div>
  );
}
