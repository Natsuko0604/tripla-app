"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import { sightseeingModalCardProps } from "@/types/sightseeingMealsModal";
import ModalDetail from "@/components/modal/modalDetail";

import "swiper/css";
import "swiper/css/navigation";

type Props = {
  id: string;
};

const createDetail: sightseeingModalCardProps = {
  id: "",
  imageUrls: [],
  place: "",
  access: "",
  closedDays: "",
  openingTime: "",
  entranceFee: "",
  others: "",
};

export default function Modal({ id }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  const [Detail, setDetail] = useState<sightseeingModalCardProps>(createDetail);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/sightseeingMeals/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetail(data.modalResult);
      });
  }, [id]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white relative w-[700px] h-[900px] max-w-[90vw] max-h-[90vh] rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <Swiper
          slidesPerView={1}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 0.8,
          }}
          navigation
          modules={[Mousewheel, Navigation]}
        >
          {Detail.imageUrls.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <Image
                src={imageUrl}
                alt="拡大写真"
                width={1000}
                height={1000}
                className="w-full h-1/2 aspect-video overflow-hidden rounded-t-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <ModalDetail {...Detail} />

        <button
          className="absolute text-xl text-lime-700 font-bold 
          w-25 h-25 flex items-center justify-center border-2
          border-lime-600 -top-10 -right-10 rounded-full
          bg-slate-100 hover:bg-slate-300 cursor-pointer z-10"
          onClick={() => setIsOpen(false)}
        >
          閉じる
        </button>
      </div>
    </div>
  );
}
