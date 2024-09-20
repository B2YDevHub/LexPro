import { Hero } from '@/components/hero';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Hero/>
      {children}
    </div>
  );
}
