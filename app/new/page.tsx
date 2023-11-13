import { redirect } from "next/navigation";
import React from "react";
import prisma from "../db";
import Link from "next/link";

const createTodo = async (data: FormData) => {
  "use server";

  const todo = data.get("todo")?.valueOf();

  if (typeof todo !== "string" || todo.length === 0) {
    return "";
  }
  await prisma.todo.create({ data: { title: todo, complete: false } });

  redirect("/");
};

export default function Page() {
  return (
    <form
      action={createTodo}
      className="lg:w-[800px] min-w-[350px] min-h-1/3 flex justify-center items-center flex-col rounded-[92px] bg-complementary2 py-11 "
    >
      <header>
        <p className="text-[36px] text-accent2 font-bold">New Todo</p>
      </header>
      <div className=" relative mt-5 mb-5">
        <input
          type="text"
          id="todo"
          name="todo"
          className="block rounded-[92px] px-5 pb-2.5 pt-5 min-w-[300px] text-md text-accent bg-complementary dark:bg-gray-700 border-0 border-b-2 border-complementary3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="todo"
          className="absolute text-md font-bold text-accent dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
        >
          Your new todo
        </label>
      </div>
      <div className="flex justify-center items-center  max-w-[300px]">
        <button
          className=" bg-complementary text-complementary3 m-2 rounded-full w-[200px] h-[35px] transition-all hover:scale-110 ease-linear"
          type="button"
        >
          <Link href={"/"}>Cancel</Link>
        </button>
        <button
          className=" bg-accent2 text-complementary3 rounded-full w-[200px] h-[35px] transition-all hover:scale-110 ease-linear"
          type="submit"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}
