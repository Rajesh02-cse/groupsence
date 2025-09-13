"use client";

import { useState } from "react";

export default function Main() {
  const [scanResult, setScanResult] = useState("");
  const [scanning, setScanning] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

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
      setUploadedImage(URL.createObjectURL(file));
      setScanResult("");
    }
  };

  return (
    <>
      {/* Glassy Responsive Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-4xl bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 z-50 h-20 flex items-center justify-center px-6 sm:px-8 shadow-lg">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#ff0000] via-[#708ed8] to-[#ffffff] bg-clip-text text-transparent select-none tracking-wide"
        >
          GroupSence
        </h1>
      </nav>

      {/* Background video */}
      <video
        src="/d.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Main glassy container */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-24 px-4">
        <div
          className="flex flex-col items-center gap-6 max-w-lg w-full bg-white/10 rounded-2xl border border-white/20 shadow-2xl px-6 py-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-400 text-center">
            Starting....
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 text-center max-w-md">
            Ready to know your Blood group
          </p>

          {/* Upload attachment button */}
          <label
            htmlFor="file-upload"
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-3 text-center select-none transition duration-300"
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

          {/* Show uploaded image preview */}
          {uploadedImage && (
            <img
              src={uploadedImage}
              alt="Uploaded fingerprint preview"
              className="mt-4 max-h-40 rounded-lg border border-white/20 object-contain"
            />
          )}

          {/* Scan button shows only if no scan result (scan not done) */}
          {scanResult ? (
            // After scan completes: show uploaded image only (already shown above), no scan button
            null
          ) : (
            uploadedImage && (
              <button
                onClick={handleScan}
                disabled={scanning}
                className="relative rounded-xl overflow-hidden outline-none border-none aspect-[9/16] w-40 sm:w-48 cursor-pointer disabled:cursor-not-allowed focus:ring-4 focus:ring-blue-500 transition-all duration-200 mt-4"
              >
                {!scanning && (
                  <img
                    src="/e.jpg" // fixed photo on scan button
                    alt="Fingerprint scan icon"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
                {scanning && (
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
                <span className="relative z-10 flex items-center justify-center h-full text-white font-extrabold text-2xl select-none whitespace-pre-line">
                  {scanning ? "Scanning" : "Scan Fingerprint"}
                </span>
              </button>
            )
          )}

          {/* Scan result */}
          {scanResult && (
            <div
              className="text-green-300 text-xl text-center bg-black/70 px-6 py-3 rounded-lg shadow mt-4 select-none animate-fade-in"
              role="status"
              aria-live="polite"
            >
              {scanResult}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
