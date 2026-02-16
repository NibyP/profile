"use client";

import { portfolioData } from "../data/portfolio-data";
import { useState, useEffect } from "react";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const { hero } = portfolioData;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-24 sm:pt-20 sm:pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <div className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Left Side - Content */}
        <div className="text-left">
          {/* Animated profile circle */}
          <div className="mb-5 sm:mb-6 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-spin-slow opacity-75"></div>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-white shadow-2xl">
                {hero.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            {/* Floating particles */}
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-float"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${10 + (i % 2) * 80}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              ></div>
            ))}
          </div>

          {/* Main heading with gradient */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 leading-tight">
            <span className="block mb-1 text-2xl sm:text-3xl md:text-4xl">Hi, I'm</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              {hero.name}
            </span>
          </h1>

          {/* Title with typing effect style */}
          <div className="mb-4 sm:mb-5">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-300">
              {hero.title}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-xl leading-relaxed">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-12 sm:mb-14">
            <button
              onClick={() => scrollToSection(hero.buttons.primary.target)}
              className="group relative px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-lg font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {hero.buttons.primary.text}
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => scrollToSection(hero.buttons.secondary.target)}
              className="group px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:border-blue-500 dark:hover:border-purple-500 hover:text-blue-600 dark:hover:text-purple-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 transform hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-1.5">
                {hero.buttons.secondary.text}
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Right Side - Animated Shapes */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] hidden lg:flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Large rotating circle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
              <div className="absolute inset-0 border-4 border-blue-400/30 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-4 border-4 border-purple-400/30 rounded-full animate-spin-reverse"></div>
              <div className="absolute inset-8 border-4 border-pink-400/30 rounded-full animate-spin-slow"></div>
            </div>

            {/* Floating circles */}
            {[
              { size: 20, colors: { from: "#60a5fa", to: "#2563eb" }, delay: 0, x: "10%", y: "20%" },
              { size: 16, colors: { from: "#a78bfa", to: "#7c3aed" }, delay: 0.5, x: "80%", y: "30%" },
              { size: 24, colors: { from: "#f472b6", to: "#db2777" }, delay: 1, x: "15%", y: "70%" },
              { size: 18, colors: { from: "#34d399", to: "#10b981" }, delay: 1.5, x: "85%", y: "75%" },
              { size: 14, colors: { from: "#818cf8", to: "#6366f1" }, delay: 2, x: "50%", y: "15%" },
              { size: 22, colors: { from: "#fb7185", to: "#f43f5e" }, delay: 2.5, x: "70%", y: "80%" },
            ].map((circle, i) => (
              <div
                key={i}
                className="absolute rounded-full shadow-lg animate-float opacity-80"
                style={{
                  width: `${circle.size}px`,
                  height: `${circle.size}px`,
                  left: circle.x,
                  top: circle.y,
                  background: `linear-gradient(to bottom right, ${circle.colors.from}, ${circle.colors.to})`,
                  animationDelay: `${circle.delay}s`,
                  animationDuration: `${3 + i * 0.5}s`,
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full blur-xl opacity-50 animate-pulse"
                  style={{ background: circle.colors.from }}
                ></div>
              </div>
            ))}

            {/* 3D Cubes */}
            {[
              { size: 40, colors: { front: "#3b82f6", right: "#2563eb", top: "#60a5fa" }, delay: 0, x: "25%", y: "40%", rotate: 45 },
              { size: 35, colors: { front: "#a855f7", right: "#9333ea", top: "#c084fc" }, delay: 0.8, x: "65%", y: "50%", rotate: -30 },
              { size: 30, colors: { front: "#ec4899", right: "#db2777", top: "#f472b6" }, delay: 1.2, x: "45%", y: "65%", rotate: 60 },
            ].map((cube, i) => (
              <div
                key={i}
                className="absolute animate-rotate-3d"
                style={{
                  left: cube.x,
                  top: cube.y,
                  width: `${cube.size}px`,
                  height: `${cube.size}px`,
                  animationDelay: `${cube.delay}s`,
                  animationDuration: `${8 + i * 2}s`,
                  transform: `rotate(${cube.rotate}deg)`,
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
                  <div
                    className="absolute inset-0 opacity-90 shadow-2xl"
                    style={{
                      background: `linear-gradient(to bottom right, ${cube.colors.front}, ${cube.colors.right})`,
                      transform: "rotateY(0deg) translateZ(20px)",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 opacity-90 shadow-2xl"
                    style={{
                      background: `linear-gradient(to bottom right, ${cube.colors.right}, ${cube.colors.front})`,
                      transform: "rotateY(90deg) translateZ(20px)",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 opacity-90 shadow-2xl"
                    style={{
                      background: `linear-gradient(to bottom right, ${cube.colors.top}, ${cube.colors.front})`,
                      transform: "rotateX(90deg) translateZ(20px)",
                    }}
                  ></div>
                </div>
              </div>
            ))}

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned outside the main container */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:block mb-1">
            Scroll
          </span>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-lg opacity-60 animate-pulse"></div>
            <div className="relative w-10 h-14 border-2 border-blue-400/50 dark:border-purple-400/50 rounded-full flex items-start justify-center pt-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-lg">
              <svg
                className="w-4 h-4 text-blue-600 dark:text-purple-400 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-30px) translateX(15px);
            opacity: 1;
          }
        }
        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }
        @keyframes rotate-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
        .animate-rotate-3d {
          animation: rotate-3d 10s linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
