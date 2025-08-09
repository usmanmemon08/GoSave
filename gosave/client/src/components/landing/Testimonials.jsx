import { useEffect, useState } from 'react';

const testimonials = [
  { name: 'Ayesha', location: 'Banjara Hills', quote: 'Saved so much on weekend dinners!', rating: 5 },
  { name: 'Rahul', location: 'Gachibowli', quote: 'Totally worth it for family outings.', rating: 4 },
  { name: 'Sneha', location: 'Madhapur', quote: 'Great deals and easy to use.', rating: 5 },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section className="py-16 bg-white" id="testimonials">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">What members say</h2>
        <div className="mx-auto max-w-2xl p-6 rounded-xl shadow-card border border-black/5 animate-fadeInUp">
          <div className="text-lg text-text/80">“{t.quote}”</div>
          <div className="mt-4 text-sm text-text/60">{t.name} • {t.location}</div>
          <div className="mt-2 text-accent">{'★★★★★'.slice(0, t.rating)}</div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`h-2 w-2 rounded-full ${i === index ? 'bg-primary' : 'bg-text/20'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}