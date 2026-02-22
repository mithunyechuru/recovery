'use client';

import { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isCaretakerMode, setIsCaretakerMode] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md border-b-2 border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">
                AI Recovery Companion
              </h1>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setIsCaretakerMode(false);
                  setShowLogin(true);
                }}
                className="px-6 py-3 text-lg font-medium text-blue-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-colors"
                aria-label="Login as patient"
              >
                Login
              </button>
              
              <button
                onClick={() => {
                  setIsCaretakerMode(false);
                  setShowSignup(true);
                }}
                className="px-6 py-3 text-lg font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-md transition-all hover:shadow-lg"
                aria-label="Sign up as patient"
              >
                Sign Up
              </button>

              <button
                onClick={() => {
                  setIsCaretakerMode(true);
                  setShowLogin(true);
                }}
                className="px-6 py-3 text-lg font-medium bg-green-600 text-white hover:bg-green-700 rounded-lg shadow-md transition-all hover:shadow-lg flex items-center gap-2"
                aria-label="Login as caretaker"
              >
                <span>👨‍⚕️</span>
                Caretaker
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      {showLogin && (
        <LoginModal
          isCaretakerMode={isCaretakerMode}
          onClose={() => setShowLogin(false)}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
}
