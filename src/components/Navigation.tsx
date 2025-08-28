"use client";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-wanted font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              RipePixel
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-white hover:text-purple-400 font-wanted transition-colors font-medium"
              >
                홈
              </a>
              <a
                href="#about"
                className="text-white hover:text-purple-400 font-wanted transition-colors font-medium"
              >
                소개
              </a>
              <a
                href="#games"
                className="text-white hover:text-purple-400 font-wanted transition-colors font-medium"
              >
                게임
              </a>
              <a
                href="#team"
                className="text-white hover:text-purple-400 font-wanted transition-colors font-medium"
              >
                팀
              </a>
              <a
                href="#contact"
                className="text-white hover:text-purple-400 font-wanted transition-colors font-medium"
              >
                연락처
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-purple-400 focus:outline-none focus:text-purple-400"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            <a
              href="#home"
              className="block text-white hover:text-purple-400 transition-colors font-medium px-3 py-2"
            >
              홈
            </a>
            <a
              href="#about"
              className="block text-white hover:text-purple-400 transition-colors font-medium px-3 py-2"
            >
              소개
            </a>
            <a
              href="#games"
              className="block text-white hover:text-purple-400 transition-colors font-medium px-3 py-2"
            >
              게임
            </a>
            <a
              href="#team"
              className="block text-white hover:text-purple-400 transition-colors font-medium px-3 py-2"
            >
              팀
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-purple-400 transition-colors font-medium px-3 py-2"
            >
              연락처
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
