export default function SysLogs() {
  return (
    <section className="mb-32 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-tertiary/10 rounded-full blur-3xl"></div>
          <div className="relative space-y-4">
            <div className="glass-panel p-4 rounded-lg flex items-center gap-4 translate-x-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-400 text-sm">check</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase">Deployment_Successful</p>
                <p className="text-[10px] text-slate-500">Node_Cluster_A // 2ms Latency</p>
              </div>
            </div>
            <div className="glass-panel p-4 rounded-lg flex items-center gap-4 -translate-x-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-400 text-sm">sync</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase">Buffer_Synchronizing</p>
                <p className="text-[10px] text-slate-500">Sharding_Protocol_Active</p>
              </div>
            </div>
            <div className="glass-panel p-4 rounded-lg flex items-center gap-4 translate-x-8">
              <div className="w-10 h-10 rounded-full bg-tertiary/20 border border-tertiary/40 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-sm">hub</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase">New_Branch_Merged</p>
                <p className="text-[10px] text-slate-500">Repository_Terminal_Velocity</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-headline-lg uppercase tracking-tighter">SYS_LOGS</h2>
          <p className="text-body-md text-on-surface-variant">
            A real-time capture of developmental momentum. Each log entry represents a milestone in technical architectural evolution.
          </p>
          <a className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all" href="#">
            <span className="font-bold text-xs tracking-widest uppercase">READ_FULL_ARCHIVE</span>
            <span className="material-symbols-outlined">trending_flat</span>
          </a>
        </div>
      </div>
    </section>
  );
}
