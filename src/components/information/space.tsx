"use client";

type SpaceProps = {
  item: string;
};

export default function Itemformation({ item }: SpaceProps) {
  return <div className="w-40 shrink-0 text-right">{item}</div>;
}
