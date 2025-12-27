import { NextResponse } from "next/server";
import { SightseeingMeal } from "@/types/sightseeingMeal";

export async function GET() {
  const sightseeingMeals: SightseeingMeal[] = [
    {
      id: 1,
      name: "みかん",
      imageUrl:
        "https://fastly.picsum.photos/id/63/5000/2813.jpg?hmac=HvaeSK6WT-G9bYF_CyB2m1ARQirL8UMnygdU9W6PDvM",
      type: "meal",
    },
    {
      id: 2,
      name: "ゆず",
      imageUrl:
        "https://fastly.picsum.photos/id/75/1999/2998.jpg?hmac=0agRZd8c5CRiFvADOWJqfTv6lqYBty3Kw-9LEtLp_98",
      type: "meal",
    },
    {
      id: 3,
      name: "ゆず",
      imageUrl:
        "https://fastly.picsum.photos/id/75/1999/2998.jpg?hmac=0agRZd8c5CRiFvADOWJqfTv6lqYBty3Kw-9LEtLp_98",
      type: "sightseeing",
    },
  ];

  return NextResponse.json({ result: sightseeingMeals });
}
