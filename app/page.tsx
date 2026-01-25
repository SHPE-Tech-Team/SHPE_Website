"use client";
import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";
import SectionHeader from "./components/SectionHeader";
import PillarCard from "./components/PillarCard";
import InfoCard from "./components/InfoCard";
import FadeIn from "./components/FadeIn";
import { UsersIcon, HandRaisedIcon, AcademicCapIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const pillars = [
    { title: "Familia", desc: "We take responsibility for our collective strength and passion by developing communities, building a diverse and inclusive membership, and challenging each other to be our best.", icon: UsersIcon },
    { title: "Service", desc: "We act on a foundation of service. We commit to deliver the highest levels of quality, integrity, and ethical behavior. We act with empathy, patience, and understanding.", icon: HandRaisedIcon },
    { title: "Education", desc: "We value formal education and professional development. We are dedicated to continuous improvement and renewal. We learn from successes, setbacks, and each other.", icon: AcademicCapIcon },
    { title: "Resilience", desc: "We embrace our diverse cultures and communities, which enable us to adapt, thrive, and persist with optimism.", icon: ShieldCheckIcon },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Mission & Vision Section */}
      <section className="pt-24 pb-12 bg-white w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-stretch">
            <FadeIn delay={0.1} className="h-full">
              <div className="relative h-full p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-blue-900/5 flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute -top-6 left-6 md:-left-6 w-14 h-14 sm:w-16 sm:h-16 bg-shpe-blue rounded-2xl flex items-center justify-center shadow-lg transition-transform">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-shpe-blue mb-4 sm:mb-6 mt-6 sm:mt-4">Our Mission</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium flex-grow">
                  SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support, and development.
                </p>
                <div className="mt-6 sm:mt-8 w-16 sm:w-20 h-1.5 bg-shpe-orange rounded-full"></div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="h-full">
              <div className="relative h-full p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-orange-900/5 flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute -top-6 right-6 md:-right-6 w-14 h-14 sm:w-16 sm:h-16 bg-shpe-orange rounded-2xl flex items-center justify-center shadow-lg transition-transform">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-shpe-orange mb-4 sm:mb-6 mt-6 sm:mt-4">Our Vision</h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium flex-grow">
                  SHPE’s vision is a world where Hispanics are highly valued and influential as the leading innovators, scientists, mathematicians, and engineers.
                </p>
                <div className="mt-6 sm:mt-8 w-16 sm:w-20 h-1.5 bg-shpe-blue rounded-full"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="pt-12 pb-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Our Pillars"
              description="We empower our members through four key pillars that form the foundation of our chapter."
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {pillars.map((pillar, index) => (
              <FadeIn key={index} delay={index * 0.1} className="h-full">
                <PillarCard
                  title={pillar.title}
                  description={pillar.desc}
                  Icon={pillar.icon}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              title="Stay connected with SHPE"
              description="We offer many ways to stay connected on upcoming events, monthly general meetings, and any related SHPE-Chapter news."
            />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Newsletter */}
            <FadeIn delay={0.1} className="h-full">
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
            </FadeIn>

            {/* Slack */}
            <FadeIn delay={0.2} className="h-full">
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
            </FadeIn>

            {/* Instagram */}
            <FadeIn delay={0.3} className="h-full">
              <InfoCard
                title="Instagram"
                description="Follow @shpe.uiuc for event recaps, member spotlights, and daily updates."
                icon={
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.37c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                }
                iconBgColorClass="bg-pink-100"
                iconColorClass="text-pink-600"
                link={{
                  text: "Follow @shpe_uiuc",
                  href: "https://www.instagram.com/shpe_uiuc/?hl=en",
                  target: "_blank"
                }}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
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
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
