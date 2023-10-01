import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json(
    {
        "Message": "Hello From Hesham",
        "age": 18,
        "Country": "Egypt"
    })
}
