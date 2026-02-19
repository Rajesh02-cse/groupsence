"use client";
import { useState, useEffect, useRef } from "react";
import Footer from "../components/footer";

export default function Main() {
  const [scanResult, setScanResult] = useState("");
  const [scanning, setScanning] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 1, height: 1 });

  const handleScan = () => {
    if (scanning || !uploadedImage) return;
    setScanning(true);
    setScanResult("");

    setTimeout(() => {
      setScanResult("Blood Group: O+ (example)");
      setScanning(false);
    }, 5000);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setScanResult("");

      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.naturalHeight / img.naturalWidth;
        const maxWidth = 200;
        const maxHeight = 350;
        const width = Math.min(maxWidth, img.naturalWidth);
        const height = width * aspectRatio;
        
        setImageDimensions({ width, height });
      };
      img.src = imageUrl;
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-900 relative overflow-hidden flex flex-col">
      {/* 🔥 RED SOLID LOGOUT BUTTON - Mobile Safe */}
      <button 
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
        className="fixed top-3 right-3 sm:top-6 sm:right-6 z-[100] bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold shadow-lg shadow-red-500/50 hover:shadow-xl hover:shadow-red-500/70 border border-red-400/50 transition-all duration-300 text-xs sm:text-sm sm:text-base hover:scale-105 active:scale-95"
      >
        Logout
      </button>
      
      {/* Glassy Responsive Navbar - Mobile Safe */}
      <nav className="fixed top-14 sm:top-20 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-4xl bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 z-50 h-16 sm:h-20 flex items-center justify-center px-4 sm:px-6 sm:px-8 shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-[#ff0000] via-[#708ed8] to-[#ffffff] bg-clip-text text-transparent select-none tracking-wide">
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

      {/* MAIN CONTENT - Mobile Safe Padding */}
      <main className="relative z-50 flex-1 flex flex-col items-center justify-center pt-24 sm:pt-28 px-2 sm:px-4 overflow-y-auto">
        <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-lg w-full mx-auto bg-white/10 rounded-2xl border border-white/20 shadow-2xl px-4 sm:px-6 py-8 sm:py-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-400 text-center">
            Starting....
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 text-center max-w-md">
            Ready to know your Blood group
          </p>

          {/* Upload attachment button */}
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-4 sm:px-6 py-2.5 sm:py-3 text-center select-none transition duration-300 w-full max-w-sm text-sm sm:text-base"
          >
            Upload Fingerprint Image
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* ✅ SCAN BUTTON */}
          {scanResult ? (
            null
          ) : (
            uploadedImage && (
              <button
                onClick={handleScan}
                disabled={scanning}
                style={{
                  width: `${imageDimensions.width}px`,
                  height: `${imageDimensions.height}px`,
                  minWidth: '120px',
                  minHeight: '200px'
                }}
                className="relative rounded-xl overflow-hidden outline-none border-none cursor-pointer disabled:cursor-not-allowed focus:ring-4 focus:ring-blue-500 transition-all duration-200 mt-4 shadow-2xl mx-auto"
              >
                {!scanning ? (
                  <img
                    src={uploadedImage}
                    alt="Fingerprint for scanning"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                ) : (
                  <>
                    <video
                      src="/c.mp4"
                      autoPlay
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </>
                )}
                <span className="relative z-10 flex items-center justify-center h-full text-white font-extrabold text-lg sm:text-xl md:text-2xl select-none whitespace-pre-line bg-black/50 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                  {scanning ? "Scanning" : "Scan\nFingerprint"}
                </span>
              </button>
            )
          )}

          {/* ✅ RESULT */}
          {scanResult && uploadedImage && (
            <div className="flex flex-col items-center gap-3 sm:gap-4 w-full mt-4 sm:mt-6 p-4 sm:p-6 bg-black/40 rounded-2xl backdrop-blur-xl border border-white/20">
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <img
                  src={uploadedImage}
                  alt="Analyzed fingerprint"
                  style={{
                    width: `${Math.min(imageDimensions.width, 180)}px`,
                    height: `${Math.min(imageDimensions.height * (180/imageDimensions.width), 320)}px`
                  }}
                  className="rounded-xl border-4 border-green-400 shadow-2xl object-contain"
                />
                <div className="text-green-300 text-xl sm:text-2xl md:text-3xl font-black text-center bg-black/70 px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg select-none">
                  {scanResult}
                </div>
              </div>
              <p className="text-white/80 text-xs sm:text-sm md:text-base text-center">
                Analysis complete! Your blood group has been detected.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* ✅ FOOTER - FIXED BOTTOM */}
      <div className="relative z-50 flex-shrink-0 border-t border-white/10">
        <Footer />
      </div>
    </div>
  );
}
