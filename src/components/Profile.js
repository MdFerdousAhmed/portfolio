export default function Profile() {
  return (
    <section className="glass-panel p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-12 border-white/10">
      <div className="shrink-0 relative">
        <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full"></div>
        <img 
          alt="Developer Portrait" 
          className="w-48 h-48 rounded-full border-[4px] border-white relative z-10 object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGJyy0iDxNwK6Ghm_qepVY6-WyOz3qfCHZ2YpbQgDSGGSXLnPVXbCrDtGRZNOUPiQMkN_ufoXnmQYfj8D9QTB8Vrk0Y3-aTww8or4Zmtu23yKSAPynN3tSfCm5bxnRW5IC52rvL7n8pM5QSNKJHRjqn3oO5hh63Hsmk9MD2ZKzr3RjrW5Y47MxGMsYijEZIc73JeLNDPXZZOezjwXkgeduIxEdTQl33nR5W4fAE2ijd9qmtoyJJTnYRq5kvBm9-sLH9SfJScKn2_E"
        />
      </div>
      <div className="flex-1 text-center md:text-left space-y-4">
        <h3 className="text-headline-lg uppercase">ALEX_RIVER</h3>
        <p className="text-on-surface-variant">
          Principal Architect at TERMINAL_VELOCITY. Obsessed with high-performance systems, decentralized data structures, and the intersection of human-computer interaction.
        </p>
        <div className="flex justify-center md:justify-start gap-4 pt-4">
          <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all" href="#">
            <span className="material-symbols-outlined text-[20px]">hub</span>
          </a>
          <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all" href="#">
            <span className="material-symbols-outlined text-[20px]">share</span>
          </a>
          <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-all" href="#">
            <span className="material-symbols-outlined text-[20px]">alternate_email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
