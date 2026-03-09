"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Star,
  ArrowRight,
  Eye,
  Handshake,
} from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

function Divider() {
  return <hr className="my-12 border-t border-neutral-200" />;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-neutral-900 mb-6">
      {children}
    </h2>
  );
}

function Bullet({
  icon,
  children,
}: {
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3 items-start text-neutral-700 leading-relaxed">
      <span className="mt-1 shrink-0 text-neutral-400">
        {icon ?? (
          <span className="block w-1.5 h-1.5 mt-1.5 rounded-full bg-neutral-400" />
        )}
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function ProposalPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[750px] mx-auto px-6 md:px-8 py-16 md:py-24">
        {/* ─── Cover ─── */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fade}
          custom={0}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-neutral-400 mb-10">
            Zeropoint Labs
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-4">
            Digital Growth Proposal
          </h1>
          <p className="text-lg text-neutral-500 mb-8">
            Good Night Hôtel — Arques, France
          </p>
          <div className="inline-flex gap-8 text-sm text-neutral-400">
            <span>March 2026</span>
            <span className="text-neutral-200">|</span>
            <span>Confidential</span>
          </div>
        </motion.header>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fade}
          custom={1}
          className="grid grid-cols-2 gap-6 text-sm mb-16 border border-neutral-100 rounded-lg p-6"
        >
          <div>
            <p className="text-neutral-400 uppercase tracking-wider text-xs mb-1">
              Prepared for
            </p>
            <p className="text-neutral-800 font-medium">Good Night Hôtel</p>
            <p className="text-neutral-500">
              45 Rue Jean Baptiste Colbert
              <br />
              62510 Arques, France
            </p>
          </div>
          <div>
            <p className="text-neutral-400 uppercase tracking-wider text-xs mb-1">
              Prepared by
            </p>
            <p className="text-neutral-800 font-medium">Zeropoint Labs</p>
            <p className="text-neutral-500">
              Digital Marketing &amp; Web Development
            </p>
            <p className="text-neutral-400 text-xs mt-1">
              <a
                href="https://www.zeropoint-labs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-neutral-600 transition-colors"
              >
                www.zeropoint-labs.com
              </a>
              <br />
              <a
                href="mailto:info@zeropoint-labs.com"
                className="underline underline-offset-2 hover:text-neutral-600 transition-colors"
              >
                info@zeropoint-labs.com
              </a>
            </p>
          </div>
        </motion.div>

        <Divider />

        {/* ─── Executive Summary ─── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
          custom={2}
        >
          <SectionTitle>Executive Summary</SectionTitle>
          <p className="text-neutral-600 leading-relaxed mb-4">
            Good Night Hôtel is a well-established 2-star property in Arques
            with <strong>64 rooms</strong>, a prime location near the A26
            motorway, and a solid reputation built over{" "}
            <strong>760+ guest reviews</strong> on major booking platforms.
            Guests consistently praise the{" "}
            <strong>staff (rated 8.4/10)</strong> and{" "}
            <strong>value for money</strong>, with rooms starting from
            approximately <strong>€60/night</strong>.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-4">
            However, the hotel&apos;s digital presence is significantly
            underperforming. The current website has not been meaningfully
            updated in over a decade — its booking widget still references dates
            from 2012–2014. Social media channels exist but lack a consistent
            content strategy, there is no paid advertising in place, and online
            listings are not fully optimised.
          </p>
          <p className="text-neutral-600 leading-relaxed">
            This proposal outlines a focused{" "}
            <strong>3-month engagement</strong> combining hands-on execution
            with strategic consulting to modernise the hotel&apos;s digital
            footprint, increase visibility on search engines and booking
            platforms, and establish a sustainable marketing system that drives
            new bookings.
          </p>
        </motion.section>

        <Divider />

        {/* ─── Current Situation ─── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
          custom={3}
        >
          <SectionTitle>Current Situation Analysis</SectionTitle>

          <div className="space-y-6">
            <div className="rounded-lg border border-amber-100 bg-amber-50/50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <h3 className="font-semibold text-neutral-800 text-sm">
                  Areas Requiring Attention
                </h3>
              </div>
              <ul className="space-y-3 text-sm">
                <Bullet>
                  <strong>Website:</strong> Severely outdated design with a
                  booking form that only goes up to 2014. No mobile
                  responsiveness, minimal content, and no SEO optimisation.
                </Bullet>
                <Bullet>
                  <strong>Social Media:</strong> A Facebook page and an
                  Instagram account (
                  <a
                    href="https://www.instagram.com/goodnight.hotel.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-800 underline underline-offset-2"
                  >
                    @goodnight.hotel.fr
                  </a>
                  ) exist but with limited, inconsistent activity — only 22
                  posts and 43 followers on Instagram. No cohesive content
                  strategy or visual identity across channels.
                </Bullet>
                <Bullet>
                  <strong>Online Listings:</strong> Present on Booking.com
                  (6.8/10, 760+ reviews) but listings are not optimised with
                  professional photos or compelling descriptions.
                </Bullet>
                <Bullet>
                  <strong>Advertising:</strong> No paid advertising, no Google
                  Ads, and no presence strategy for Google Maps or local search.
                </Bullet>
                <Bullet>
                  <strong>Google Business:</strong> Profile not fully optimised —
                  missing regular posts, updated photos, and review management
                  strategy.
                </Bullet>
              </ul>
            </div>

            <div className="rounded-lg border border-emerald-100 bg-emerald-50/50 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-emerald-500" />
                <h3 className="font-semibold text-neutral-800 text-sm">
                  Existing Strengths
                </h3>
              </div>
              <ul className="space-y-3 text-sm">
                <Bullet>
                  Staff rated <strong>8.4/10</strong> — exceptional service is
                  already in place.
                </Bullet>
                <Bullet>
                  Strong <strong>value for money</strong> perception with rooms
                  from ~€60/night including free parking and Wi-Fi.
                </Bullet>
                <Bullet>
                  Prime location near A26 motorway, Saint-Omer, La Coupole
                  Museum, and 30 minutes from Dunkirk — a natural stopover for
                  travellers heading to the Alps or southern France.
                </Bullet>
                <Bullet>
                  64 rooms with modern amenities: free Wi-Fi, free parking,
                  buffet breakfast, air conditioning.
                </Bullet>
                <Bullet>
                  Existing social media accounts provide a foundation to build
                  upon rather than starting from scratch.
                </Bullet>
              </ul>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ─── How We Work ─── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
          custom={3}
        >
          <SectionTitle>How We Work</SectionTitle>
          <div className="rounded-lg border border-blue-100 bg-blue-50/40 p-5 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Handshake className="w-4 h-4 text-blue-500" />
              <h3 className="font-semibold text-neutral-800 text-sm">
                Execution + Consulting
              </h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed mb-3">
              Our engagement is a combination of{" "}
              <strong>hands-on execution</strong> and{" "}
              <strong>strategic consulting</strong>. We will directly handle the
              core deliverables — website development, ad campaign creation,
              listing optimisation, and content production. At the same time, we
              provide ongoing consulting and guidance on areas where your team
              will play a role:
            </p>
            <ul className="space-y-2 text-sm">
              <Bullet
                icon={<CheckCircle2 className="w-4 h-4 text-blue-300" />}
              >
                <strong>Review management</strong>
              </Bullet>
              <Bullet
                icon={<CheckCircle2 className="w-4 h-4 text-blue-300" />}
              >
                <strong>Booking platform management</strong>
              </Bullet>
              <Bullet
                icon={<CheckCircle2 className="w-4 h-4 text-blue-300" />}
              >
                <strong>Content direction</strong>
              </Bullet>
              <Bullet
                icon={<CheckCircle2 className="w-4 h-4 text-blue-300" />}
              >
                <strong>Long-term strategy</strong>
              </Bullet>
            </ul>
          </div>
        </motion.section>

        <Divider />

        {/* ─── 3-Month Plan ─── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
          custom={4}
        >
          <SectionTitle>Our 3-Month Plan</SectionTitle>
          <p className="text-neutral-600 leading-relaxed mb-8">
            A phased approach that builds progressively — establishing
            foundations and launching ads from day one, then scaling and
            optimising for sustained growth.
          </p>

          <div className="space-y-8">
            {/* Month 1 */}
            <div className="relative pl-8 border-l-2 border-neutral-200">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center">
                <Globe className="w-3 h-3 text-white" />
              </div>
              <div className="pb-2">
                <p className="text-xs uppercase tracking-wider text-neutral-400 mb-1">
                  Month 1
                </p>
                <h3 className="font-semibold text-neutral-900 text-lg mb-3">
                  Foundation &amp; Launch
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                  Build a modern website, refresh social channels, optimise
                  listings, and launch initial paid advertising — all in
                  parallel.
                </p>
                <ul className="space-y-2 text-sm">
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Design and develop a new responsive website with integrated
                    booking functionality
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Refresh and optimise existing Facebook page and Instagram
                    account (@goodnight.hotel.fr) with updated visuals, bio, and
                    highlights
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Set up and optimise Google Business Profile with photos,
                    categories, and initial posts
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Create <strong>3–5 social media posts</strong> for the month:
                    room showcases, local attractions, breakfast highlights
                    (using existing photos and, if agreed, AI-generated visuals
                    to supplement)
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Professional listing optimisation on Booking.com with
                    improved descriptions and photo selection
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    <strong>Launch Google Ads</strong> — initial Search campaign
                    targeting hotel-related keywords for Arques, Saint-Omer, and
                    the A26 corridor (recommended starting budget: €250/month)
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Consulting on review response strategy and booking platform
                    pricing
                  </Bullet>
                </ul>
              </div>
            </div>

            {/* Month 2 */}
            <div className="relative pl-8 border-l-2 border-neutral-200">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center">
                <Eye className="w-3 h-3 text-white" />
              </div>
              <div className="pb-2">
                <p className="text-xs uppercase tracking-wider text-neutral-400 mb-1">
                  Month 2
                </p>
                <h3 className="font-semibold text-neutral-900 text-lg mb-3">
                  Scale &amp; Expand
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                  Scale the advertising strategy across more platforms, expand
                  listing coverage, and continue building social momentum.
                </p>
                <ul className="space-y-2 text-sm">
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    <strong>Scale Google Ads:</strong> Add Google Maps /
                    Local campaign alongside the existing Search campaign.
                    Review Month 1 data, adjust keywords and bids (recommended
                    budget increase to €300–400/month across both campaigns)
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    <strong>Explore Meta Ads:</strong> If budget allows, test a
                    Facebook/Instagram awareness campaign targeting travellers
                    in the region (€100–150/month)
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Set up and optimise listings on Hotels.com, Expedia, and
                    Trivago with professional descriptions
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Google Business Profile: weekly posts, respond-to-review
                    consulting, photo updates
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Create <strong>3–5 social media posts</strong> for the month
                    — seasonal content, behind-the-scenes, guest testimonials
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    First performance report with actionable insights and
                    recommendations
                  </Bullet>
                </ul>
              </div>
            </div>

            {/* Month 3 */}
            <div className="relative pl-8 border-l-2 border-neutral-200">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-neutral-900 flex items-center justify-center">
                <TrendingUp className="w-3 h-3 text-white" />
              </div>
              <div className="pb-2">
                <p className="text-xs uppercase tracking-wider text-neutral-400 mb-1">
                  Month 3
                </p>
                <h3 className="font-semibold text-neutral-900 text-lg mb-3">
                  Optimise &amp; Grow
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                  Analyse all performance data, refine campaigns based on
                  results, and explore advanced channels for sustained customer
                  acquisition.
                </p>
                <ul className="space-y-2 text-sm">
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Full performance analysis with ROI reporting across all
                    advertising campaigns
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Optimise ad spend allocation based on what is delivering the
                    best cost-per-booking across Google Search, Maps, and Meta
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Launch retargeting campaigns for website visitors who did not
                    complete a booking
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Design seasonal promotions and special offer packages
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Create <strong>3–5 social media posts</strong> for the month
                  </Bullet>
                  <Bullet
                    icon={<CheckCircle2 className="w-4 h-4 text-neutral-300" />}
                  >
                    Develop a TripAdvisor strategy to improve rating and
                    visibility
                  </Bullet>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ─── Paid Advertising Details ─── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
          custom={4}
        >
          <SectionTitle>Paid Advertising Strategy</SectionTitle>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Advertising begins in Month 1 and scales progressively. The ad
            budget is paid directly to the platforms (Google, Meta) and is{" "}
            <strong>separate from our monthly fee</strong>. Campaign creation,
            management, and optimisation are included in our fee.
          </p>

          <div className="overflow-hidden rounded-lg border border-neutral-200 text-sm mb-6">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-50 text-left">
                  <th className="px-5 py-3 font-medium text-neutral-500 text-xs uppercase tracking-wider">
                    Month
                  </th>
                  <th className="px-5 py-3 font-medium text-neutral-500 text-xs uppercase tracking-wider">
                    Platforms
                  </th>
                  <th className="px-5 py-3 font-medium text-neutral-500 text-xs uppercase tracking-wider">
                    Recommended Budget
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                <tr>
                  <td className="px-5 py-3 text-neutral-800 font-medium">
                    Month 1
                  </td>
                  <td className="px-5 py-3 text-neutral-600">
                    Google Search Ads
                  </td>
                  <td className="px-5 py-3 text-neutral-600">
                    €250/month
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 text-neutral-800 font-medium">
                    Month 2
                  </td>
                  <td className="px-5 py-3 text-neutral-600">
                    Google Search + Google Maps/Local
                    <br />
                    <span className="text-neutral-400">
                      + Meta Ads (optional test)
                    </span>
                  </td>
                  <td className="px-5 py-3 text-neutral-600">
                    €300–400/month
                    <br />
                    <span className="text-neutral-400">
                      + €100–150 Meta (optional)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-3 text-neutral-800 font-medium">
                    Month 3
                  </td>
                  <td className="px-5 py-3 text-neutral-600">
                    Best-performing channels + Retargeting
                  </td>
                  <td className="px-5 py-3 text-neutral-600">
                    €400–500/month
                    <br />
                    <span className="text-neutral-400">
                      (scaled only if results justify it)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-neutral-50 rounded-lg text-xs text-neutral-500 leading-relaxed">
            <strong>How it works:</strong> We handle all campaign setup,
            keyword research, ad copywriting, bid management, and ongoing
            optimisation. You are billed directly by Google/Meta for the ad
            spend. We report on performance monthly and consult with your team
            before making any budget changes. Increases only happen when the
            data shows a clear return — nothing is scaled without your
            approval.
          </div>
        </motion.section>

        <Divider />

        {/* ─── Social Media Approach ─── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
          custom={5}
        >
          <SectionTitle>Social Media Approach</SectionTitle>
          <p className="text-neutral-600 leading-relaxed mb-4 text-sm">
            We will produce <strong>3 to 5 posts per month</strong> across your
            social channels (Instagram and Facebook), consistent throughout the
            engagement. Content will include room showcases, local attractions,
            breakfast highlights, seasonal promotions, and behind-the-scenes
            moments.
          </p>
          <p className="text-neutral-600 leading-relaxed mb-4 text-sm">
            The number of posts depends on the{" "}
            <strong>images available to us</strong>. We will work with photos
            from the hotel, images we source, and — if you agree —{" "}
            <strong>AI-generated visuals</strong> to supplement the library
            where needed (e.g. lifestyle imagery, seasonal graphics, or
            promotional banners). We will always seek your approval before
            publishing AI-generated content.
          </p>
          <p className="text-neutral-600 leading-relaxed text-sm">
            Beyond the posts we create, we will also{" "}
            <strong>consult on your organic social strategy</strong>: what to
            share in stories, how to engage with followers, and how to build a
            consistent visual identity that reflects the hotel&apos;s character.
          </p>
        </motion.section>

        <Divider />

        {/* ─── Deliverables ─── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
          custom={5}
        >
          <SectionTitle>Deliverables</SectionTitle>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-neutral-600">
            {[
              "Fully responsive new website with booking integration",
              "Facebook & Instagram refresh with updated visuals",
              "Google Business Profile setup & optimisation",
              "3–5 social media posts per month (9–15 total)",
              "Booking.com listing optimisation",
              "Hotels.com & Expedia listing setup",
              "Google Ads Search campaign (Month 1 onwards)",
              "Google Ads Maps / Local campaign (Month 2 onwards)",
              "Meta Ads test campaign (Month 2, if agreed)",
              "Retargeting campaign setup (Month 3)",
              "Monthly performance reports",
              "TripAdvisor strategy document",
              "Seasonal promotion designs",
              "Review management consulting",
              "Handover documentation & process guides",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 py-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <Divider />

        {/* ─── Investment ─── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
          custom={6}
        >
          <SectionTitle>Investment</SectionTitle>

          <div className="border border-neutral-200 rounded-lg overflow-hidden mb-6">
            <div className="bg-neutral-50 px-6 py-4 border-b border-neutral-200">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-sm text-neutral-500">Monthly fee</p>
                  <p className="text-3xl font-semibold text-neutral-900 font-serif">
                    €500
                    <span className="text-base font-normal text-neutral-400">
                      {" "}
                      / month
                    </span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-neutral-500">Total engagement</p>
                  <p className="text-xl font-semibold text-neutral-900">
                    €1,500
                  </p>
                  <p className="text-xs text-neutral-400">3 months</p>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 text-sm">
              <p className="font-medium text-neutral-800 mb-3">
                What&apos;s included:
              </p>
              <ul className="space-y-2 text-neutral-600">
                <Bullet>
                  Complete website design, development, and deployment
                </Bullet>
                <Bullet>
                  Social media content creation (3–5 posts/month) and channel
                  management consulting
                </Bullet>
                <Bullet>
                  Google Ads &amp; Meta Ads campaign creation, management, and
                  optimisation
                </Bullet>
                <Bullet>
                  Booking platform listing setup and optimisation consulting
                </Bullet>
                <Bullet>
                  Google Business Profile setup and ongoing optimisation
                </Bullet>
                <Bullet>
                  Monthly performance reporting and strategy calls
                </Bullet>
                <Bullet>
                  Consulting on review management, pricing strategy, and
                  long-term digital growth
                </Bullet>
              </ul>
              <div className="mt-4 p-3 bg-neutral-50 rounded text-xs text-neutral-500 leading-relaxed">
                <strong>Note:</strong> Advertising spend (Google Ads &amp; Meta
                Ads budget) is billed separately and directly by the platforms.
                We recommend a starting budget of €250/month in Month 1, scaling
                to €400–500/month by Month 3. Budget increases only happen if
                we see real results — we consult with your team to decide the
                best option at each stage.
              </div>
            </div>
          </div>
        </motion.section>

        <Divider />

        {/* ─── Website Preview CTA ─── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fade}
          custom={7}
          className="text-center py-8"
        >
          <p className="text-sm text-neutral-400 uppercase tracking-wider mb-3">
            See it in action
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-neutral-900 mb-4">
            Your New Website Preview
          </h2>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto text-sm leading-relaxed">
            We have prepared a preview of what the new Good Night Hôtel website
            could look like — modern, elegant, and built to convert visitors
            into guests.
          </p>
          <Link
            href="/preview"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors"
          >
            View Website Preview
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.section>

        {/* ─── Footer ─── */}
        <div className="mt-16 pt-8 border-t border-neutral-100 text-center space-y-1">
          <p className="text-xs text-neutral-400">
            Powered by{" "}
            <a
              href="https://www.zeropoint-labs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 underline underline-offset-2"
            >
              Zeropoint Labs
            </a>{" "}
            ·{" "}
            <a
              href="mailto:info@zeropoint-labs.com"
              className="text-neutral-500 underline underline-offset-2"
            >
              info@zeropoint-labs.com
            </a>
          </p>
          <p className="text-xs text-neutral-300">
            This proposal is confidential and intended solely for Good Night
            Hôtel.
          </p>
        </div>
      </div>
    </main>
  );
}
