"use client";
import DetailCard from "@/components/card/detailCard";
import { useEffect, useState } from "react";
import { DetailCardData } from "@/types/detail";

export default function DetailPage() {
  const [details, setDetails] = useState<DetailCardData[]>([]);

  useEffect(() => {
    fetch("/api/detail")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data.result);
      });
  }, []);

  return (
    <div>
      <header className="bg-lime-700 w-full h-20 flex items-center justify-start">
        <h1 className="inline-block bg-white text-lime-700 font-bold text-3xl px-2 py-2 rounded-lg mx-4">
          旅行計画投稿サイト
        </h1>
      </header>
      <div className="text-lime-700 text-2xl font-bold my-6 mx-10 flex justify-between">
        <h1>旅の記録</h1>
        <h2>みかん</h2>
      </div>
      <div>
        {details.map((detail) => (
          <DetailCard
            key={detail.id}
            day={detail.day}
            imageUrl={detail.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
