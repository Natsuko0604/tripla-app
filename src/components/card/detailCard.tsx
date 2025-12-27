"use client";
import { useRouter } from "next/navigation";

interface DetailCardProps {
  day: string;
  imageUrl: string;
}

export default function DetailCard(props: DetailCardProps) {
  const router = useRouter();
  return (
    <div
      className="w-1/3 text-lime-700 border-2 border-lime-600 bg-slate-50 mx-5 my-15 rounded-lg cursor-pointer hover:bg-yellow-50 relative"
      onClick={() => router.push("/schedule")}
    >
      <div className="text-3xl my-6 font-bold flex items-center justify-center">
        {props.day + "日目"}
      </div>
      <div className="w-full rounded-b-md overflow-hidden">
        <img
          src={props.imageUrl}
          className="w-full h-full object-cover block"
        />
      </div>
    </div>
  );
}
