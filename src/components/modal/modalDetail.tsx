import { sightseeingModalCardProps } from "@/types/sightseeingMealsModal";

export default function ModalDetail({
  place,
  access,
  closedDays,
  openingTime,
  entranceFee,
  others,
}: sightseeingModalCardProps) {
  return (
    <div className="mx-2 my-2 p-3 space-y-2 text-base font-bold  text-lime-700">
      <div className="flex items-center gap-2">
        <span className="font-semibold">場所 :</span>
        <div className="border border-lime-400 rounded-lg p-2 mt-1 bg-slate-50">
          {place}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-semibold">アクセス :</span>
        <div className="border border-lime-400 rounded-lg p-2 mt-1 bg-slate-50">
          {access}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-semibold">休業日 :</span>
        <div className="border border-lime-400 rounded-lg p-2 mt-1 bg-slate-50">
          {closedDays}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-semibold">営業時間 :</span>
        <div className="border border-lime-400 rounded-lg p-2 mt-1 bg-slate-50">
          {openingTime}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-semibold">入場料 :</span>
        <div className="border border-lime-400 rounded-lg p-2 mt-1 bg-slate-50">
          {entranceFee}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-semibold">その他 :</span>
        <div className="border border-lime-400 rounded-lg p-2 mt-1 bg-slate-50">
          {others}
        </div>
      </div>
    </div>
  );
}
