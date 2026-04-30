"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, Flame, Sun, Moon, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Esther Joshua",
    year: "2021",
    excerpt:
      "Flamezone is the family I never knew I needed. I am living proof that God is in Flamezone.",
    story: `I came to Flamezone in 2021, back when it was still known as HOF. Then in 2022, Flamezone officially started. And honestly, when I came, I was just a child, angry at the world. Because truly, life had dealt with me in ways I didn't understand. I was visionless, purposeless… I just wanted to enjoy life, do you get?

Deep down, I always knew there was more. But I didn't think I was capable of that "more." I felt too soft, too unsure. I loved God, yes, but I was far from Him in practice. There was no drive, no fire. I wasn't passionate about purpose, or church, or being a strong, visionary believer. That wasn't me at all.

But Flamezone… Flamezone changed everything.

One of the first things God told me when I came into Flamezone was this: "I am the Lord who still makes beautiful pieces out of broken portraits." And that word has become my reality.

Flamezone has been my process.

I have been remade.

My life is unfolding so beautifully now, even the broken parts. It's like light is shining through every crack, every place that once hurts. Flamezone became something I never even saw coming for me. You know how life just happens to people? For me, it felt different. It felt like I didn't just stumble into Flamezone, I happened to Flamezone, and Flamezone happened to me.

And it has been a beautiful collision… one that is going somewhere great.

My Flamezone experience is not something I can even finish writing, because the more I try to write, the more comes to mind. It's endless.

Flamezone is the family I never knew I needed.

I've met people who have stretched me, pushed me, and called me higher. People who made me realize that destiny is serious, and I cannot afford to lose my life to carelessness. I cannot afford to lose God. I cannot afford to be small. I have to stay with God. I have to become, so that my life, and even the lives connected to me, can make sense.

In Flamezone, I have come to know that there is so much more to me.

And how do I even begin to talk about my pastor, my spiritual father? The way he has poured into me… He is a vision pusher. You know, the kind that will hold your hand and help you see what you couldn't see for yourself. Even when you try to explain your vision, he stretches it, fleshes it out, and breathes life into it.

I have seen people come into Flamezone empty; spiritually dead, with dead visions, dead opportunities, and I have watched them come alive again.

Flamezone is indeed a labour room. Because truly, destinies are being birthed here.

And I am one of them.

I am living proof that God is in Flamezone. You don't have to argue about it, just look at my life. Look at who I was, and look at who I am becoming. It is clear that God is here.

This is my testimony.
This is my Flamezone experience.
This is my love story.

And I love Flamezone so much.`,
  },
];

export default function ExperiencePage() {
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState(0);

  const bg = dark ? "bg-[#0a0a0a]" : "bg-white";
  const text = dark ? "text-white" : "text-[#111]";
  const subtext = dark ? "text-white/60" : "text-[#555]";
  const cardBg = dark ? "bg-[#161616]" : "bg-[#f7f7f7]";
  const border = dark ? "border-white/10" : "border-black/10";

  const testimonial = TESTIMONIALS[active];

  return (
    <div className={`${bg} ${text} min-h-screen font-[family-name:var(--font-poppins)]`}>
      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${dark ? "bg-[#0a0a0a]/95" : "bg-white/95"} backdrop-blur-sm border-b ${border}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className={`flex items-center gap-2 text-sm font-medium ${subtext} hover:text-red-600 transition-colors`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
          <a href="/" className="shrink-0">
            <Image
              src={dark ? "/images/logo_red.png" : "/images2/dklogo.png"}
              alt="The Flamezone"
              width={140}
              height={32}
              className="object-contain h-8 w-auto"
              priority
            />
          </a>
          <button
            onClick={() => setDark(!dark)}
            className={`p-2 rounded-full ${dark ? "text-white/50 hover:text-white" : "text-black/40 hover:text-black"} transition-colors`}
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="relative pt-32 pb-16 px-6 text-center overflow-hidden"
        style={{
          background: dark
            ? "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(220,38,38,0.10) 0%, transparent 70%)"
            : "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(220,38,38,0.06) 0%, transparent 70%)",
        }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-600/40 text-red-500 text-xs font-semibold uppercase tracking-widest mb-6">
          <Flame className="w-3 h-3" />
          Testimonials
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-[family-name:var(--font-bebas)] tracking-wide leading-[1] mb-4">
          My Flamezone <span className="text-red-600">Experience</span>
        </h1>
        <p className={`${subtext} max-w-xl mx-auto text-lg`}>
          Real stories. Real transformation. This is what God is doing in
          Flamezone.
        </p>
      </section>

      {/* MAIN TESTIMONY */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Quote card */}
          <div className={`${cardBg} border ${border} rounded-3xl p-8 md:p-12 mb-8`}>
            <Quote className="w-10 h-10 text-red-600/40 mb-6" />
            <div className={`space-y-5 ${subtext} leading-[1.9] text-base md:text-lg`}>
              {testimonial.story.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="font-bold text-base">{testimonial.name}</p>
                <p className={`text-sm ${subtext}`}>
                  Flamezone since {testimonial.year}
                </p>
              </div>
            </div>
          </div>

          {/* Share your story CTA */}
          <div
            className={`rounded-2xl p-8 text-center border ${border} ${cardBg}`}
          >
            <h3 className="font-bold text-xl mb-2">
              What&apos;s Your Flamezone Experience?
            </h3>
            <p className={`${subtext} text-sm mb-6 max-w-sm mx-auto`}>
              If Flamezone has changed your life, we&apos;d love to hear your
              story. Share your testimony with us.
            </p>
            <a
              href="mailto:theflamezonenation@gmail.com?subject=My Flamezone Experience"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors text-sm"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <footer className={`mt-16 py-8 px-6 border-t ${border}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="shrink-0">
            <Image
              src={dark ? "/images/logo_red.png" : "/images2/dklogo.png"}
              alt="The Flamezone"
              width={120}
              height={28}
              className="object-contain h-7 w-auto"
            />
          </a>
          <p className={`text-xs ${subtext}`}>
            © {new Date().getFullYear()} The Flamezone Nation. All rights
            reserved.
          </p>
          <a
            href="/"
            className="text-red-600 text-sm font-semibold hover:text-red-500 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </footer>
    </div>
  );
}
