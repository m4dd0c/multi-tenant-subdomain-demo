import { mockData } from '@/lib/mockData';
import { notFound } from 'next/navigation';

// Next.js 15 requires params to be a Promise
export default async function SubdomainPage({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}) {
  const resolvedParams = await params;
  const { subdomain } = resolvedParams;

  // Look up the user in our mock database
  const user = mockData[subdomain];

  // If the user doesn't exist, return a 404
  if (!user) {
    notFound();
  }

  // Check if the trial has expired
  // eslint-disable-next-line react-hooks/purity
  const isExpired = Date.now() > user.expiresAt;

  if (isExpired) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 text-red-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Trial Expired</h1>
          <p>Your 7-day trial for this portfolio has ended.</p>
        </div>
      </div>
    );
  }

  // If valid, render the profile page
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-8">
      <div className="max-w-md w-full text-center border rounded-xl p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
        <p className="text-gray-600">{user.bio}</p>
      </div>
    </div>
  );
}
