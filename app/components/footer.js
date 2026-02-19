 export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 border-t border-white/10 z-40">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
        
        {/* Left Column: Team */}
        <div className="text-center">
          <h4 className="text-[16px] mb-1">Team</h4>
          <div className="text-[15px] flex flex-col gap-1">
            <div className="flex justify-center gap-4">
              <span>Maheswar das • Rajesh paul</span>
              </div>
            <div className="flex justify-center gap-4">
              <span>Rohan Yadav • Suman Kumar Bari</span>
            </div>
          </div>
        </div>

        {/* Center Column: Institution & Project Info */}
        <div className="text-center">
          <p className="text-[15px] mb-1  tracking-wide">
            OMDAYAL GROUP OF INSTITUTIONS • CSE 
          </p>
          <div className="flex justify-center gap-4">
              <span>@2026 Blood Group Detection Project</span>
            </div>
          <a 
            href="mailto:rajesh02-cse@groupsence.com" 
            className="text-blue-600 hover:text-blue-500 hover:underline text-[15px] transition"
          >
            rajesh02-cse@groupsence.com
          </a>
        </div>

        {/* Right Column: Mentor */}
        <div className="text-center">
          <h4 className="text-[16px] mb-1">Mentor</h4>
          <p className="text-[15px]">Prof. Dhrubojyoti Ghosh</p>
        </div>

      </div>
    </footer>
  );
}