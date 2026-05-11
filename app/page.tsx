"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Flame,
  Eye,
  Globe,
  BookOpen,
  Wind,
  Send,
  Music,
  Sparkles,
  Mic2,
  Zap,
  Heart,
  Users,
  TrendingUp,
  MapPin,
  HandCoins,
  Building2,
  ChevronDown,
  Menu,
  X,
  Mail,
  PlayCircle,
  CheckCircle2,
  Sun,
  Moon,
  ArrowRight,
} from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Gatherings", href: "#gatherings" },
  { label: "Trybe", href: "#trybe" },
  { label: "Pastor", href: "#pastor" },
  { label: "Ministries", href: "#ministries" },
  { label: "Experience", href: "/experience" },
];

const STATS = [
  { value: "2022", label: "Founded" },
  { value: "3Rs", label: "Replicate · Represent · Reproduce" },
  { value: "∞", label: "Territories" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubscribed(true);
  }

  const bg = dark ? "bg-[#0a0a0a]" : "bg-white";
  const text = dark ? "text-white" : "text-[#111]";
  const subtext = dark ? "text-white/60" : "text-[#555]";
  const cardBg = dark ? "bg-[#161616]" : "bg-[#f7f7f7]";
  const border = dark ? "border-white/10" : "border-black/10";
  const navBg = scrolled
    ? dark
      ? "bg-[#0a0a0a]/95 shadow-lg shadow-black/30"
      : "bg-white/95 shadow-lg shadow-black/10"
    : "bg-transparent";

  return (
    <div
      className={`${bg} ${text} min-h-screen font-sans`}
    >
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="shrink-0">
            <Image
              src={dark ? "/images/logo_red.png" : "/images/logo_light.png"}
              alt="The Flamezone"
              width={180}
              height={40}
              className="object-contain h-10 w-auto"
              priority
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium ${subtext} hover:text-red-600 transition-colors`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className={`p-2 rounded-full ${dark ? "text-white/50 hover:text-white" : "text-black/40 hover:text-black"} transition-colors`}
              aria-label="Toggle theme"
            >
              {dark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <a
              href="mailto:thedesmondomotoyosi@gmail.com"
              className={`px-5 py-2.5 text-sm font-semibold rounded-full border ${border} ${subtext} hover:border-red-600/60 hover:text-red-600 transition-colors`}
            >
              For Invitations
            </a>
            <a
              href="#give"
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-full transition-colors"
            >
              Give
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className={`p-2 ${dark ? "text-white/50" : "text-black/40"}`}
            >
              {dark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-1">
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className={`lg:hidden ${dark ? "bg-[#111]" : "bg-white border-t border-black/10"} px-6 py-4 flex flex-col gap-4`}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium ${subtext} hover:text-red-600 transition-colors`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#give"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-5 py-2.5 bg-red-600 text-white text-sm font-semibold rounded-full text-center"
            >
              Give
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: dark
                ? `radial-gradient(ellipse 90% 55% at 50% 0%, rgba(220,38,38,0.16) 0%, transparent 55%),
                   radial-gradient(ellipse 50% 50% at 15% 70%, rgba(220,38,38,0.09) 0%, transparent 50%),
                   radial-gradient(ellipse 50% 50% at 85% 70%, rgba(180,10,10,0.07) 0%, transparent 50%),
                   radial-gradient(ellipse 70% 40% at 50% 100%, rgba(220,38,38,0.11) 0%, transparent 60%)`
                : `radial-gradient(ellipse 90% 55% at 50% 0%, rgba(220,38,38,0.09) 0%, transparent 55%),
                   radial-gradient(ellipse 70% 40% at 50% 100%, rgba(220,38,38,0.06) 0%, transparent 60%)`,
            }}
          />
          <div
            className={`absolute inset-0 ${dark ? "opacity-[0.022]" : "opacity-[0.035]"}`}
            style={{
              backgroundImage: dark
                ? `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`
                : `linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-600/40 text-red-500 text-xs font-semibold uppercase tracking-widest mb-8">
            <Flame className="w-3 h-3" />
            Apostolic · Mission-Minded · Teaching
          </div>

          <h1 className="text-7xl sm:text-8xl md:text-9xl leading-[1] tracking-wide mb-6 font-impact">
            Jesus In Us.
            <br />
            <span className="text-red-600">Jesus Through Us.</span>
          </h1>

          <p
            className={`text-lg md:text-xl ${subtext} max-w-2xl mx-auto leading-relaxed mb-10`}
          >
            We exist to raise a generation of God&apos;s representatives — men
            and women who carry Jesus within and express Him through their lives
            across territories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors"
            >
              Who We Are <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#gatherings"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full border ${border} hover:border-red-600/60 ${subtext} hover:text-red-600 transition-colors`}
            >
              Join Our Services
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className={`relative mt-20 w-full max-w-3xl mx-auto grid grid-cols-3 gap-px rounded-2xl overflow-hidden border ${border}`}
        >
          {STATS.map((s, i) => (
            <div key={i} className={`${cardBg} px-6 py-6 text-center`}>
              <p className="text-2xl font-bold text-red-600 mb-1">{s.value}</p>
              <p
                className={`text-xs font-medium ${subtext} uppercase tracking-wider`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#about"
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce ${subtext}`}
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className={`py-24 px-6 ${dark ? "" : "bg-[#f7f7f7]"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Label>Who We Are</Label>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 mb-6">
                A Ministry Built
                <br />
                for <span className="text-red-600">Transformation</span>
              </h2>
              <p className={`${subtext} leading-relaxed mb-5`}>
                The Flamezone is an apostolic, mission-minded, and teaching
                ministry founded in 2022 by Apostle Desmond Omotoyosi. What
                began as a teen fellowship has grown into a full apostolic
                ministry with a clear mandate to disciple people, shape lives,
                and extend the influence of Christ across nations.
              </p>
              <p className={`${subtext} leading-relaxed mb-8`}>
                We are committed to knowing Christ deeply and making Him known
                across nations and cultures. Our focus is not just conversion,
                but transformation and deployment.
              </p>
              <a
                href="#pastor"
                className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all text-sm"
              >
                Meet our Lead Pastor <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/images2/WhatsApp%20Image%202026-04-27%20at%2020.45.24.jpeg"
                  alt="Flamezone gathering"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <InfoCard
                icon={<Eye className="w-5 h-5 text-red-600" />}
                title="Our Vision"
                text="Raising a Force of sendable God-Representatives who express Jesus in them and through them across nations."
                cardBg={cardBg}
                border={border}
                subtext={subtext}
              />
              <InfoCard
                icon={<Globe className="w-5 h-5 text-red-600" />}
                title="Our Mission"
                text="To reach the unreached, unsaved and unchurched via intense missions and establishing Apostolic centres across territories for intense discipleship and the expansion of the Kingdom community"
                cardBg={cardBg}
                border={border}
                subtext={subtext}
              />
            </div>
          </div>
        </div>
      </section>

      {/* GATHERINGS */}
      <section
        id="gatherings"
        className={`py-24 px-6 ${dark ? "bg-[#111]" : "bg-[#f7f7f7]"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Label>Our Gatherings</Label>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5">
                This Is Not
                <br />
                <span className="text-red-600">Routine Church.</span>
              </h2>
              <p className={`${subtext} leading-relaxed mb-6 text-lg`}>
                This is a place of encounter, alignment, and activation. Our
                services are marked by the active manifestation of the Spirit of
                God.
              </p>

              <div className="flex gap-4 mb-6">
                {[
                  { day: "Sunday", time: "9:00 AM" },
                  { day: "Wednesday", time: "5:00 PM" },
                ].map((s) => (
                  <div
                    key={s.day}
                    className={`flex-1 ${cardBg} border ${border} rounded-xl p-4 text-center`}
                  >
                    <p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-1">
                      {s.day}
                    </p>
                    <p className={`text-xl font-black ${text}`}>{s.time}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://www.youtube.com/@theflamezone_nation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors text-sm"
              >
                <PlayCircle className="w-4 h-4" /> Watch Online
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="/images2/WhatsApp%20Image%202026-04-27%20at%2020.46.50.jpeg"
                  alt="Flamezone service"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <Music className="w-5 h-5 text-red-600" />,
                    title: "Worship",
                    desc: "A strong atmosphere of worship that ushers you into God's presence.",
                  },
                  {
                    icon: <Sparkles className="w-5 h-5 text-red-600" />,
                    title: "Spiritual Gifts",
                    desc: "The full operation of spiritual gifts in every gathering.",
                  },
                  {
                    icon: <Mic2 className="w-5 h-5 text-red-600" />,
                    title: "Prophetic",
                    desc: "Prophetic expressions and spiritual songs that build and edify.",
                  },
                  {
                    icon: <Zap className="w-5 h-5 text-red-600" />,
                    title: "Miracles",
                    desc: "Tangible, miraculous encounters with God.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`${cardBg} border ${border} rounded-xl p-5 hover:border-red-600/40 transition-colors`}
                  >
                    <div className="mb-3">{item.icon}</div>
                    <h4 className="font-semibold text-sm mb-1.5">
                      {item.title}
                    </h4>
                    <p className={`${subtext} text-xs leading-relaxed`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Label>What We Do</Label>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Intentional Spiritual Growth
            </h2>
          </div>
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-10">
            <Image
              src="/images2/1001478415.jpg"
              alt="Flamezone teaching"
              fill
              className="object-cover object-[center_20%]"
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <BookOpen className="w-6 h-6 text-red-600" />,
                title: "In-Depth Teaching",
                desc: "Revelatory teaching of the Word — equipping believers with clarity, depth, and truth that transforms from the inside out.",
              },
              {
                icon: <Wind className="w-6 h-6 text-red-600" />,
                title: "Transformative Prayer",
                desc: "Intense and transformative prayer gatherings that create real atmosphere and encounter with God.",
              },
              {
                icon: <Send className="w-6 h-6 text-red-600" />,
                title: "Strategic Missions",
                desc: "Strategic outreach and mission expressions that take the Kingdom to territories and the unreached.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`${cardBg} border ${border} rounded-2xl p-8 hover:border-red-600/40 transition-colors group`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${dark ? "bg-red-600/10" : "bg-red-50"} flex items-center justify-center mb-5 group-hover:bg-red-600/20 transition-colors`}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className={`${subtext} text-sm leading-relaxed`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Label>What We Believe</Label>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Our Core Convictions
            </h2>
          </div>
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-10">
            <Image
              src="/images2/WhatsApp%20Image%202026-04-27%20at%2020.43.25.jpeg"
              alt="Flamezone beliefs"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                text: "Every expression of our lives finds its pattern in the works of Christ.",
              },
              {
                n: "02",
                text: "The Word of God is the ultimate standard for doctrine and directives.",
              },
              {
                n: "03",
                text: "Every believer has a unique Kingdom assignment, must be equipped for it, and must fulfil it.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className={`${cardBg} border ${border} rounded-2xl p-8 hover:border-red-600/30 transition-colors`}
              >
                <p className="text-5xl font-black text-red-600/20 mb-4 leading-none">
                  {item.n}
                </p>
                <p className={`${subtext} leading-relaxed`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className={`py-24 px-6 ${dark ? "bg-[#111]" : "bg-[#f7f7f7]"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Label>Our Core Values</Label>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Built on <span className="text-red-600">G.O.D.S.R.E.P.</span>
            </h2>
          </div>
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-10">
            <Image
              src="/images2/WhatsApp%20Image%202026-04-27%20at%2020.45.23.jpeg"
              alt="Flamezone community"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { letter: "G", value: "Growth", desc: "We are committed to continuous spiritual, intellectual, and personal growth in every area of life." },
              { letter: "O", value: "Openness & Accountability", desc: "We cultivate a culture of transparency, vulnerability, and mutual accountability." },
              { letter: "D", value: "Discipline & Purity", desc: "We pursue holiness and structured living that honours God in spirit and in body." },
              { letter: "S", value: "Service", desc: "We exist to serve — God, one another, and the world around us." },
              { letter: "R", value: "Respect & Honour", desc: "We esteem God, leadership, and every individual with deep honour and regard." },
              { letter: "E", value: "Excellence & Productivity", desc: "We represent God with the highest quality in everything we do and produce." },
              { letter: "P", value: "Purpose-Driven", desc: "Every life in Flamezone is intentional — discovered, developed, and deployed for Kingdom impact." },
            ].map((item) => (
              <div
                key={item.letter}
                className={`${cardBg} border ${border} rounded-2xl p-6 hover:border-red-600/40 transition-all group shadow-[0_0_18px_rgba(220,38,38,0.07)] hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]`}
              >
                <p className="text-5xl font-black text-red-600 mb-3 leading-none font-bebas tracking-wide drop-shadow-[0_0_12px_rgba(220,38,38,0.9)]">
                  {item.letter}
                </p>
                <h4 className="font-bold text-sm mb-2">{item.value}</h4>
                <p className={`${subtext} text-xs leading-relaxed`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Label>Our Approach</Label>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              We Raise{" "}
              <span className="text-red-600">God&apos;s Representatives</span>
            </h2>
            <p className={`${subtext} mt-4 max-w-xl mx-auto`}>
              Being God&apos;s representative demands responsibility. At The
              Flamezone, we raise people who:
            </p>
          </div>
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-10">
            <Image
              src="/images2/WhatsApp%20Image%202026-04-27%20at%2020.45.24%20(1).jpeg"
              alt="Flamezone"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                word: "REPLICATE",
                sub: "the life and character of Christ in every area of living",
              },
              {
                word: "REPRESENT",
                sub: "Him accurately in every sphere of influence and culture",
              },
              {
                word: "REPRODUCE",
                sub: "His influence and impact in the lives of others",
              },
            ].map((item) => (
              <div
                key={item.word}
                className="relative overflow-hidden rounded-2xl bg-red-600 p-10 text-white text-center group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30" />
                <div className="relative">
                  <p className="text-3xl font-black tracking-wider mb-3">
                    {item.word}
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p
            className={`mt-12 text-center ${subtext} italic text-lg max-w-xl mx-auto`}
          >
            &ldquo;You will be stretched. You will be built. You will be sent.
            This is more than a ministry.&rdquo;
          </p>
        </div>
      </section>

      {/* PASTOR */}
      <section id="pastor" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Label>Our Lead Pastor</Label>
          <div className="flex flex-col sm:flex-row gap-10 mt-10 items-start">
            <div className="shrink-0 w-52 sm:w-64">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images2/1001389555.jpg"
                  alt="Apostle Desmond Omotoyosi"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-1">
                Apostle Desmond Omotoyosi
              </h2>
              <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-6">
                Lead Pastor · The Flamezone
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Visionary Leader",
                  "Veterinary Doctor",
                  "Gospel Songwriter",
                  "Author · 3 Books",
                ].map((b) => (
                  <span
                    key={b}
                    className={`px-3 py-1 text-xs font-semibold rounded-full border ${border} ${subtext}`}
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div className={`space-y-4 ${subtext} leading-relaxed text-sm`}>
                <p>
                  Apostle Desmond Omotoyosi is a visionary leader,
                  transformational coach, and purpose-driven minister committed
                  to raising a generation of believers who are spiritually
                  empowered, intellectually sound, and practically equipped to
                  represent God effectively in every sphere of life.
                </p>
                <p>
                  As the Lead Pastor of The Flamezone and Convener of the
                  Gathering of Flames, he carries a divine mandate centered on
                  building God&apos;s representatives who are liberated,
                  discipled, and equipped. His ministry is marked by depth,
                  clarity, and a passionate pursuit of spiritual awakening,
                  discipleship, and kingdom influence.
                </p>
                <p>
                  Beyond ministry, Apostle Desmond is a veterinary doctor,
                  founder of Pawzle360, a gifted gospel songwriter, and the
                  author of <em>Prayer Fuel</em>,{" "}
                  <em>Friendship as an Altar of Revival</em>, and{" "}
                  <em>Hey Purpose, Where Are You?</em>
                </p>
              </div>
              <div className="mt-8">
                <a
                  href="mailto:thedesmondomotoyosi@gmail.com"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" /> For Invitations
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRYBE */}
      <section
        id="trybe"
        className={`py-24 px-6 ${dark ? "bg-[#111]" : "bg-[#f7f7f7]"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Label>Community</Label>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5">
                Join a <span className="text-red-600">Flamezone Trybe</span>
              </h2>
              <p className={`${subtext} leading-relaxed mb-5`}>
                A Flamezone Trybe is a small family of 7 to 15 disciples meeting
                in homes, apartments, or spaces close to where you live.
                Intentionally small so everyone is seen, heard, and shaped.
              </p>
              <p className={`${subtext} leading-relaxed mb-6`}>
                It is not a crowd. It is a family where faith is practiced,
                friendships are built, and lives are strengthened through
                consistent community.
              </p>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images2/WhatsApp%20Image%202026-04-27%20at%2020.45.25.jpeg"
                  alt="Flamezone Trybe gathering"
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:theflamezonenation@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors text-sm"
                >
                  Find a Trybe Near You <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="mailto:theflamezonenation@gmail.com?subject=Start a Trybe in My Location"
                  className={`inline-flex items-center justify-center gap-2 px-7 py-4 font-semibold rounded-full border ${border} ${subtext} hover:border-red-600/60 hover:text-red-600 transition-colors text-sm`}
                >
                  Start a Trybe in Your Location
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <TrendingUp className="w-5 h-5 text-red-600" />,
                  title: "Accountability that Builds Strength",
                  desc: "We sharpen each other. Growth is intentional and consistent.",
                },
                {
                  icon: <Heart className="w-5 h-5 text-red-600" />,
                  title: "Genuine Care and Support",
                  desc: "Needs are not ignored. People are seen, supported, and strengthened.",
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5 text-red-600" />,
                  title: "Visible Spiritual Growth",
                  desc: "Faith becomes active, not theoretical. Lives begin to reflect Christ clearly.",
                },
                {
                  icon: <MapPin className="w-5 h-5 text-red-600" />,
                  title: "Expansion of Reach",
                  desc: "Church extends beyond a building — into homes, streets, and cities.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`flex gap-4 p-5 ${cardBg} border ${border} rounded-xl hover:border-red-600/40 transition-colors`}
                >
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className={`${subtext} text-sm leading-relaxed`}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY PHOTO STRIP */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <Label>Our Community</Label>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Real People. Real Community.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/a_lady.png", alt: "Flamezone community member", pos: "object-top" },
              { src: "/images2/1000850346.jpg", alt: "Flamezone service", pos: "object-[center_18%]" },
              { src: "/images/lady1.png", alt: "Flamezone community member", pos: "object-top" },
              { src: "/images2/WhatsApp%20Image%202026-04-27%20at%2020.45.25.jpeg", alt: "Flamezone service", pos: "object-top" },
              { src: "/images/lady2.png", alt: "Flamezone community member", pos: "object-top" },
              { src: "/images2/1000875273.jpg", alt: "Flamezone service", pos: "object-[center_12%]" },
              { src: "/images/two_lady.png", alt: "Flamezone community members", pos: "object-top" },
              { src: "/images2/1001478414.jpg", alt: "Flamezone service", pos: "object-[center_15%]" },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className={`object-cover ${img.pos} transition-transform duration-500 group-hover:scale-105`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINISTRIES */}
      <section id="ministries" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Label>Ministries</Label>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Ways to Get Involved
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Flamezone Missions",
                desc: "Strategic mission expressions reaching the unreached across territories.",
                icon: <Globe className="w-6 h-6 text-red-600" />,
                img: "/images2/WhatsApp%20Image%202026-04-27%20at%2020.36.00.jpeg",
              },
              {
                title: "FlameKids 'n' Teens",
                desc: "Nurturing the next generation in faith, identity, and Kingdom purpose.",
                icon: <Users className="w-6 h-6 text-red-600" />,
                img: "/images2/WhatsApp%20Image%202026-04-27%20at%2020.36.01.jpeg",
              },
              {
                title: "Gathering of Flames",
                desc: "A convergence of believers for deeper encounter, alignment, and activation.",
                icon: <Flame className="w-6 h-6 text-red-600" />,
                img: "/images2/WhatsApp%20Image%202026-04-27%20at%2020.46.50.jpeg",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`${cardBg} border ${border} rounded-2xl overflow-hidden hover:border-red-600/40 transition-colors group cursor-pointer`}
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div
                    className={`w-12 h-12 rounded-xl ${dark ? "bg-red-600/10" : "bg-red-50"} flex items-center justify-center mb-5 group-hover:bg-red-600/20 transition-colors`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className={`${subtext} text-sm leading-relaxed mb-4`}>
                    {item.desc}
                  </p>
                  <span className="text-red-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSIONS PHOTO GALLERY */}
      <section className={`pb-24 px-6`}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Label>Flamezone Missions</Label>
            <h3 className="text-2xl font-bold mt-3">
              Taking the Kingdom to the Streets
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images2/WhatsApp%20Image%202026-04-27%20at%2020.36.00.jpeg", alt: "Flamezone outreach — children" },
              { src: "/images2/WhatsApp%20Image%202026-04-27%20at%2020.35.59.jpeg", alt: "Flamezone outreach — community" },
              { src: "/images2/WhatsApp%20Image%202026-04-27%20at%2020.36.01.jpeg", alt: "Flamezone outreach — serving" },
              { src: "/images2/WhatsApp%20Image%202026-04-27%20at%2020.36.00%20(1).jpeg", alt: "Flamezone outreach — prayer" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIVE */}
      <section
        id="give"
        className={`py-24 px-6 ${dark ? "bg-[#111]" : "bg-[#f7f7f7]"}`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <Label>Partner With Us</Label>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Give to The Flamezone
          </h2>
          <p className={`${subtext} mb-8 max-w-lg mx-auto`}>
            Your generosity fuels the mission — reaching the unreached, building
            Kingdom communities, and sending believers into territories.
          </p>
          <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-10">
            <Image
              src="/images2/1000875273.jpg"
              alt="Flamezone giving"
              fill
              className="object-cover object-[center_15%]"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                label: "Offerings",
                icon: <HandCoins className="w-7 h-7" />,
                primary: false,
              },
              {
                label: "Building Project",
                icon: <Building2 className="w-7 h-7" />,
                primary: true,
              },
              {
                label: "Mission Projects",
                icon: <Globe className="w-7 h-7" />,
                primary: false,
              },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex flex-col items-center gap-3 py-8 px-6 rounded-2xl font-semibold text-sm transition-all ${
                  item.primary
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : `${cardBg} border ${border} hover:border-red-600/50 ${subtext} hover:text-red-600`
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* THE FLAMING PLEDGE */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images2/WhatsApp%20Image%202026-04-27%20at%2020.43.23.jpeg"
            alt="The Flaming Pledge"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center text-white">
          <span className="inline-flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <span className="w-6 h-px bg-red-400 inline-block" />
            The Flaming Pledge
          </span>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bebas tracking-wide leading-[1.15] text-white">
            &ldquo;I am God&apos;s Representative.
            <br />
            <span className="text-red-400">Jesus in me,</span>
            <br />
            Jesus through me,
            <br />
            <span className="text-red-400">By the Spirit.&rdquo;</span>
          </p>
        </div>
      </section>

      {/* EXPERIENCE CTA */}
      <section className={`py-20 px-6 ${dark ? "bg-[#111]" : "bg-[#f7f7f7]"}`}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Label>Testimonials</Label>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
                My Flamezone <span className="text-red-600">Experience</span>
              </h2>
              <p className={`${subtext} mb-8 max-w-lg`}>
                Real stories. Real transformation. Read what Flamezone has meant to
                the lives of those who&apos;ve been part of this family.
              </p>
              <a
                href="/experience"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors"
              >
                Read the Stories <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/a_lady.png"
                alt="Flamezone testimony"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAILING LIST */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <Label>Stay Connected</Label>
          <h2 className="text-4xl font-bold mt-4 mb-3">
            Join Our Mailing List
          </h2>
          <p className={`${subtext} mb-8 text-sm`}>
            We promise not to spam you — only edifying and amazing content from
            Flamezone Nation.
          </p>
          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-red-500 font-semibold text-lg">
              <CheckCircle2 className="w-5 h-5" />
              Welcome to the Flamezone family!
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className={`flex-1 px-5 py-3.5 ${cardBg} border ${border} rounded-full text-sm focus:outline-none focus:border-red-600 transition-colors`}
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors whitespace-nowrap text-sm"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className={`${dark ? "bg-[#080808] border-t border-white/5" : "bg-[#111] border-t border-black/10"} py-16 px-6`}
      >
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <Image
                src={dark ? "/images/logo_red.png" : "/images/logo_light.png"}
                alt="The Flamezone"
                width={160}
                height={36}
                className="object-contain h-9 w-auto"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Jesus In Us. Jesus Through Us.
            </p>
            <div className="mt-4 text-white/30 text-xs leading-relaxed space-y-0.5">
              <p className="text-white/40 font-semibold uppercase tracking-wider text-xs mb-1">Flamezone Auditorium</p>
              <p>Old Winners Road, Off Newton Street,</p>
              <p>Ekosodin, Benin City, Nigeria</p>
            </div>
          </div>

          <div>
            <h4 className="text-white/30 font-semibold uppercase tracking-widest text-xs mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              {[
                "Become a Member",
                "Prayer Request",
                "First Timers",
                "Online Community",
              ].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 font-semibold uppercase tracking-widest text-xs mb-4">
              Ministries
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              {[
                "Flamezone Missions",
                "FlameKids 'n' Teens",
                "Gathering of Flames",
              ].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 font-semibold uppercase tracking-widest text-xs mb-4">
              Media
            </h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a
                  href="https://www.youtube.com/@theflamezone_nation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors flex items-center gap-2"
                >
                  <PlayCircle className="w-4 h-4" /> Watch Online
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/theflamezoneglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition-colors flex items-center gap-2"
                >
                  <Send className="w-4 h-4" /> Sermons on Telegram
                </a>
              </li>
              <li>
                <a
                  href="mailto:theflamezonenation@gmail.com"
                  className="hover:text-red-500 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" /> theflamezonenation@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.facebook.com/theflamezonenation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/30 hover:text-red-500 transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/theflamezone_nation?igsh=MTR0em16ODI1bDQxMw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/30 hover:text-red-500 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/flamezonenation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-white/30 hover:text-red-500 transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} The Flamezone Nation. All rights
            reserved.
          </p>
          <p className="text-white/25 text-xs">Built for Kingdom impact.</p>
        </div>
      </footer>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-red-600 text-xs font-bold uppercase tracking-[0.2em]">
      <span className="w-6 h-px bg-red-600 inline-block" />
      {children}
    </span>
  );
}

function InfoCard({
  icon,
  title,
  text,
  cardBg,
  border,
  subtext,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  cardBg: string;
  border: string;
  subtext: string;
}) {
  return (
    <div
      className={`${cardBg} border ${border} rounded-2xl p-7 hover:border-red-600/40 transition-colors`}
    >
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="font-bold text-base">{title}</h3>
      </div>
      <p className={`${subtext} text-sm leading-relaxed`}>{text}</p>
    </div>
  );
}
