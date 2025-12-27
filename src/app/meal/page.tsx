"use client";

import SightseeingMealCard from "@/components/card/sightseeingMeal";

export default function MealPage() {
  return (
    <div>
      <header className="bg-lime-700 w-full h-20 flex items-center justify-start">
        <h1 className="inline-block bg-white text-lime-700 font-bold text-3xl px-2 py-2 rounded-lg mx-4">
          旅行計画投稿サイト
        </h1>
      </header>
      <SightseeingMealCard type="meal" />
    </div>
  );
}
