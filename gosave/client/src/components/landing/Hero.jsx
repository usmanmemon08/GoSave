export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 animate-fadeInUp">
          <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="gradient-text">GoSave</span> Hyderabad Deals
          </h1>
          <p className="text-lg text-text/80 max-w-xl">
            Unlock instant savings at 500+ partner outlets. Premium experiences without the premium price.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="/register" className="px-6 py-3 rounded-lg bg-primary text-white shadow-card hover:scale-[1.03] transition">Get Your Card</a>
            <a href="#learn-more" className="px-6 py-3 rounded-lg border border-text/10 hover:border-primary text-text hover:text-primary transition">Learn More</a>
          </div>
          <div className="flex gap-8 pt-4 text-sm">
            <div><span className="font-semibold text-primary">500+ </span>partners</div>
            <div><span className="font-semibold text-primary">Up to 40% </span>savings</div>
            <div><span className="font-semibold text-primary">10K+ </span>members</div>
          </div>
        </div>
        <div className="relative">
          <div className="mx-auto w-80 h-48 md:w-[420px] md:h-[260px] rounded-2xl bg-gradient-to-br from-primary to-[#00B3D6] text-white shadow-card transform rotate-[-3deg] hover:rotate-[-1deg] transition-transform animate-float">
            <div className="p-6 h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="font-display tracking-wide">GoSave Member</div>
                <div className="text-xs bg-white/20 px-2 py-1 rounded-full">VIP</div>
              </div>
              <div>
                <div className="text-sm opacity-80">Card Number</div>
                <div className="text-2xl font-bold tracking-wider">GS-2025-0001</div>
              </div>
            </div>
          </div>
          <div className="absolute -z-10 top-6 left-10 w-10 h-10 rounded-full bg-accent/60 blur-sm" />
          <div className="absolute -z-10 bottom-0 right-6 w-16 h-16 rounded-full bg-primary/40 blur-md" />
        </div>
      </div>
    </section>
  );
}