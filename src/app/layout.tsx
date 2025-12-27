import './globals.css'; // Tailwind CSS や自作CSSを読み込む

export const metadata = {
  title: '旅行計画投稿サイト',
  description: '旅行計画を共有するサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
