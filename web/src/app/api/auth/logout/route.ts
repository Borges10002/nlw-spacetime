import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redirecURL = new URL("/", request.url);

  return NextResponse.redirect(redirecURL, {
    headers: {
      "Set-Cookie": `token=; Path=/; max-age=0;`,
    },
  });
}
