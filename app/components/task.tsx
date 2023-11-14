"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import Checkbox from "./checkbox";
import { useState } from "react";
import axios from "axios";
import { redirect } from "next/navigation";

export default function Task(
  props: Readonly<{
    title: string;
    complete: boolean;
    id: string;
  }>
) {
  const [complete, setComplete] = useState(props.complete);
  const [count, setCount] = useState(0);

  const clickHandler = async () => {
    await axios.put(`api/task?id=${props.id}&complete=${!complete}`);

    setComplete(!complete);
    setCount(count + 1);
  };

  const deleteHandler = async () => {
    try {
      const response = await fetch(`api/task?id=${props.id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Todo item deleted successfully");
        redirect("/");
      } else {
        console.error("Failed to delete todo item");
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error deleting todo item:", error);
      // Handle network error, e.g., show a generic error message
    }
  };

  return (
    <div className=" flex justify-between items-center align-middle cursor-pointer">
      <div
        onClick={clickHandler}
        className=" transition-all hover:scale-110 ease-in"
      >
        <Checkbox complete={complete} />
      </div>
      <div
        className={`lg:w-3/4 lg:max-w-full w-full max-w-[150px] h-16 rounded-full bg-complementary mx-2 font-bold lg:text-4xl p-5 flex items-center gap-7 first-letter: ${
          complete && " line-through text-complementary2"
        }`}
      >
        <p className="lg:overflow-none lg:text:clip overflow-hidden whitespace-nowrap text-ellipsis">
          {props.title}
        </p>
      </div>
      <div
        className="transition-all hover:scale-110 ease-linear"
        onClick={deleteHandler}
      >
        <FontAwesomeIcon className="h-12 w-12 text-accent" icon={faTrash} />
      </div>
    </div>
  );
}
