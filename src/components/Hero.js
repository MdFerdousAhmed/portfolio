export default function Hero() {
  return (
    <section className="relative mb-32">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"></div>
      <div className="absolute top-40 -right-20 w-80 h-80 bg-tertiary/20 blur-[100px] rounded-full"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-3/5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 glass-panel rounded-full text-primary border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-label-sm uppercase">Systems_Operational</span>
          </div>
          <h1 className="text-headline-xl md:text-[80px] leading-[0.9] tracking-tighter">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary-fixed to-primary-container">DIGITAL_REALMS</span>
          </h1>
          <p className="text-body-md text-on-surface-variant max-w-lg">
            High-performance architectural solutions for the modern web. Merging aesthetic purity with technical rigor to build future-proof systems.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-white text-black px-8 py-4 font-bold text-xs tracking-widest uppercase hover:invert transition-all">
              INITIALIZE_EXPLORATION
            </button>
            <button className="border border-white/20 px-8 py-4 font-bold text-xs tracking-widest uppercase hover:bg-white/10 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              VIEW_SOURCE
            </button>
          </div>
        </div>
        <div className="md:w-2/5 relative">
          <div className="glass-panel p-2 rounded-xl rotate-3 shadow-2xl relative z-20">
            <img 
              alt="Abstract neon digital art" 
              className="rounded-lg w-full h-[450px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZOyfoLlhNIsvh9Q-NTsvO-KWYfpktxKMNkK2BayzjONjVWJcsiumlyEPAybTOmK5v_ek5B_125timvIFFl1yOf1eBJXiG_jfmT_zcpJZ9ZjO6Cp99AnmcOmj8P_fTDRJ2qHr95wDKBmgQG9wAW0s-bby9NLJ2JJQ6PL-YyTRg2HYXMQk0iShXTRHTQYJuUn--izFw1jzaudL6jKnzKWAiBsvIB05NEB81n0FafohcpByNYRZfpxVoT-FM0f1bbS9tBWxfwLN6eCU"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 glass-panel -rotate-6 z-10 p-4 border-primary/30">
            <div className="w-full h-full border border-white/5 bg-white/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-4xl">deployed_code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
