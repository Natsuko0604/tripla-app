import ScheduleCard from "@/components/card/schedule";
import Link from "next/link";
import BaseButton from "@/components/button/base";

export default function SchedulePage() {
  return (
    <div>
      <header className="bg-lime-700 w-full h-20 flex items-center justify-start">
        <h1 className="inline-block bg-white text-lime-700 font-bold text-3xl px-2 py-2 rounded-lg mx-4">
          旅行計画投稿サイト
        </h1>
      </header>
      <div className="grid grid-cols-2 bg-slate-50">
        <ScheduleCard scheduleAt={new Date()} todo="就寝" Afternoon={false} />
        <ScheduleCard scheduleAt={new Date()} todo="観光" Afternoon={true} />
      </div>
      <div className="grid grid-cols-3 gap-6 px-6">
        <BaseButton title="観光場所" transitionPage="/sightseeing" />
        <BaseButton title="食事" transitionPage="/meal" />
        <BaseButton title="宿泊場所" transitionPage="/hotel" />
      </div>
    </div>
  );
}
