import React from "react";

export default function Input({
  type,
  placeholder,
  id,
  value,
  onChange,
  text,
  min,
  max,
}) {
  return (
    <>
      <label className="font-medium" htmlFor={id}>
        {text}
        <div className="w-full">
          <input
            type={type}
            className="px-2 py-1 w-full border border-black font-medium"
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            min={min}
            max={max}
            required
          />
        </div>
      </label>
    </>
  );
}
