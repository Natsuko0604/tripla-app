import TopPageLayout from "@/topPageLayout";
import TopPageCard from "@/components/card/card";
import Link from "next/link";

export default function TopPage() {
  return (
    <div>
      <TopPageLayout />
      <Link href="/detail">
        <TopPageCard
          title="旅の記録"
          imageUrl="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4"
          username="みかん"
          updatedAt="2025年12月9日"
          bubble="1"
        />
      </Link>
    </div>
  );
}
