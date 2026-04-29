export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-slate-800/50 flex justify-between items-center px-6 py-4 max-w-full">
      <div className="text-xl font-black tracking-tighter text-white">DEV_ARCHITECT</div>
      <div className="hidden md:flex items-center gap-8">
        <a className="font-inter tracking-tighter uppercase font-bold text-xs text-blue-400 after:content-[''] after:block after:h-1 after:w-1 after:bg-blue-500 after:mx-auto after:mt-1 after:rounded-full transition-transform active:scale-95" href="#">Home</a>
        <a className="font-inter tracking-tighter uppercase font-bold text-xs text-slate-400 hover:text-white transition-colors duration-200 transition-transform active:scale-95" href="#">Projects</a>
        <a className="font-inter tracking-tighter uppercase font-bold text-xs text-slate-400 hover:text-white transition-colors duration-200 transition-transform active:scale-95" href="#">About me</a>
      </div>
      <button className="bg-white text-black px-4 py-2 font-inter tracking-tighter uppercase font-bold text-xs hover:bg-primary-container transition-all active:scale-95">
        GET_IN_TOUCH
      </button>
    </nav>
  );
}
