"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Wifi,
  Car,
  UtensilsCrossed,
  Clock,
  PawPrint,
  Snowflake,
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronDown,
  ArrowLeft,
  Users,
  CalendarDays,
  Landmark,
  Church,
  Ship,
  Mountain,
  Train,
  Tv,
  Bath,
  BriefcaseBusiness,
} from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const HOTEL_IMAGES = {
  hero: "/hotel-exterior.png",
  classique: "/chambre-classique.png",
  twin: "/chambre-twin.png",
  triple: "/chambre-triple.png",
  location: "/location-arques.png",
};

const AMENITIES = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Free Parking" },
  { icon: UtensilsCrossed, label: "Breakfast €6/pp" },
  { icon: Clock, label: "24h Reception" },
  { icon: PawPrint, label: "Pet Friendly" },
  { icon: Snowflake, label: "Air Conditioning" },
  { icon: Tv, label: "Flat-screen TV" },
  { icon: Bath, label: "Private Bathroom" },
  { icon: BriefcaseBusiness, label: "Desk Area" },
];

const ROOMS = [
  {
    name: "Chambre Classique",
    desc: "A comfortable double room with warm lighting, flat-screen TV, private bathroom with shower, desk area, and free Wi-Fi.",
    price: "From €40",
    image: HOTEL_IMAGES.classique,
  },
  {
    name: "Chambre Twin",
    desc: "Two separate beds with overhead storage, ideal for friends or colleagues. Includes TV, private bathroom, desk, and Wi-Fi.",
    price: "From €42",
    image: HOTEL_IMAGES.twin,
  },
  {
    name: "Chambre Triple",
    desc: "A double bed with an additional overhead bunk — perfect for families or small groups. Full amenities included.",
    price: "From €45",
    image: HOTEL_IMAGES.triple,
  },
];

const NEARBY = [
  { icon: Landmark, name: "La Coupole Museum", distance: "7 km" },
  { icon: Church, name: "Saint-Omer Cathedral", distance: "15 min drive" },
  { icon: Ship, name: "Dunkirk", distance: "30 min drive" },
  { icon: Mountain, name: "Abbey of Saint Bertin", distance: "6 km" },
  {
    icon: Train,
    name: "Tourist Railway of the Aa Valley",
    distance: "20 min walk",
  },
];

function BookingWidget() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fmt = (d: Date) => d.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(fmt(today));
  const [checkOut, setCheckOut] = useState(fmt(tomorrow));
  const [guests, setGuests] = useState(2);
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fade}
      custom={4}
      className="relative z-10 px-3 md:px-6 pb-10 md:pb-20"
    >
      <div className="bg-white/80 md:bg-white/90 backdrop-blur-xl rounded-2xl p-3 md:p-5 max-w-2xl mx-auto shadow-xl shadow-black/10 border border-white/20">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4 md:py-6"
          >
            <p className="text-[#1a1a1a] font-medium text-sm md:text-base">
              This is a preview — booking is not active yet.
            </p>
            <p className="text-[#1a1a1a]/40 text-xs mt-1">
              {checkIn} → {checkOut} · {guests}{" "}
              {guests === 1 ? "guest" : "guests"}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-3 text-xs text-[#1a1a1a]/50 underline underline-offset-2"
            >
              Try again
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            <div className="bg-black/[0.03] rounded-xl p-2.5 md:p-3.5 text-left">
              <label className="text-[9px] md:text-[10px] uppercase tracking-wider text-[#1a1a1a]/40 block mb-0.5 md:mb-1">
                Check-in
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-transparent text-[#1a1a1a]/80 text-xs md:text-sm outline-none cursor-pointer"
              />
            </div>
            <div className="bg-black/[0.03] rounded-xl p-2.5 md:p-3.5 text-left">
              <label className="text-[9px] md:text-[10px] uppercase tracking-wider text-[#1a1a1a]/40 block mb-0.5 md:mb-1">
                Check-out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-[#1a1a1a]/80 text-xs md:text-sm outline-none cursor-pointer"
              />
            </div>
            <div className="bg-black/[0.03] rounded-xl p-2.5 md:p-3.5 text-left">
              <label className="text-[9px] md:text-[10px] uppercase tracking-wider text-[#1a1a1a]/40 block mb-0.5 md:mb-1">
                Guests
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-6 h-6 rounded-full bg-black/[0.06] text-[#1a1a1a]/60 text-xs flex items-center justify-center hover:bg-black/10 transition-colors"
                >
                  −
                </button>
                <span className="text-[#1a1a1a]/80 text-xs md:text-sm min-w-[1rem] text-center">
                  {guests}
                </span>
                <button
                  onClick={() => setGuests(Math.min(6, guests + 1))}
                  className="w-6 h-6 rounded-full bg-black/[0.06] text-[#1a1a1a]/60 text-xs flex items-center justify-center hover:bg-black/10 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => setSubmitted(true)}
              className="bg-[#1a1a1a] text-white font-medium rounded-xl px-4 py-3 md:py-3.5 text-xs md:text-sm hover:bg-[#333] transition-colors col-span-2 md:col-span-1"
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function PreviewPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#1a1a1a]">
      {/* ─── Floating back button ─── */}
      <Link
        href="/"
        className="fixed top-5 left-5 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-md text-[#1a1a1a]/70 hover:text-[#1a1a1a] px-4 py-2 rounded-full text-xs font-medium transition-colors border border-black/5 shadow-sm"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Proposal
      </Link>

      {/* ─── DEMO ribbon ─── */}
      <div className="fixed top-5 right-5 z-50 bg-[#1a1a1a] text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase shadow-sm">
        Preview
      </div>

      {/* ═══════════════════════════════════════════
          Section 1 — Hero
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <Image
          src={HOTEL_IMAGES.hero}
          alt="Good Night Hôtel — exterior view at sunset"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        <motion.div
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center px-6 max-w-3xl mx-auto flex-1 flex flex-col justify-center pt-20 md:pt-0"
        >
          <motion.p
            variants={fade}
            custom={0}
            className="text-[11px] tracking-[0.45em] uppercase text-white/70 mb-5 font-light drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
          >
            Bienvenue au
          </motion.p>
          <motion.h1
            variants={fade}
            custom={1}
            className="font-serif text-4xl md:text-7xl font-normal mb-4 leading-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
          >
            Good Night Hôtel
          </motion.h1>
          <motion.p
            variants={fade}
            custom={2}
            className="text-base md:text-xl text-white/80 mb-3 font-light drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]"
          >
            Arques, Pas-de-Calais — France
          </motion.p>
          <motion.div
            variants={fade}
            custom={3}
            className="flex items-center justify-center gap-1 mb-8 md:mb-12"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Star
                key={i}
                className="w-3.5 h-3.5 text-white/70"
                fill="currentColor"
              />
            ))}
            <span className="text-white/40 text-xs ml-2 tracking-wide">
              762 avis · 6.9 / 10
            </span>
          </motion.div>
        </motion.div>

        {/* Booking Widget — pinned to bottom of hero */}
        <BookingWidget />

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          Section 2 — Rooms & Amenities
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fade}
              custom={0}
              className="text-[11px] tracking-[0.35em] uppercase text-[#1a1a1a]/30 mb-3"
            >
              Nos Chambres
            </motion.p>
            <motion.h2
              variants={fade}
              custom={1}
              className="font-serif text-3xl md:text-5xl font-normal mb-5"
            >
              Accommodation
            </motion.h2>
            <motion.p
              variants={fade}
              custom={2}
              className="text-[#1a1a1a]/50 max-w-lg mx-auto leading-relaxed"
            >
              64 rooms equipped with a private bathroom with shower, WC and
              sink, a television, a desk area, and free Wi-Fi access.
            </motion.p>
          </motion.div>

          {/* Room Cards */}
          <div className="grid md:grid-cols-3 gap-7 mb-24">
            {ROOMS.map((room, i) => (
              <motion.div
                key={room.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fade}
                custom={i}
                className="group rounded-2xl overflow-hidden bg-white border border-black/[0.06] shadow-sm hover:shadow-md transition-shadow duration-500"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-normal mb-2">
                    {room.name}
                  </h3>
                  <p className="text-sm text-[#1a1a1a]/45 mb-4 leading-relaxed">
                    {room.desc}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-black/[0.04]">
                    <span className="text-[#1a1a1a] font-medium text-sm">
                      {room.price}
                      <span className="text-[#1a1a1a]/30 font-normal">
                        {" "}
                        / night
                      </span>
                    </span>
                    <button className="text-xs bg-[#f5f5f3] hover:bg-[#eaeae8] text-[#1a1a1a]/70 px-4 py-2 rounded-full transition-colors font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Amenities */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={fade}
              custom={0}
              className="text-center text-[11px] tracking-[0.35em] uppercase text-[#1a1a1a]/30 mb-10"
            >
              Équipements
            </motion.p>
            <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
              {AMENITIES.map((a, i) => (
                <motion.div
                  key={a.label}
                  variants={fade}
                  custom={i}
                  className="flex flex-col items-center gap-2.5 py-5 px-2 rounded-xl bg-white border border-black/[0.04]"
                >
                  <a.icon className="w-[18px] h-[18px] text-[#1a1a1a]/35" />
                  <span className="text-[10px] text-[#1a1a1a]/50 text-center leading-tight">
                    {a.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          Section 3 — Location & Nearby
      ═══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-start">
            {/* Image side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fade}
              custom={0}
              className="relative rounded-2xl overflow-hidden h-[420px] md:h-[540px] shadow-lg"
            >
              <Image
                src={HOTEL_IMAGES.location}
                alt="Canal in Pas-de-Calais, northern France"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-white/80" />
                  <span className="text-sm font-medium text-white">
                    Good Night Hôtel
                  </span>
                </div>
                <p className="text-sm text-white/60">
                  ZAC Du Lobel, 45 Rue Jean Baptiste Colbert
                  <br />
                  62510 Arques, Pas-de-Calais, France
                </p>
              </div>
            </motion.div>

            {/* Info side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p
                variants={fade}
                custom={0}
                className="text-[11px] tracking-[0.35em] uppercase text-[#1a1a1a]/30 mb-3"
              >
                Emplacement
              </motion.p>
              <motion.h2
                variants={fade}
                custom={1}
                className="font-serif text-3xl md:text-4xl font-normal mb-6"
              >
                Perfectly Situated
              </motion.h2>
              <motion.p
                variants={fade}
                custom={2}
                className="text-[#1a1a1a]/45 mb-8 leading-relaxed"
              >
                Conveniently located near the A26 motorway in the heart of
                Pas-de-Calais, Good Night Hôtel sits just 2.5 km from the
                centre of Arques and 6 km from Saint-Omer. An ideal base for
                discovering the canals, museums, and coastal towns of Northern
                France.
              </motion.p>

              {/* Nearby attractions */}
              <div className="space-y-3 mb-10">
                {NEARBY.map((place, i) => (
                  <motion.div
                    key={place.name}
                    variants={fade}
                    custom={i + 3}
                    className="flex items-center gap-4 p-3.5 rounded-xl bg-[#FAFAF8] border border-black/[0.04]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 border border-black/[0.04]">
                      <place.icon className="w-[18px] h-[18px] text-[#1a1a1a]/40" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{place.name}</p>
                      <p className="text-xs text-[#1a1a1a]/35">
                        {place.distance}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact */}
              <motion.div
                variants={fade}
                custom={8}
                className="space-y-3.5 pt-7 border-t border-black/[0.06]"
              >
                <p className="text-[11px] tracking-[0.35em] uppercase text-[#1a1a1a]/30 mb-4">
                  Contact
                </p>
                <div className="flex items-center gap-3 text-sm text-[#1a1a1a]/55">
                  <Phone className="w-4 h-4 text-[#1a1a1a]/25" />
                  <span>+(33) 321 938 120</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#1a1a1a]/55">
                  <Mail className="w-4 h-4 text-[#1a1a1a]/25" />
                  <span>sales@good-night-hotel.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#1a1a1a]/55">
                  <MapPin className="w-4 h-4 text-[#1a1a1a]/25" />
                  <span>
                    ZAC Du Lobel, 45 Rue Jean Baptiste Colbert, 62510 Arques
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#1a1a1a]/55">
                  <Clock className="w-4 h-4 text-[#1a1a1a]/25" />
                  <span>Check-in 17:00–21:00 · Check-out before 11:00</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Back to Proposal ─── */}
      <section className="py-20 px-6 text-center bg-[#FAFAF8]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={fade}
            custom={0}
            className="text-[#1a1a1a]/25 text-sm mb-6"
          >
            This is a preview of what your new website could look like.
          </motion.p>
          <motion.div variants={fade} custom={1}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-[#333] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Proposal
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-black/[0.04] text-center bg-[#FAFAF8]">
        <p className="text-[11px] text-[#1a1a1a]/20 tracking-wide">
          © 2026 Good Night Hôtel — ZAC Du Lobel, 45 Rue Jean Baptiste
          Colbert, 62510 Arques, France
        </p>
      </footer>
    </main>
  );
}
