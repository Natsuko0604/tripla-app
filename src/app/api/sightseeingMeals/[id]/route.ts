import { NextRequest, NextResponse } from "next/server";
import { sightseeingModalCardProps } from "@/types/sightseeingMealsModal";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: selectedId } = await params;
  const sightseeingMealsModal: sightseeingModalCardProps = {
    id: selectedId,
    imageUrls: [
      "https://fastly.picsum.photos/id/27/3264/1836.jpg?hmac=p3BVIgKKQpHhfGRRCbsi2MCAzw8mWBCayBsKxxtWO8g",
      "https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU",
    ],
    place: "みかん県ゆず町０−０−０",
    access: "ゆず駅から徒歩10分",
    closedDays: "毎週水曜日",
    openingTime: "10:00〜20:00",
    entranceFee: "1000円",
    others: "入場券は前売り券だと８００円",
  };

  return NextResponse.json({ modalResult: sightseeingMealsModal });
}
