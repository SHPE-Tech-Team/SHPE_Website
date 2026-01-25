import Link from "next/link";
import { UsersIcon, HandRaisedIcon, AcademicCapIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import HeroCarousel from "./components/HeroCarousel";
import SectionHeader from "./components/SectionHeader";
import PillarCard from "./components/PillarCard";
import InfoCard from "./components/InfoCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Pillars Section */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Pillars"
            description="We empower our members through four key pillars that form the foundation of our chapter."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Familia", desc: "We take responsibility for our collective strength and passion by developing communities, building a diverse and inclusive membership, and challenging each other to be our best.", icon: UsersIcon },
              { title: "Service", desc: "We act on a foundation of service. We commit to deliver the highest levels of quality, integrity, and ethical behavior. We act with empathy, patience, and understanding.", icon: HandRaisedIcon },
              { title: "Education", desc: "We value formal education and professional development. We are dedicated to continuous improvement and renewal. We learn from successes, setbacks, and each other.", icon: AcademicCapIcon },
              { title: "Resilience", desc: "We embrace our diverse cultures and communities, which enable us to adapt, thrive, and persist with optimism.", icon: ShieldCheckIcon },
            ].map((pillar, index) => (
              <PillarCard
                key={index}
                title={pillar.title}
                description={pillar.desc}
                Icon={pillar.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Stay connected with SHPE"
            description="We offer many ways to stay connected on upcoming events, monthly general meetings, and any related SHPE-Chapter news."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Newsletter */}
            <InfoCard
              title="Newsletter"
              description="Our SHPE-chapter sends out a monthly newsletter detailing SHPE news and upcoming events! Become part of the newsletter mailing list!"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              }
              link={{
                text: "Join Newsletter List",
                href: "#"
              }}
            />

            {/* Slack */}
            <InfoCard
              title="Slack"
              description="SHPE @ UIUC have a slack for members and perspective members to join! Communicate with other members and stay updated! Become a member of our slack!"
              iconColorClass="text-purple-600"
              iconBgColorClass="bg-purple-100"
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.52 2.52 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.527 2.527 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.52v-6.315zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.52v2.522h-2.521zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V0a2.527 2.527 0 0 1 2.52-2.52h.003c1.393 0 2.52 1.127 2.52 2.52v6.314zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.521A2.527 2.527 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.52h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" /></svg>
              }
              link={{
                text: "Join Slack",
                href: "https://join.slack.com/t/shpe-uiuc/shared_invite/zt-3bb1v0tpc-nmf3p9VJTEpLtX1tjb~iBw",
                target: "_blank"
              }}
            />

            {/* GBM */}
            <InfoCard
              title="GBM"
              description="Our monthly General Body Meeting (GBM) are great ways to learn more about SHPE and meet our members and executive board! Join us at our monthly meetings!"
              iconColorClass="text-shpe-orange"
              iconBgColorClass="bg-orange-100"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              }
            />
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
