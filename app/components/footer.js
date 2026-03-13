export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-xl text-white py-3 px-4 border-t border-white/10 z-40">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center">
        
        {/* Left Column: Team */}
        <div className="text-center">
          <h4 className="text-[14px] mb-1">Team</h4>
          <div className="text-[13px] flex flex-col gap-0.5">
            <div className="flex justify-center gap-2">
              <span>Maheswar Das • Rajesh Paul</span>
            </div>
            <div className="flex justify-center gap-2">
              <span>Rohan Yadav • Suman Kumar Bari</span>
            </div>
          </div>
        </div>

        {/* Center Column: Institution & Project Info */}
        <div className="text-center">
          <p className="text-[13px] mb-0.5 tracking-wide">
            OMDAYAL GROUP OF INSTITUTIONS • CSE 
          </p>
          <div className="flex justify-center gap-2">
              <span>@2026 Blood Group Detection Project</span>
          </div>
          <a 
            href="mailto:rajesh02-cse@groupsence.com" 
            className="text-blue-600 hover:text-blue-500 hover:underline text-[13px] transition"
          >
            rajesh02-cse@groupsence.vercel.app
          </a>
        </div>

        {/* Right Column: Mentor */}
        <div className="text-center">
          <h4 className="text-[14px] mb-1">Mentor</h4>
          <p className="text-[13px]">Prof. Dhrubajyoti Ghosh</p>
        </div>

      </div>
    </footer>
  );
}
