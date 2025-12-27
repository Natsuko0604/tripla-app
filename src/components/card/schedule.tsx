interface ScheduleCardProps {
  scheduleAt: Date;
  todo: string;
  Afternoon: boolean;
}

export default function ScheduleCard({
  scheduleAt,
  todo,
  Afternoon,
}: ScheduleCardProps) {
  const left = [];
  const right = [];

  for (let hour = 0; hour < 12; hour++) {
    const date = new Date(scheduleAt);
    if (Afternoon) {
      date.setHours(hour + 12, 0, 0, 0);
    } else {
      date.setHours(hour, 0, 0, 0);
    }

    const cards = (
      <div key={hour} className="mx-5 my-5 flex items-center gap-3">
        <div className="text-lime-700 font-medium w-12 text-right">
          {date.getHours().toString().padStart(2, "0")}:00
        </div>
        <div className="border border-lime-600 rounded-md px-3 py-1 text-lime-700 bg-white flex-1">
          {todo}
        </div>
      </div>
    );
    if (hour < 6) {
      left.push(cards); // 0〜6時
    } else {
      right.push(cards); // 7〜12時
    }
  }

  return (
    <div className="w-[47vw] h-[65vh] mx-auto items-center justify-between  my-8 border border-lime-700 rounded-lg relative">
      <header className="bg-lime-700 text-white font-bold p-2 rounded-t-md text-center text-[20px]">
        {Afternoon ? "午後" : "午前"}
      </header>
      <div className="absolute top-14 bottom-2 left-1/2 border-l  border-lime-600"></div>
      <div className="grid grid-cols-2 gap-2 p-2">
        <div className="flex flex-col gap-2">{left}</div>
        <div className="flex flex-col gap-2 ">{right}</div>
      </div>
    </div>
  );
}
