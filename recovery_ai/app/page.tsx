'use client';

import Navbar from './components/Navbar';

export default function Home() {
  const handleStartRecovery = () => {
    console.log('Navigate to recovery assessment');
  };

  const handleUploadPhoto = () => {
    console.log('Navigate to photo upload');
  };

  const handleEnterDetails = () => {
    console.log('Navigate to injury details form');
  };

  const handleViewProgress = () => {
    console.log('Navigate to progress view');
  };

  const handleCaretakerDashboard = () => {
    console.log('Navigate to caretaker dashboard');
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mx-auto max-w-4xl text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-3">
          AI Recovery Companion
        </h1>
        <p className="text-xl sm:text-2xl text-blue-700 font-medium">
          Helping you recover, step by step.
        </p>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-2xl space-y-8">
        {/* Welcome Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 border-2 border-blue-100">
          <div className="text-center space-y-4">
            <p className="text-3xl sm:text-4xl mb-4">👋</p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              Hi, I'm here to help you during your recovery.
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
              Tell me about your injury and I'll guide you with care, exercises, and reminders.
            </p>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleStartRecovery}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-2xl sm:text-3xl font-semibold py-6 sm:py-8 px-8 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl active:scale-98 flex items-center justify-center gap-3"
            aria-label="Start your recovery journey"
          >
            <span className="text-3xl">✅</span>
            Start My Recovery
          </button>

          <button
            onClick={handleUploadPhoto}
            className="w-full bg-green-600 hover:bg-green-700 text-white text-2xl sm:text-3xl font-semibold py-6 sm:py-8 px-8 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl active:scale-98 flex items-center justify-center gap-3"
            aria-label="Upload a photo of your injury"
          >
            <span className="text-3xl">📷</span>
            Upload Injury Photo
          </button>

          <button
            onClick={handleEnterDetails}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white text-2xl sm:text-3xl font-semibold py-6 sm:py-8 px-8 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl active:scale-98 flex items-center justify-center gap-3"
            aria-label="Enter details about your injury"
          >
            <span className="text-3xl">📄</span>
            Enter Injury Details
          </button>
        </div>

        {/* Secondary Actions */}
        <div className="pt-6 space-y-3">
          <button
            onClick={handleViewProgress}
            className="w-full bg-white hover:bg-gray-50 text-gray-800 text-lg sm:text-xl font-medium py-4 px-6 rounded-xl border-2 border-gray-300 shadow-sm transition-all duration-200 hover:shadow-md active:scale-98"
            aria-label="View your recovery progress"
          >
            View My Progress
          </button>

          <button
            onClick={handleCaretakerDashboard}
            className="w-full bg-white hover:bg-gray-50 text-gray-800 text-lg sm:text-xl font-medium py-4 px-6 rounded-xl border-2 border-gray-300 shadow-sm transition-all duration-200 hover:shadow-md active:scale-98"
            aria-label="Access caretaker dashboard"
          >
            Caretaker Dashboard
          </button>
        </div>
      </main>

        {/* Footer Spacing */}
        <div className="h-12"></div>
      </div>
    </>
  );
}
