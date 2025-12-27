"use client";

import { useEffect, useState } from "react";
import { SightseeingMeal } from "@/types/sightseeingMeal";
import Modal from "@/components/modal/modal";

interface sightseeingMealCardProps {
  type: string;
}

const convertKeyName = (type: string): string => {
  if (type == "meal") {
    return "店名";
  }
  return "観光地名";
};

export default function SightseeingMealCard(props: sightseeingMealCardProps) {
  const [sightseeingMeals, setSightseeingMeals] = useState<SightseeingMeal[]>(
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("/api/sightseeingMeals")
      .then((res) => res.json())
      .then((data) => {
        setSightseeingMeals(
          data.result.filter(
            (item: SightseeingMeal) => item.type === props.type
          )
        );
      });
  }, [props.type]);
  return (
    <div className="grid grid-cols-2 gap-5 mx-5">
      {sightseeingMeals.map((sightseeingMeal) => (
        <div
          key={sightseeingMeal.id}
          className="my-10 bg-slate-50 text-lime-700 border border-lime-600 rounded-lg cursor-pointer  hover:bg-yellow-50"
          onClick={() => setIsOpen(true)}
        >
          <div className="rounded-t-md overflow-hidden aspect-video">
            <img src={sightseeingMeal.imageUrl} />
          </div>
          <div className="font-bold px-3 py-3">
            {convertKeyName(props.type) + " :  " + sightseeingMeal.name}
          </div>
        </div>
      ))}
      {isOpen && <Modal id="1" />}
    </div>
  );
}
