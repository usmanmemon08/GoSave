import Card from '../components/common/Card.jsx';

const steps = [
  { icon: '💳', title: 'Purchase Membership', desc: 'Get your GoSave membership card for exclusive access to hundreds of deals' },
  { icon: '🏪', title: 'Visit Partner Outlets', desc: 'Show your card at any of our 500+ verified partner locations across Hyderabad' },
  { icon: '💰', title: 'Get Instant Discounts', desc: 'Enjoy immediate savings of up to 40% on food, services, and entertainment' },
  { icon: '⭐', title: 'Enjoy VIP Perks', desc: 'Access exclusive offers, priority service, and hidden deals not available to public' },
];

export default function About() {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4">Your Gateway to Smart Savings</h1>
          <p className="text-text/80 max-w-3xl">GoSave is Hyderabad's premier discount membership platform, connecting savvy customers with trusted local businesses. We believe everyone deserves access to premium experiences at affordable prices.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <Card key={s.title} className="p-6 hover:shadow-xl transition-transform hover:-translate-y-1">
              <div className="text-3xl">{s.icon}</div>
              <div className="mt-4 font-semibold text-primary">{s.title}</div>
              <p className="text-sm text-text/80 mt-2">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}