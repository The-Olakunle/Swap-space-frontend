import ConditionalAuthHeader from '@/app/components/headers/ConditionalAuthHeader';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <ConditionalAuthHeader />
      <main className="max-w-[400px] mx-auto px-4 sm:px-0 py-12">
        {children}
      </main>
    </div>
  );
} 