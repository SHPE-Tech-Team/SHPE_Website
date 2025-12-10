import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Pillars Section */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-shpe-blue mb-4">Our Pillars</h2>
            <div className="w-24 h-1 bg-shpe-orange mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We empower our members through five key pillars that form the foundation of our chapter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Familia", desc: "We take responsibility for our collective strength and passion by developing communities, building a diverse and inclusive membership, and challenging each other to be our best." },
              { title: "Service", desc: "We act on a foundation of service. We commit to deliver the highest levels of quality, integrity, and ethical behavior. We act with empathy, patience, and understanding." },
              { title: "Education", desc: "We value formal education and professional development. We are dedicated to continuous improvement and renewal. We learn from successes, setbacks, and each other." },
              { title: "Resilience", desc: "We embrace our diverse cultures and communities, which enable us to adapt, thrive, and persist with optimism." },
            ].map((pillar, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100 group">
                <div className="w-16 h-16 bg-shpe-blue/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-shpe-orange/10 transition-colors">
                  <div className="w-8 h-8 bg-shpe-blue rounded-full group-hover:bg-shpe-orange transition-colors"></div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Join a community of passionate engineers and leaders dedicated to excellence and familia.
          </p>
          <Link
            href="/get-involved"
            className="inline-block bg-white text-shpe-blue px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
}
