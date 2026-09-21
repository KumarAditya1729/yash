import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Globe2, ShieldCheck, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame, SectionLink } from "@/components/anvaya-site";
import { AnvayaEmblem } from "@/components/anvaya-logo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Anvaya Global — Relationships are the currency of trade™" },
      {
        name: "description",
        content:
          "Rooted in Prayagraj, India, Anvaya Global connects quality Indian agricultural and food products with trusted international buyers.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageFrame
      eyebrow="Rooted in India · Open to the World"
      title={
        <>
          Trade rooted in <em>trust &amp; origin.</em>
        </>
      }
      intro="Anvaya Global is built on the belief that genuine international commerce starts with transparent relationships, thorough product knowledge, and deep respect for Indian agricultural heritage."
    >
      {/* 1. Core Narrative */}
      <section className="section">
        <div className="shell narrative-grid">
          <div>
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="display text-3xl md:text-5xl mt-3 text-ink">
              Relationships are the currency of trade™
            </h2>
            <p className="mt-6 text-clay leading-relaxed">
              Global food supply chains often prioritize speed over substance. At Anvaya Global, we
              choose a different starting point: building mutual clarity, verifying specifications
              on the ground, and ensuring every conversation is founded on real capability.
            </p>
            <p className="mt-4 text-clay leading-relaxed">
              Operating from the cultural and historic heart of Prayagraj, Uttar Pradesh, we bridge
              the rich agricultural belts of northern and central India with dynamic international
              markets across the Middle East, Europe, and the Americas.
            </p>
          </div>
          <div className="bg-ivory-soft p-8 border border-ink/10 flex flex-col justify-between">
            <div>
              <AnvayaEmblem variant="light" size={48} idPrefix="about-emblem" />
              <h3 className="text-xl font-serif font-bold text-ink mt-4">The Anvaya Principle</h3>
              <p className="text-sm text-clay mt-2 leading-relaxed">
                In Sanskrit, <em>Anvaya</em> signifies connection, lineage, and coherent order. We
                believe every successful trade shipment is an unbroken chain of trust between the
                farmer, the aggregator, and the international buyer.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-ink/15 text-xs text-clay font-medium space-y-1">
              <p>Registered Office: Prayagraj, UP, India</p>
              <p>Focus: Indian Agro Commodities &amp; Specialty Foods</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Pillars */}
      <section className="section section-soft">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Pillars of Practice</p>
              <h2 className="display text-3xl md:text-5xl text-ink">How we conduct business.</h2>
            </div>
            <p className="text-clay max-w-md">
              Our principles are practical guardrails that ensure reliable sourcing, clear
              documentation, and enduring partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="p-8 bg-ivory border border-ink/10 flex flex-col justify-between">
              <div>
                <span className="text-spice text-2xl font-serif font-bold">01</span>
                <div className="w-10 h-10 rounded-full bg-moss/10 text-moss flex items-center justify-center my-4">
                  <Sprout size={20} />
                </div>
                <h3 className="text-xl font-serif font-bold text-ink">Origin Integrity</h3>
                <p className="text-sm text-clay mt-2 leading-relaxed">
                  We source directly from specialized agricultural clusters — Basmati from the
                  northern plains, Cardamom from the southern hills, Makhana from eastern wetlands.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-xs text-clay border-t border-ink/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-moss" /> Cluster-based sourcing
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-moss" /> Traceable farm origins
                </li>
              </ul>
            </div>

            <div className="p-8 bg-ivory border border-ink/10 flex flex-col justify-between">
              <div>
                <span className="text-spice text-2xl font-serif font-bold">02</span>
                <div className="w-10 h-10 rounded-full bg-spice/10 text-spice flex items-center justify-center my-4">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-xl font-serif font-bold text-ink">Documentation First</h3>
                <p className="text-sm text-clay mt-2 leading-relaxed">
                  Export readiness is not an afterthought. Specifications, packaging, certificates
                  of analysis, and regulatory compliances are aligned before trade execution.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-xs text-clay border-t border-ink/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-spice" /> APEDA &amp; FSSAI aligned
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-spice" /> Transparent lab testing
                </li>
              </ul>
            </div>

            <div className="p-8 bg-ivory border border-ink/10 flex flex-col justify-between">
              <div>
                <span className="text-spice text-2xl font-serif font-bold">03</span>
                <div className="w-10 h-10 rounded-full bg-ink/10 text-ink flex items-center justify-center my-4">
                  <Globe2 size={20} />
                </div>
                <h3 className="text-xl font-serif font-bold text-ink">Global Reach</h3>
                <p className="text-sm text-clay mt-2 leading-relaxed">
                  Whether serving wholesale distributors in the UAE, ethnic grocers in the UK, or
                  specialty ingredient processors in Europe, we tailor each brief to market
                  requirements.
                </p>
              </div>
              <ul className="mt-6 space-y-2 text-xs text-clay border-t border-ink/10 pt-4">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-ink" /> Market-specific packaging
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-ink" /> Responsive international support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="cta-section">
        <div className="shell cta-layout">
          <div>
            <p className="eyebrow">Ready to explore Indian sourcing?</p>
            <h2 className="display">Start with an honest brief.</h2>
          </div>
          <div className="cta-copy">
            <p>
              Connect with our sourcing desk to discuss specifications, trial orders, or long-term
              partnership possibilities.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Contact our sourcing team <ArrowUpRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
