import { NextResponse } from "next/server";

export async function Get(request: Request) {
  const { searchParams } = new URL(request.url);
  // const name = searchParams.get("name");
  // const age = searchParams.get("age");
  const obj = Object.fromEntries(searchParams.entries())
  return NextResponse.json(obj);
}

