'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      router.push('/');
      return;
    }

    setUser(JSON.parse(userData));
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-md border-b-2 border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-blue-900">
              {user?.role === 'caretaker' ? '👨‍⚕️ Caretaker Dashboard' : '🏥 My Recovery Dashboard'}
            </h1>
            <button
              onClick={handleLogout}
              className="px-6 py-3 text-lg font-medium bg-red-600 text-white hover:bg-red-700 rounded-lg shadow-md transition-all"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome back, {user?.name}! 👋
          </h2>
          <p className="text-xl text-gray-600">
            {user?.role === 'caretaker' 
              ? 'Manage your patients and track their recovery progress.'
              : 'Continue your recovery journey with personalized care and guidance.'}
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Recovery Progress
            </h3>
            <p className="text-gray-600">
              Track your healing journey and milestones
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Exercise Plan
            </h3>
            <p className="text-gray-600">
              View your personalized exercise routine
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🔔</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Reminders
            </h3>
            <p className="text-gray-600">
              Medication and exercise reminders
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Photo Timeline
            </h3>
            <p className="text-gray-600">
              Document your recovery with photos
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              AI Assistant
            </h3>
            <p className="text-gray-600">
              Chat with your recovery companion
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Medical Records
            </h3>
            <p className="text-gray-600">
              Access your injury details and history
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
