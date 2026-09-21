import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, FileText, Search, Settings, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame } from "@/components/anvaya-site";

export const Route = createFileRoute("/sourcing")({
  head: () => ({
    meta: [
      { title: "Sourcing Approach — Anvaya Global" },
      {
        name: "description",
        content:
          "From first question to a considered next step. Learn how Anvaya Global discovers, evaluates, coordinates, and prepares Indian agro-food sourcing.",
      },
    ],
  }),
  component: SourcingPage,
});

function SourcingPage() {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Discover",
      desc: "We begin with your exact requirements — product grade, target moisture, packaging type, destination port, and delivery timeline. Good trade starts with good questions.",
      details: [
        "Product specification alignment",
        "Volume & seasonal window analysis",
        "Target market compliance review",
      ],
    },
    {
      num: "02",
      icon: Settings,
      title: "Evaluate",
      desc: "We map verified Indian farming clusters, mills, and processing facilities to identify sources capable of meeting your exact standards.",
      details: [
        "On-ground processor verification",
        "Sample extraction & lab testing",
        "Transparent pricing & terms",
      ],
    },
    {
      num: "03",
      icon: FileText,
      title: "Coordinate",
      desc: "We bring all stakeholders into alignment — packaging specifications, laboratory analysis, certificates of origin, and phytosanitary protocols.",
      details: [
        "Packaging design & labeling",
        "Third-party inspection coordination",
        "Pre-shipment documentation check",
      ],
    },
    {
      num: "04",
      icon: Truck,
      title: "Prepare",
      desc: "Once product, documentation, and market requirements are fully validated, we prepare for smooth dispatch, container loading, and shipment tracking.",
      details: [
        "Container stuffing supervision",
        "Customs clearance preparation",
        "Post-dispatch document dispatch",
      ],
    },
  ];

  return (
    <PageFrame
      eyebrow="Practical Foundations"
      title={
        <>
          The sourcing <em>approach.</em>
        </>
      }
      intro="A transparent, measured methodology designed to give buyers and suppliers complete confidence at every stage of the trade lifecycle."
    >
      <section className="section">
        <div className="shell">
          <div className="space-y-12">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-8 md:p-12 bg-ivory border border-ink/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
                >
                  <div className="md:col-span-2 flex items-center gap-4">
                    <span className="text-4xl font-serif font-bold text-spice">{step.num}</span>
                    <div className="w-12 h-12 rounded-full bg-ink/5 text-ink flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <h3 className="display text-2xl md:text-4xl text-ink">{step.title}</h3>
                    <p className="mt-3 text-clay text-sm md:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="md:col-span-4 bg-ivory-soft p-5 border border-ink/10 space-y-2.5">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-ink block">
                      Key Deliverables
                    </span>
                    {step.details.map((d) => (
                      <p key={d} className="text-xs text-clay flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-moss shrink-0" />
                        {d}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="shell cta-layout">
          <div>
            <p className="eyebrow">Have a specific commodity inquiry?</p>
            <h2 className="display">Let’s examine your brief.</h2>
          </div>
          <div className="cta-copy">
            <p>
              Tell us your target specifications and volumes. We'll provide honest, transparent
              feedback on feasibility.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Submit an enquiry <ArrowUpRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
