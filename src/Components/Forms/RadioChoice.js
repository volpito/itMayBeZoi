import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RadioChoice(props) {
  const [selected, setSelected] = useState(
    props.settings.find((setting) => setting.value == props.initialValue) ||
      props.settings[0]
  );

  return (
    <RadioGroup value={selected} onChange={setSelected} className="mb-8">
      <div className="bg-white rounded-md -space-y-px">
        {props.settings.map((setting, settingIdx) => (
          <RadioGroup.Option
            key={setting.name}
            value={setting}
            className={({ checked }) =>
              classNames(
                settingIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                settingIdx === props.settings.length - 1
                  ? "rounded-bl-md rounded-br-md"
                  : "",
                settingIdx < props.settings.length - 1 ? "border-b-0" : "",
                checked ? "bg-blue-50 z-10" : "",
                "relative border-2 border-gray-200 p-4 flex cursor-pointer focus:outline-none"
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span
                  className={classNames(
                    checked
                      ? "bg-primary border-transparent"
                      : "bg-white border-gray-300",
                    active ? "ring-2 ring-offset-2 ring-primary" : "",
                    "h-4 w-4 mt-0.5 cursor-pointer rounded-full border-2 flex items-center justify-center"
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                </span>
                <div className="ml-3 flex flex-col">
                  <RadioGroup.Label
                    as="span"
                    className={classNames(
                      checked ? "text-primary" : "text-gray-800",
                      "block text-sm font-medium"
                    )}
                  >
                    {setting.name}
                  </RadioGroup.Label>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
      <input type="hidden" name={props.name} value={selected.value} />
    </RadioGroup>
  );
}
