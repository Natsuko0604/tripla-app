"use client";
import { useRouter } from "next/navigation";

type BaseButtonProps = {
  title: string;
  transitionPage: string;
};

export default function BaseButton({ title, transitionPage }: BaseButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(transitionPage)}
      className="
        w-full text-yellow-500 text-6xl py-3
        bg-neutral-600 shadow-2xl shadow-black/40 active:shadow-sm active:translate-y-0.5 transition-all
        hover:bg-neutral-500
        rounded-lg cursor-pointer
      "
    >
      {title}
    </button>
  );
}
