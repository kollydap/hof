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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Gatherings", href: "#gatherings" },
  { label: "Trybe", href: "#trybe" },
  { label: "Pastor", href: "#pastor" },
  { label: "Ministries", href: "#ministries" },
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
    ? dark ? "bg-[#0a0a0a]/95 shadow-lg shadow-black/30" : "bg-white/95 shadow-lg shadow-black/10"
    : "bg-transparent";

  return (
    <div className={`${bg} ${text} min-h-screen font-[family-name:var(--font-poppins)]`}>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="shrink-0">
            <Image
              src="/images/logo_red.png"
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
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
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
              {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-1">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={`lg:hidden ${dark ? "bg-[#111]" : "bg-white border-t border-black/10"} px-6 py-4 flex flex-col gap-4`}>
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
        {/* Background accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: dark
              ? "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(220,38,38,0.12) 0%, transparent 70%)"
              : "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(220,38,38,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-600/40 text-red-500 text-xs font-semibold uppercase tracking-widest mb-8">
            <Flame className="w-3 h-3" />
            Apostolic · Mission-Minded · Teaching
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            Jesus In Us.<br />
            <span className="text-red-600">Jesus Through Us.</span>
          </h1>

          <p className={`text-lg md:text-xl ${subtext} max-w-2xl mx-auto leading-relaxed mb-10`}>
            We exist to raise a generation of God&apos;s representatives — men and
            women who carry Jesus within and express Him through their lives across
            territories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors"
            >
              Who We Are <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#trybe"
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-full border ${border} hover:border-red-600/60 ${subtext} hover:text-red-600 transition-colors`}
            >
              Join a Trybe
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className={`relative mt-20 w-full max-w-3xl mx-auto grid grid-cols-3 gap-px rounded-2xl overflow-hidden border ${border}`}>
          {STATS.map((s, i) => (
            <div key={i} className={`${cardBg} px-6 py-6 text-center`}>
              <p className="text-2xl font-bold text-red-600 mb-1">{s.value}</p>
              <p className={`text-xs font-medium ${subtext} uppercase tracking-wider`}>{s.label}</p>
            </div>
          ))}
        </div>

        <a href="#about" className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce ${subtext}`}>
          <ChevronDown className="w-5 h-5" />
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className={`py-24 px-6 ${dark ? "" : "bg-[#f7f7f7]"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Label>Who We Are</Label>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 mb-6">
                A Ministry Built<br />for <span className="text-red-600">Transformation</span>
              </h2>
              <p className={`${subtext} leading-relaxed mb-5`}>
                The Flamezone is an apostolic, mission-minded, and teaching ministry
                founded in 2022 by Apostle Desmond Omotoyosi. What began as a teen
                fellowship has grown into a full apostolic ministry with a clear mandate
                to disciple people, shape lives, and extend the influence of Christ
                across nations.
              </p>
              <p className={`${subtext} leading-relaxed mb-8`}>
                We are committed to knowing Christ deeply and making Him known across
                nations and cultures. Our focus is not just conversion, but
                transformation and deployment.
              </p>
              <a
                href="#pastor"
                className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all text-sm"
              >
                Meet our Lead Pastor <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <InfoCard
                icon={<Eye className="w-5 h-5 text-red-600" />}
                title="Our Vision"
                text="To raise God's representatives with Jesus in them, through them, across territories."
                cardBg={cardBg}
                border={border}
                subtext={subtext}
              />
              <InfoCard
                icon={<Globe className="w-5 h-5 text-red-600" />}
                title="Our Mission"
                text="To reach the unreached, unsaved & unchurched via intense missions — establishing Apostolic centres across territories for the expansion of the Kingdom."
                cardBg={cardBg}
                border={border}
                subtext={subtext}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Label>What We Do</Label>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Intentional Spiritual Growth</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: <BookOpen className="w-6 h-6 text-red-600" />, title: "In-Depth Teaching", desc: "Revelatory teaching of the Word — equipping believers with clarity, depth, and truth that transforms from the inside out." },
              { icon: <Wind className="w-6 h-6 text-red-600" />, title: "Transformative Prayer", desc: "Intense and transformative prayer gatherings that create real atmosphere and encounter with God." },
              { icon: <Send className="w-6 h-6 text-red-600" />, title: "Strategic Missions", desc: "Strategic outreach and mission expressions that take the Kingdom to territories and the unreached." },
            ].map((item) => (
              <div key={item.title} className={`${cardBg} border ${border} rounded-2xl p-8 hover:border-red-600/40 transition-colors group`}>
                <div className={`w-12 h-12 rounded-xl ${dark ? "bg-red-600/10" : "bg-red-50"} flex items-center justify-center mb-5 group-hover:bg-red-600/20 transition-colors`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className={`${subtext} text-sm leading-relaxed`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GATHERINGS */}
      <section id="gatherings" className={`py-24 px-6 ${dark ? "bg-[#111]" : "bg-[#f7f7f7]"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Label>Our Gatherings</Label>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5">
                This Is Not<br />
                <span className="text-red-600">Routine Church.</span>
              </h2>
              <p className={`${subtext} leading-relaxed mb-6 text-lg`}>
                This is a place of encounter, alignment, and activation. Our services
                are marked by the active manifestation of the Spirit of God.
              </p>
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
                  src="/images/smile_lady.png"
                  alt="Flamezone gathering"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Music className="w-5 h-5 text-red-600" />, title: "Worship", desc: "A strong atmosphere of worship that ushers you into God's presence." },
                { icon: <Sparkles className="w-5 h-5 text-red-600" />, title: "Spiritual Gifts", desc: "The full operation of spiritual gifts in every gathering." },
                { icon: <Mic2 className="w-5 h-5 text-red-600" />, title: "Prophetic", desc: "Prophetic expressions and spiritual songs that build and edify." },
                { icon: <Zap className="w-5 h-5 text-red-600" />, title: "Miracles", desc: "Tangible, miraculous encounters with God." },
              ].map((item) => (
                <div key={item.title} className={`${cardBg} border ${border} rounded-xl p-5 hover:border-red-600/40 transition-colors`}>
                  <div className="mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-sm mb-1.5">{item.title}</h4>
                  <p className={`${subtext} text-xs leading-relaxed`}>{item.desc}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Label>What We Believe</Label>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Our Core Convictions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", text: "Every expression of our lives finds its pattern in the works of Christ." },
              { n: "02", text: "The Word of God is the ultimate standard for doctrine and directives." },
              { n: "03", text: "Every believer has a unique Kingdom assignment, must be equipped for it, and must fulfil it." },
            ].map((item) => (
              <div key={item.n} className={`${cardBg} border ${border} rounded-2xl p-8 hover:border-red-600/30 transition-colors`}>
                <p className="text-5xl font-black text-red-600/20 mb-4 leading-none">{item.n}</p>
                <p className={`${subtext} leading-relaxed`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className={`py-24 px-6 ${dark ? "bg-[#111]" : "bg-[#f7f7f7]"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Label>Our Approach</Label>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              We Raise <span className="text-red-600">God&apos;s Representatives</span>
            </h2>
            <p className={`${subtext} mt-4 max-w-xl mx-auto`}>
              Being God&apos;s representative demands responsibility. At The Flamezone, we raise people who:
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { word: "REPLICATE", sub: "the life and character of Christ in every area of living" },
              { word: "REPRESENT", sub: "Him accurately in every sphere of influence and culture" },
              { word: "REPRODUCE", sub: "His influence and impact in the lives of others" },
            ].map((item) => (
              <div
                key={item.word}
                className="relative overflow-hidden rounded-2xl bg-red-600 p-10 text-white text-center group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30" />
                <div className="relative">
                  <p className="text-3xl font-black tracking-wider mb-3">{item.word}</p>
                  <p className="text-white/80 text-sm leading-relaxed">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <p className={`mt-12 text-center ${subtext} italic text-lg max-w-xl mx-auto`}>
            &ldquo;You will be stretched. You will be built. You will be sent.
            This is more than a ministry.&rdquo;
          </p>
        </div>
      </section>

      {/* PASTOR */}
      <section id="pastor" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Label>Our Lead Pastor</Label>
          <div className="grid lg:grid-cols-2 gap-16 mt-10 items-start">
            <div>
              <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-red-950/30 to-red-900/10 border border-red-600/20">
                <Image
                  src="/images/dez.png"
                  alt="Apostle Desmond Omotoyosi"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-1">Apostle Desmond Omotoyosi</h2>
              <p className="text-red-600 font-semibold uppercase tracking-widest text-sm mb-6">
                Lead Pastor · The Flamezone
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Visionary Leader", "Veterinary Doctor", "Gospel Songwriter", "Author · 3 Books"].map((b) => (
                  <span key={b} className={`px-3 py-1 text-xs font-semibold rounded-full border ${border} ${subtext}`}>{b}</span>
                ))}
              </div>
              <div className={`space-y-4 ${subtext} leading-relaxed text-sm`}>
                <p>
                  Apostle Desmond Omotoyosi is a visionary leader, transformational
                  coach, and purpose-driven minister committed to raising a generation
                  of believers who are spiritually empowered, intellectually sound, and
                  practically equipped to represent God effectively in every sphere of life.
                </p>
                <p>
                  As the Lead Pastor of The Flamezone and Convener of the Gathering of
                  Flames, he carries a divine mandate centered on building God&apos;s
                  representatives who are liberated, discipled, and equipped. His ministry
                  is marked by depth, clarity, and a passionate pursuit of spiritual
                  awakening, discipleship, and kingdom influence.
                </p>
                <p>
                  Beyond ministry, Apostle Desmond is a veterinary doctor, founder of
                  Pawzle360, a gifted gospel songwriter, and the author of{" "}
                  <em>Prayer Fuel</em>, <em>Friendship as an Altar of Revival</em>, and{" "}
                  <em>Hey Purpose, Where Are You?</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRYBE */}
      <section id="trybe" className={`py-24 px-6 ${dark ? "bg-[#111]" : "bg-[#f7f7f7]"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Label>Community</Label>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4 mb-5">
                Join a <span className="text-red-600">Flamezone Trybe</span>
              </h2>
              <p className={`${subtext} leading-relaxed mb-5`}>
                A Flamezone Trybe is a small family of 7 to 15 disciples meeting in
                homes, apartments, or spaces close to where you live. Intentionally
                small so everyone is seen, heard, and shaped.
              </p>
              <p className={`${subtext} leading-relaxed mb-8`}>
                It is not a crowd. It is a family where faith is practiced, friendships
                are built, and lives are strengthened through consistent community.
              </p>
              <a
                href="mailto:theflamezonenation@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors"
              >
                Find a Trybe Near You <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-4">
              {[
                { icon: <TrendingUp className="w-5 h-5 text-red-600" />, title: "Accountability that Builds Strength", desc: "We sharpen each other. Growth is intentional and consistent." },
                { icon: <Heart className="w-5 h-5 text-red-600" />, title: "Genuine Care and Support", desc: "Needs are not ignored. People are seen, supported, and strengthened." },
                { icon: <CheckCircle2 className="w-5 h-5 text-red-600" />, title: "Visible Spiritual Growth", desc: "Faith becomes active, not theoretical. Lives begin to reflect Christ clearly." },
                { icon: <MapPin className="w-5 h-5 text-red-600" />, title: "Expansion of Reach", desc: "Church extends beyond a building — into homes, streets, and cities." },
              ].map((item) => (
                <div key={item.title} className={`flex gap-4 p-5 ${cardBg} border ${border} rounded-xl hover:border-red-600/40 transition-colors`}>
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className={`${subtext} text-sm leading-relaxed`}>{item.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mt-4">Real People. Real Community.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/a_lady.png", alt: "Flamezone community member" },
              { src: "/images/lady1.png", alt: "Flamezone community member" },
              { src: "/images/lady2.png", alt: "Flamezone community member" },
              { src: "/images/two_lady.png", alt: "Flamezone community members" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Ways to Get Involved</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Flamezone Missions", desc: "Strategic mission expressions reaching the unreached across territories.", icon: <Globe className="w-6 h-6 text-red-600" /> },
              { title: "FlameKids & Teens", desc: "Nurturing the next generation in faith, identity, and Kingdom purpose.", icon: <Users className="w-6 h-6 text-red-600" /> },
              { title: "Gathering of Flames", desc: "A convergence of believers for deeper encounter, alignment, and activation.", icon: <Flame className="w-6 h-6 text-red-600" /> },
            ].map((item) => (
              <div key={item.title} className={`${cardBg} border ${border} rounded-2xl p-8 hover:border-red-600/40 transition-colors group cursor-pointer`}>
                <div className={`w-12 h-12 rounded-xl ${dark ? "bg-red-600/10" : "bg-red-50"} flex items-center justify-center mb-5 group-hover:bg-red-600/20 transition-colors`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className={`${subtext} text-sm leading-relaxed mb-4`}>{item.desc}</p>
                <span className="text-red-600 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GIVE */}
      <section id="give" className={`py-24 px-6 ${dark ? "bg-[#111]" : "bg-[#f7f7f7]"}`}>
        <div className="max-w-3xl mx-auto text-center">
          <Label>Partner With Us</Label>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Give to The Flamezone
          </h2>
          <p className={`${subtext} mb-12 max-w-lg mx-auto`}>
            Your generosity fuels the mission — reaching the unreached, building
            Kingdom communities, and sending believers into territories.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { label: "Offerings", icon: <HandCoins className="w-7 h-7" />, primary: false },
              { label: "Building Project", icon: <Building2 className="w-7 h-7" />, primary: true },
              { label: "Mission Projects", icon: <Globe className="w-7 h-7" />, primary: false },
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

      {/* MAILING LIST */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <Label>Stay Connected</Label>
          <h2 className="text-4xl font-bold mt-4 mb-3">Join Our Mailing List</h2>
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
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
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
      <footer className={`${dark ? "bg-[#080808] border-t border-white/5" : "bg-[#111] border-t border-black/10"} py-16 px-6`}>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo_red.png"
                alt="The Flamezone"
                width={160}
                height={36}
                className="object-contain h-9 w-auto"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Jesus In Us. Jesus Through Us.
            </p>
          </div>

          <div>
            <h4 className="text-white/30 font-semibold uppercase tracking-widest text-xs mb-4">Connect</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              {["Become a Member", "Prayer Request", "First Timers", "Online Community"].map((l) => (
                <li key={l}><a href="#" className="hover:text-red-500 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 font-semibold uppercase tracking-widest text-xs mb-4">Ministries</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              {["Flamezone Missions", "FlameKids & Teens", "Gathering of Flames"].map((l) => (
                <li key={l}><a href="#" className="hover:text-red-500 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 font-semibold uppercase tracking-widest text-xs mb-4">Media</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>
                <a href="https://www.youtube.com/@theflamezone_nation" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors flex items-center gap-2">
                  <PlayCircle className="w-4 h-4" /> Watch Online
                </a>
              </li>
              <li>
                <a href="https://t.me/theflamezoneglobal" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors flex items-center gap-2">
                  <Send className="w-4 h-4" /> Sermons on Telegram
                </a>
              </li>
              <li>
                <a href="mailto:theflamezonenation@gmail.com" className="hover:text-red-500 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" /> theflamezonenation@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-5">
              <a href="#" aria-label="Facebook" className="text-white/30 hover:text-red-500 transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white/30 hover:text-red-500 transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} The Flamezone Nation. All rights reserved.
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
  icon, title, text, cardBg, border, subtext,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  cardBg: string;
  border: string;
  subtext: string;
}) {
  return (
    <div className={`${cardBg} border ${border} rounded-2xl p-7 hover:border-red-600/40 transition-colors`}>
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="font-bold text-base">{title}</h3>
      </div>
      <p className={`${subtext} text-sm leading-relaxed`}>{text}</p>
    </div>
  );
}
