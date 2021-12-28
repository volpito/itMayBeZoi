import React from "react";

export default function LabelInput(props) {
  return (
    <div className={"flex flex-col mb-6 " + (props?.className || "")}>
      {props?.label && (
        <label htmlFor={props.name} className="mb-1">
          {props.label}
          {props.required && " *"}
        </label>
      )}
      <div
        className={`flex items-center border-2 border-gray-200 rounded-md overflow-hidden ${
          props?.disabled ? "bg-gray-100" : "bg-white"
        }`}
      >
        <input
          type={props?.type || "text"}
          name={props.name}
          placeholder={props?.placeholder || ""}
          className="block flex-grow disabled:text-gray-400 bg-transparent px-3 py-2 focus:ring-0 border-none focus:outline-none"
          value={props?.value || ""}
          required={props?.required || false}
          onChange={props?.onChange}
          disabled={props?.disabled}
          maxLength={props?.maxLength}
        />
        {props?.maxLength && (
          <div className="text-gray-300 px-2 text-xs pt-1">
            {props?.value.length}/{props?.maxLength}
          </div>
        )}
      </div>
    </div>
  );
}
