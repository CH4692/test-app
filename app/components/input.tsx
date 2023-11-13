"use client";

import React from "react";

function Input(props: {
  placeholder: string;
  context: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div className=" relative mt-5 mb-5">
      <input
        type={props.context}
        id={props.context}
        name={props.context}
        className="block rounded-[92px] px-5 pb-2.5 pt-5 min-w-[300px] text-md text-accent bg-complementary dark:bg-gray-700 border-0 border-b-2 border-complementary3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        onChange={
          props.onChange ? (e) => props.onChange?.(e.target.value) : () => ""
        }
      />
      <label
        htmlFor={props.context}
        className="absolute text-md font-bold text-accent dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {props.placeholder}
      </label>
    </div>
  );
}

export default Input;
