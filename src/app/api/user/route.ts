export const runtime = "nodejs";

import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { hash } from "argon2";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const hashed = await hash(body.password);
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: hashed,
      nickName: "", // 初回はニックネームを空にしておく
    },
  });

  return NextResponse.json(user, { status: 201 });
}
