"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "../components/footer";

export default function About() {
  const router = useRouter();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    localStorage.setItem('termsAccepted', 'true');
    setTimeout(() => {
      router.push("/main");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="h-screen w-screen bg-gray-900 relative overflow-hidden flex flex-col">
      {/* 🔥 RED SOLID LOGOUT BUTTON - Top Right */}
      <button 
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
        className="fixed top-6 right-6 z-50 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/70 border border-red-400/50 transition-all duration-300 text-sm sm:text-base hover:scale-105 active:scale-95"
      >
        Logout
      </button>
      
      {/* Glassy Responsive Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-4xl bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 z-50 h-20 flex items-center justify-center px-6 sm:px-8 shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#ff0000] via-[#708ed8] to-[#ffffff] bg-clip-text text-transparent select-none tracking-wide">
          GroupSence
        </h1>
      </nav>

      {/* Background video + overlay */}
      <video
        src="/d.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* MAIN CONTENT - FLEX LAYOUT */}
      <main className="relative z-50 flex-1 flex flex-col items-center pt-24 px-4 overflow-y-auto">
        
        {/* ✅ FULL WIDTH TEXT BOX */}
        <div className="w-full max-w-4xl bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl px-6 py-8 mb-6 flex flex-col">
          
          {/* Title - SMALLER */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#ff0000] via-[#708ed8] to-[#FFFFFF] bg-clip-text text-transparent drop-shadow-2xl text-center leading-tight mb-6">
            Know Your Blood Group — Quickly & Easily
          </h1>

          {/* ✅ ALL TEXT - SMALLER SIZE */}
          <div className="w-full bg-white/10 backdrop-blur-xl rounded-xl border border-white/30 p-6 sm:p-8 shadow-xl space-y-4 text-white text-xs sm:text-sm leading-relaxed flex-1 max-h-[60vh] overflow-y-auto">
            <p>
              Your fingerprint is more than just a unique identity marker. Research suggests that certain fingerprint patterns—such as <strong>loops, whorls, ridge density, and minutiae points</strong>—may show correlations with genetic traits, including blood group.
            </p>
            
            <p>
              Since both fingerprints and blood types are influenced by inherited biological factors, advanced <strong>image processing and AI models</strong> can analyze these microscopic ridge features to estimate a likely blood group.
            </p>
            
            <p>
              Our platform uses this concept to provide a smart, <strong>non-invasive</strong> way to predict your blood type. Simply upload a clear fingerprint image, and our system studies the pattern details to generate results within seconds.
            </p>
            
            <p className="text-xs italic text-gray-300">
              <em>No needles. No lab visits. Just a fast, digital solution designed for Awareness, Research, and Emergency readiness.</em>
            </p>
            
            <p className="text-xs text-yellow-300 bg-yellow-900/50 p-3 rounded-lg border border-yellow-500/50">
              <strong>*For medical treatments or blood transfusions, always confirm with a certified laboratory test.*</strong>
            </p>
          </div>

          {/* Checkbox + Button */}
          <div className="flex-shrink-0 mt-6 p-6 bg-black/30 rounded-2xl backdrop-blur-xl border border-white/20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <label className="flex items-center gap-2 cursor-pointer p-3 rounded-xl hover:bg-black/20 transition-all flex-1 justify-center text-sm">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="w-5 h-5 text-blue-400 bg-white/20 backdrop-blur-sm rounded border-2 border-white/50 focus:ring-2 focus:ring-blue-400 transition-all"
                  required
                />
                <span className="text-sm font-medium">Accept Terms & Privacy Policy</span>
              </label>
              
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!termsAccepted || loading}
                className="flex-1 max-w-sm bg-gradient-to-r from-[#ff0000] via-[#708ed8] to-[#ffffff10] hover:from-red-600 hover:via-blue-600 hover:to-white/20 text-white font-bold py-3 px-6 rounded-xl text-sm shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 border border-white/30 backdrop-blur-sm"
              >
                {loading ? "Loading..." : "Continue to Scanner"}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ✅ FOOTER - FIXED BOTTOM */}
      <div className="relative z-50 flex-shrink-0 border-t border-white/10">
        <Footer />
      </div>
    </div>
  );
}
