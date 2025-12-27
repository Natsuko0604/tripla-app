"use client";

type HotelInformationProps = {
  information: string;
};

export default function HotelInformation({
  information,
}: HotelInformationProps) {
  return (
    <div className="w-full border border-lime-600 rounded-md px-3 py-1 ">
      {information}
    </div>
  );
}
