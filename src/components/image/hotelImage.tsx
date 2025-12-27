"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type Props = {
  imageUrls: string[];
};

export default function HotelImage({ imageUrls }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      {/* １枚目の表示 */}
      {imageUrls[0] && (
        <div
          className="w-full aspect-video mb-3 cursor-pointer overflow-hidden group"
          onClick={() => {
            setSelectedImage(imageUrls[0]);
            setIsOpen(true);
          }}
        >
          {" "}
          <Image
            src={imageUrls[0]}
            alt="ホテルの写真"
            width={900}
            height={900}
            className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
      )}
      {/* 2枚目以降の表示 */}
      <Swiper
        spaceBetween={12}
        slidesPerView={3}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 0.8,
        }}
        navigation
        modules={[Mousewheel, Navigation]}
      >
        {imageUrls.map((url, index) => {
          if (index === 0) return null;

          return (
            <SwiperSlide key={index}>
              <div
                className="aspect-video cursor-pointer overflow-hidden group"
                onClick={() => {
                  setSelectedImage(url);
                  setIsOpen(true);
                }}
              >
                <Image
                  src={url}
                  alt="ホテルの写真"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {isOpen && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="bg-white relative" onClick={(e) => e.stopPropagation}>
            <Image
              src={selectedImage}
              alt="拡大写真"
              width={1000}
              height={1000}
              className="w-full h-full object-cover max-h-[90vh] max-w-[90vw]"
            />
            <button
              className="absolute text-xl text-lime-700 font-bold 
              w-25 h-25 flex items-center justify-center border-2
               border-lime-600 -top-10 -right-10 rounded-full
                bg-slate-100 hover:bg-slate-300 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
