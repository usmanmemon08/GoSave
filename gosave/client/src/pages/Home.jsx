import Hero from '../components/landing/Hero.jsx';
import Testimonials from '../components/landing/Testimonials.jsx';

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="learn-more" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white shadow-card border border-black/5">
            <div className="font-semibold text-primary mb-2">Exclusive Deals</div>
            <p className="text-text/80">Carefully curated discounts across Hyderabad's best spots.</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-card border border-black/5">
            <div className="font-semibold text-primary mb-2">Instant Savings</div>
            <p className="text-text/80">Show your card and save on the spot. No coupons needed.</p>
          </div>
          <div className="p-6 rounded-xl bg-white shadow-card border border-black/5">
            <div className="font-semibold text-primary mb-2">VIP Perks</div>
            <p className="text-text/80">Priority service and hidden deals for members.</p>
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}