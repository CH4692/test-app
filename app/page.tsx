import Link from "next/link";
import prisma from "./db";
import Todos from "./components/todos";

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchdate = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

export default async function Page() {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <h1 className="lg:text-7xl sm:text-6xl text-4xl font-bold text-complementary3">
        Todo App
      </h1>
      <Todos data={todos} />
      <Link href="/new">
        <div className="flex justify-center items-center lg:w-24 lg:h-24 w-20 h-20 rounded-full text-4xl lg:text-7xl text-accent bg-complementary2 absolute sm:right-12 sm:top-12 right-6 top-3 transition-all hover:scale-110 ease-linear cursor-pointer">
          +
        </div>
      </Link>
    </>
  );
}
