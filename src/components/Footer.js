export default function Footer() {
  return (
    <footer className="w-full py-16 mt-20 bg-surface-container-lowest border-t border-white/5">
      <div className="max-w-container-max mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left font-heading text-sm uppercase tracking-widest">
        <div className="text-outline font-medium">© 2024 Angel Garcia. Engineered for the web.</div>
        <div className="flex gap-lg">
          <a className="text-outline hover:text-primary-fixed-dim transition-colors duration-300 hover:translate-y-[-2px] transition-transform" href="#">GitHub</a>
          <a className="text-outline hover:text-primary-fixed-dim transition-colors duration-300 hover:translate-y-[-2px] transition-transform" href="#">LinkedIn</a>
          <a className="text-outline hover:text-primary-fixed-dim transition-colors duration-300 hover:translate-y-[-2px] transition-transform" href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
