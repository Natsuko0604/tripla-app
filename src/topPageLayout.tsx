"use client";
import Link from "next/link";

export default function TopPageLayout() {
  return (
    <header className="bg-lime-700 w-full h-20 flex items-center justify-start">
      <h1 className="inline-block bg-white text-lime-700 font-bold text-3xl px-2 py-2 rounded-lg mx-4">
        旅行計画投稿サイト
      </h1>
      <div className="flex items-center ml-auto">
        <input
          type="search"
          placeholder="投稿を検索"
          className="bg-white text-stone-600  text-l px-2 py-2 rounded-lg mx-4"
        />
        <Link
          href="/login"
          className="bg-white text-lime-700 font-bold text-l px-2 py-2 rounded-lg mx-4 cursor-pointer hover:bg-stone-200"
        >
          ログイン
        </Link>
        <button className="bg-black text-white font-bold text-l px-2 py-2 rounded-lg mx-4 cursor-pointer hover:bg-stone-700">
          新規登録
        </button>
      </div>
    </header>
  );
}
