import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Menu, X } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Stethoscope className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-blue-600">MediClue</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md font-medium transition-colors"
            >
              Home
            </Link>

            <SignedIn>
              <Link
                to="/symptom-checker"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md font-medium transition-colors"
              >
                Symptom Checker
              </Link>
              <Link
                to="/hospitals"
                className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md font-medium transition-colors"
              >
                Find Hospitals
              </Link>
              {/* User Profile Button (Clerk) */}
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Hi, {user?.firstName || 'User'}</span>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md font-medium transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignInButton mode="modal">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                  Get Started
                </button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <SignedIn>
              <Link
                to="/symptom-checker"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Symptom Checker
              </Link>
              <Link
                to="/hospitals"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Hospitals
              </Link>
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100">
                  Sign In
                </button>
              </SignInButton>
              <SignInButton mode="modal">
                <button className="block w-full text-left px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
                  Get Started
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
