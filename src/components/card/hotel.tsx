import HotelInformation from "@/components/information/hotel";
import Itemformation from "@/components/information/space";

interface HotelCardProps {
  hotelName: string;
  adress: string;
  tell: string;
  nearestStation: string;
  checkInTime: string;
  checkOutTime: string;
  breakfastTime: string;
  dinnerTime: string;
  publicBathTime: string;
  others: string;
}

export default function HotelCard(props: HotelCardProps) {
  return (
    <div className=" bg-white w-full mx-6 my-6">
      <h1 className="flex items-center text-xl font-bold text-lime-700 mb-6">
        <Itemformation item="宿名：" />
        <HotelInformation information={props.hotelName} />
      </h1>

      <div className="space-y-7 text-lime-700 ">
        <div className="flex items-center">
          <Itemformation item="住所：" />
          <HotelInformation information={props.adress} />
        </div>
        <div className="flex items-center">
          <Itemformation item="電話：" />
          <HotelInformation information={props.tell} />
        </div>
        <div className="flex items-center">
          <Itemformation item="最寄り駅：" />
          <HotelInformation information={props.nearestStation} />
        </div>
        <div className="flex items-center">
          <Itemformation item="チェックイン：" />
          <HotelInformation information={props.checkInTime} />
        </div>
        <div className="flex items-center">
          <Itemformation item="チェックアウト：" />
          <HotelInformation information={props.checkOutTime} />
        </div>
        <div className="flex items-center">
          <Itemformation item="朝食の営業時間：" />
          <HotelInformation information={props.breakfastTime} />
        </div>
        <div className="flex items-center">
          <Itemformation item="夕食の営業時間：" />
          <HotelInformation information={props.dinnerTime} />
        </div>
        <div className="flex items-center">
          <Itemformation item="大浴場の営業時間：" />
          <HotelInformation information={props.publicBathTime} />
        </div>
        <div className="flex items-center">
          <Itemformation item="その他：" />
          <HotelInformation information={props.others} />
        </div>
      </div>
    </div>
  );
}
