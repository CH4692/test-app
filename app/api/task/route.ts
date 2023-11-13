import prisma from "@/app/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const todos = await prisma.todo.findMany();
  return NextResponse.json(todos);
}
// Testing Testing
export async function POST(req: NextRequest, res: NextResponse) {
  console.log(JSON.stringify(req.body));

  console.log(JSON.stringify(req.body));
  return new NextResponse(req.body);
}

export async function PUT(req: NextRequest) {
  let res;
  try {
    const userId = req.nextUrl.searchParams.get("id")!;
    const isComplete = req.nextUrl.searchParams.get("complete") === "true";

    res = await prisma.todo.update({
      where: {
        id: userId,
      },
      data: {
        complete: isComplete,
      },
    });
  } catch (error) {
    console.log(error);
    return Response.json(
      { success: false, message: "Todo not found", error: error },
      { status: 404 }
    );
  }

  return Response.json(res, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  try {
    const userId = req.nextUrl.searchParams.get("id")!;
    await prisma.todo.delete({
      where: {
        id: userId,
      },
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Todo not found" },
      { status: 404 }
    );
  }

  return new Response(null, { status: 204 });
}
