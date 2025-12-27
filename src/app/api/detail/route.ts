import { NextResponse } from "next/server";
import { DetailCardData } from "@/types/detail";

export async function GET() {
  const detailist: DetailCardData[] = [
    {
      id: 1,
      day: "1",
      imageUrl:
        "https://fastly.picsum.photos/id/30/1280/901.jpg?hmac=A_hpFyEavMBB7Dsmmp53kPXKmatwM05MUDatlWSgATE",
    },
  ];
  return NextResponse.json({ result: detailist });
}
