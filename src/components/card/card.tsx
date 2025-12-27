interface PostCardProps {
  title: string;
  imageUrl: string;
  username: string;
  updatedAt: string;
  bubble: string;
}

export default function TopPageCard(props: PostCardProps) {
  return (
    // カード作成
    <div className="w-1/3 text-lime-700 border-2 border-lime-600 bg-slate-50 mx-5 my-15 rounded-lg cursor-pointer hover:bg-yellow-50 relative">
      {/* 丸い吹き出し */}
      <div className="absolute text-xl text-lime-700 font-bold w-25 h-25 flex items-center justify-center border-2 border-lime-600 -top-7 -right-7 rounded-full bg-orange-300">
        {props.bubble + "人旅"}
      </div>
      {/* 写真 */}
      <div className="w-full rounded-t-md overflow-hidden">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="w-full h-full object-cover block"
        />
      </div>
      {/* タイトル以下 */}
      <div className="m-2">
        <h1 className="text-xl font-bold">{props.title}</h1>
        <div className="text-lg flex justify-between">
          <span>{"ユーザー：" + props.username}</span>
          <time>{"更新日：" + props.updatedAt}</time>
        </div>
      </div>
    </div>
  );
}
