"use client";

import { useState } from "react";
import Task from "./task";
import Input from "./input";

type Task = {
  id: string;
  title: string;
  complete: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export default function Todos(props: { data: Array<Task> }) {
  const [todos, setTodos] = useState(props.data);

  const onChange = async (value: string) => {
    setTodos(
      props.data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    );
    console.log(value);
  };
  return (
    <>
      <Input placeholder="search" context="search" onChange={onChange} />
      <div className=" lg:min-w-[1100px] lg:min-h-3/5 min-w-[300px] max-h-[450px] overflow-auto bg-complementary3 mt-12 rounded-[92px] p-10 flex flex-col gap-3">
        {todos.length === 0 ? (
          <h1 className="text-2xl font-bold text-accent">No Todos found</h1>
        ) : null}
        {todos.map((todo) => (
          <Task
            key={todo.id}
            title={todo.title}
            complete={todo.complete}
            id={todo.id}
          />
        ))}
      </div>
    </>
  );
}
