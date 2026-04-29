export default function StkExplorer() {
  return (
    <section className="mb-32">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-headline-lg uppercase tracking-tighter">STK_EXPLORER</h2>
          <div className="h-1 w-20 bg-primary mt-2"></div>
        </div>
        <p className="text-slate-500 text-label-sm uppercase hidden md:block">Active_Protocols v2.4</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large Feature */}
        <div className="md:col-span-8 glass-panel p-8 rounded-2xl border-white/5 flex flex-col justify-between min-h-[400px] hover:border-primary/40 transition-colors group">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <h3 className="text-headline-lg uppercase">Distributed_Systems</h3>
              <p className="text-on-surface-variant max-w-md">Scalable architecture patterns for real-time data processing and high-concurrency environments.</p>
            </div>
            <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform">cloud_sync</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            <span className="bg-primary/10 text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm border border-primary/20">KUBERNETES</span>
            <span className="bg-primary/10 text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm border border-primary/20">GO_LANG</span>
            <span className="bg-primary/10 text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-sm border border-primary/20">GRPC</span>
          </div>
        </div>
        {/* Small Feature 1 */}
        <div className="md:col-span-4 glass-panel p-8 rounded-2xl border-white/5 flex flex-col justify-between hover:border-tertiary/40 transition-colors group">
          <span className="material-symbols-outlined text-tertiary text-3xl">token</span>
          <div className="space-y-2 mt-12">
            <h4 className="text-label-sm text-lg uppercase tracking-tighter">Web3_Inertia</h4>
            <p className="text-sm text-slate-400">Decentralized protocols and smart contract integrity audits.</p>
          </div>
        </div>
        {/* Small Feature 2 */}
        <div className="md:col-span-4 glass-panel p-8 rounded-2xl border-white/5 flex flex-col justify-between hover:border-primary-container/40 transition-colors group">
          <span className="material-symbols-outlined text-primary-container text-3xl">auto_awesome_motion</span>
          <div className="space-y-2 mt-12">
            <h4 className="text-label-sm text-lg uppercase tracking-tighter">UI_Dynamics</h4>
            <p className="text-sm text-slate-400">Modern frontend frameworks with extreme motion optimization.</p>
          </div>
        </div>
        {/* Large Static Art */}
        <div className="md:col-span-8 glass-panel rounded-2xl overflow-hidden relative group">
          <img 
            alt="Abstract digital landscape" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2rR6PjY8-9joLtqHKeiHkD_V9f_SPsFe20pRYPjueSu3__BgLVC7cVXZwXhZcbWD7JohQZsjFi7ukJVVbKMH6q-GbJYKFsLNp0P_dySJvH9BLTuDjHPDoGLSzNOFKK3Uz5B6jPhIObFAII-76vSUphv9J8uVk5ggQSdgnC0AQ8B_9tgm1kI9es33xEwPWFU_yIENpcwfovEaCt5VJiJM4EpAyBOkXrHQ8tRL90yfOgxRLeeou5Yyfmo-ywXdA2paEqYh5aN8l7Xg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent flex items-end p-8">
            <div>
              <span className="text-label-sm text-primary uppercase mb-2 block">PROJECT_REVEAL</span>
              <h3 className="text-headline-lg text-white">NEURAL_INTERFACE_V2</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
