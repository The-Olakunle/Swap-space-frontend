import HomeHeader from '@/app/components/headers/HomeHeader';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <HomeHeader />
      {children}
    </>
  );
} 