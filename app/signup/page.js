"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import Footer from "../components/footer";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", age: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async e => {
    e.preventDefault();
    setLoading(true);
    setErr("");
    setSuccess("");
    setTimeout(() => {
      if (form.name && form.age && form.email && form.password) {
        setSuccess("Signup successful! Redirecting...");
        setTimeout(() => router.push("/"), 1300);
      } else {
        setErr("All fields are required");
      }
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="h-screen w-screen bg-gray-900 relative overflow-hidden flex flex-col">
      {/* Background Video - FULL SCREEN BEHIND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 z-0"
      >
        <source src="/a.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10" />

      {/* SIGNUP BOX - FULL HEIGHT (NO GAP) */}
      <div className="relative z-50 flex items-center justify-center flex-1 px-4">  {/* ✅ flex-1 = NO GAP */}
        <div className="p-8 max-w-md w-full bg-white/10 shadow-xl rounded-2xl backdrop-blur flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Create Account</h2>
          
          <form onSubmit={handleSignup} className="w-full flex flex-col gap-4">
            <input
              type="text"
              name="name"
              className="px-4 py-3 rounded-lg bg-black/40 text-white placeholder-gray-200 outline-none"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <input
              type="number"
              min={1}
              max={150}
              name="age"
              className="px-4 py-3 rounded-lg bg-black/40 text-white placeholder-gray-200 outline-none"
              placeholder="Age"
              value={form.age}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="px-4 py-3 rounded-lg bg-black/40 text-white placeholder-gray-200 outline-none"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="px-4 py-3 rounded-lg bg-black/40 text-white placeholder-gray-200 outline-none w-full pr-12"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-200 hover:text-blue-400"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <RiEyeOffFill size={22} /> : <RiEyeFill size={22} />}
              </button>
            </div>
            {err && <div className="text-red-400 text-sm text-center">{err}</div>}
            {success && <div className="text-green-300 text-sm text-center">{success}</div>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 rounded-lg py-3 text-white font-bold shadow-lg text-lg transition disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <div className="mt-5 text-gray-200 text-sm text-center">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/")}
              className="text-blue-300 font-bold underline cursor-pointer hover:text-red-600"
            >
              Log In
            </button>
          </div>
        </div>
      </div>

      {/* ✅ FOOTER - SAME AS LOGIN */}
      <div className="relative z-50 flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}
