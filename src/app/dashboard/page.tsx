import { getServerSession } from 'next-auth';

export default async function DashboardPage() {
  const session = await getServerSession();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <p>Welcome, {session?.user?.name}!</p>
    </div>
  );
}
