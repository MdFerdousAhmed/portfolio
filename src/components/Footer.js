export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-slate-800 bg-neutral-950 mt-32">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-4 max-w-7xl mx-auto">
        <div className="font-inter text-[10px] tracking-widest uppercase text-slate-500">
          ©2024 TERMINAL_VELOCITY. ALL_RIGHTS_RESERVED.
        </div>
        <div className="flex items-center gap-8">
          <a className="font-inter text-[10px] tracking-widest uppercase text-slate-500 hover:text-blue-300 transition-colors opacity-80 hover:opacity-100" href="#">GITHUB</a>
          <a className="font-inter text-[10px] tracking-widest uppercase text-slate-500 hover:text-blue-300 transition-colors opacity-80 hover:opacity-100" href="#">LINKEDIN</a>
          <a className="font-inter text-[10px] tracking-widest uppercase text-slate-500 hover:text-blue-300 transition-colors opacity-80 hover:opacity-100" href="#">SOURCE_CODE</a>
        </div>
        <div className="font-inter text-[10px] tracking-widest uppercase text-blue-400">
          STK_V2.9.1
        </div>
      </div>
    </footer>
  );
}
