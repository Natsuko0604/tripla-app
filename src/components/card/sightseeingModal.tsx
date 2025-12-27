"use client";

interface sightseeingModalCardProps {
  imageUrl: string;
  place: string;
  access: string;
  closedDays: string;
  openingTime: string;
  entranceFee: string;
  others: string;
}

export default function SightseeingModalCard(props: sightseeingModalCardProps) {
  return (
    <div className="grid grid-cols-2 gap-5 mx-5 my-10 rounded-lg">
      <div className="rounded-t-md">
        <img src={props.imageUrl} />
      </div>
    </div>
  );
}
