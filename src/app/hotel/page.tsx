import HotelCard from "@/components/card/hotel";
import HotelImage from "@/components/image/hotelImage";

export default function HotelPage() {
  return (
    <div>
      <header className="bg-lime-700 w-full h-20 flex items-center justify-start">
        <h1 className="inline-block bg-white text-lime-700 font-bold text-3xl px-2 py-2 rounded-lg mx-4">
          旅行計画投稿サイト
        </h1>
      </header>
      <div className="flex mx-8 my-8">
        <div className="w-3/5 max-w-[800px] ">
          <HotelImage
            imageUrls={[
              "https://fastly.picsum.photos/id/142/4272/2848.jpg?hmac=z8IS_an6FQ8ijJOBd-wSVg1JTZbeIDG4TbjHwLQbs0I",
              "https://fastly.picsum.photos/id/146/5000/3333.jpg?hmac=xdlFnzoavokA3U-bzo35Vk4jTBKx8C9fqH5IuCPXj2U",
              "https://fastly.picsum.photos/id/147/2448/2448.jpg?hmac=Xk6y7EeyG6VQTac1N9IhDAwLVNVeCn_KBN4nO5SRxPw",
              "https://fastly.picsum.photos/id/155/3264/2176.jpg?hmac=Zgf_oGMJeg18XoKBFmJgp2DgHMRYuorXlDx5wLII9nU",
              "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
              "https://fastly.picsum.photos/id/42/3456/2304.jpg?hmac=dhQvd1Qp19zg26MEwYMnfz34eLnGv8meGk_lFNAJR3g",
            ]}
          />
        </div>
        <div className="w-2/5">
          <HotelCard
            hotelName="みかんホテル"
            adress="みかん県みかん町"
            tell="000-0000-0000"
            nearestStation="みかん駅より徒歩５分"
            checkInTime="16:00"
            checkOutTime="11:00"
            breakfastTime="6:00〜9:00"
            dinnerTime="18:00〜21:00"
            publicBathTime="6:00〜10:00/15:00〜24:00"
            others="ペットも一緒に宿泊可能です。"
          />
        </div>
      </div>
    </div>
  );
}
