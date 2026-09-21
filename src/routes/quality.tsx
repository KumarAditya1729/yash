import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, FileCheck2, FlaskConical, Scale, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame } from "@/components/anvaya-site";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Documents — Anvaya Global" },
      {
        name: "description",
        content:
          "Clarity is part of the product. Learn about Anvaya Global's documentation standards, lab testing, and export compliance verification.",
      },
    ],
  }),
  component: QualityPage,
});

function QualityPage() {
  const pillars = [
    {
      icon: FlaskConical,
      title: "Laboratory Testing & Analysis",
      desc: "Every batch is verified by accredited third-party laboratories (NABL certified in India) for moisture content, purity levels, pesticide residue (MRL compliance), and microbiological counts.",
    },
    {
      icon: FileCheck2,
      title: "Certificates of Origin & Health",
      desc: "Full statutory compliance including APEDA registration, Spices Board certification, Phytosanitary certificates, Fumigation certificates, and country-specific consular requirements.",
    },
    {
      icon: Scale,
      title: "Weight & Packing Verification",
      desc: "Pre-shipment inspection at port or processing facility ensuring gross/tare/net weight conformity and tamper-evident export packaging.",
    },
    {
      icon: Shield,
      title: "Traceability to Source",
      desc: "Transparent lot tracking back to aggregation clusters and mandis across Uttar Pradesh, Madhya Pradesh, Kerala, and Bihar.",
    },
  ];

  return (
    <PageFrame
      eyebrow="Integrity & Assurance"
      title={
        <>
          Clarity is part of the <em>product.</em>
        </>
      }
      intro="Documentation is not an afterthought in international trade. We treat specifications, testing, and compliance as core deliverables equal to the physical commodity."
    >
      <section className="section">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-8 bg-ivory border border-ink/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-full bg-spice/15 text-spice flex items-center justify-center">
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-mono font-bold text-clay">0{idx + 1}</span>
                    </div>
                    <h3 className="display text-2xl text-ink mt-5">{item.title}</h3>
                    <p className="text-sm text-clay mt-3 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-ink/10 flex items-center gap-2 text-xs text-moss font-medium">
                    <CheckCircle2 size={14} /> Strict compliance benchmark
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-8 bg-ivory-soft border border-ink/10">
            <h3 className="text-xl font-serif font-bold text-ink mb-4">
              Required Documents Checklist
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs text-clay">
              <div className="p-3 bg-white border border-ink/10">
                <strong>Commercial Invoice &amp; Packing List</strong>
                <p className="text-[11px] text-clay/80 mt-1">
                  Detailed HS code classification and net/gross weights.
                </p>
              </div>
              <div className="p-3 bg-white border border-ink/10">
                <strong>Bill of Lading (B/L)</strong>
                <p className="text-[11px] text-clay/80 mt-1">
                  Clean on-board ocean bills issued by top carriers.
                </p>
              </div>
              <div className="p-3 bg-white border border-ink/10">
                <strong>Certificate of Analysis (COA)</strong>
                <p className="text-[11px] text-clay/80 mt-1">
                  Comprehensive lab panel from NABL-accredited labs.
                </p>
              </div>
              <div className="p-3 bg-white border border-ink/10">
                <strong>Phytosanitary Certificate</strong>
                <p className="text-[11px] text-clay/80 mt-1">
                  Issued by Plant Quarantine of India prior to vessel sail.
                </p>
              </div>
              <div className="p-3 bg-white border border-ink/10">
                <strong>Certificate of Origin (COO)</strong>
                <p className="text-[11px] text-clay/80 mt-1">
                  Authorized by the local Chamber of Commerce / EIA.
                </p>
              </div>
              <div className="p-3 bg-white border border-ink/10">
                <strong>Fumigation Certificate</strong>
                <p className="text-[11px] text-clay/80 mt-1">
                  Conducted by authorized pest inspection agencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="shell cta-layout">
          <div>
            <p className="eyebrow">Have compliance questions?</p>
            <h2 className="display">Request standard documentation templates.</h2>
          </div>
          <div className="cta-copy">
            <p>
              We can provide sample certificates of analysis or discuss custom lab testing
              protocols.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Contact documentation team <ArrowUpRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
