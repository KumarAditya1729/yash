import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame } from "@/components/anvaya-site";
import { markets } from "@/lib/anvaya-data";

export const Route = createFileRoute("/markets")({
  head: () => ({
    meta: [
      { title: "Market Opportunities — Anvaya Global" },
      {
        name: "description",
        content:
          "Target market research and strategic international corridors for Indian food products — UAE, USA, UK, and European markets.",
      },
    ],
  }),
  component: MarketsPage,
});

function MarketsPage() {
  return (
    <PageFrame
      eyebrow="International Horizons"
      title={
        <>
          Looking outward, <em>honestly.</em>
        </>
      }
      intro="We treat international expansion with diligence. UAE, USA, UK, and European corridors are research and dialogue zones — ensuring compliance and customer fit before entering contracts."
    >
      <section className="section">
        <div className="shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {markets.map((m) => (
              <div
                key={m.short}
                className="p-8 bg-ivory border border-ink/10 flex flex-col justify-between hover:border-spice transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-ink/10">
                    <span className="text-4xl font-serif font-bold text-spice">{m.short}</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-ivory-soft border border-ink/10 text-xs font-semibold text-clay uppercase">
                      <MapPin size={12} className="text-spice" /> {m.note}
                    </span>
                  </div>
                  <h3 className="display text-3xl text-ink mt-6">{m.name}</h3>
                  <p className="text-sm text-clay mt-2">
                    <strong>Primary Focus:</strong> {m.focus}
                  </p>
                  <p className="text-xs text-clay mt-4 leading-relaxed">
                    Analyzing import tariffs, packaging language regulations, residue limits (MRLs),
                    and buyer preferences in this target jurisdiction.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-ink/10">
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      Enquire for {m.name} trade <ArrowUpRight size={14} />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-ink text-ivory flex flex-col md:flex-row items-center justify-between gap-6 rounded-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-spice/20 text-spice flex items-center justify-center shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-ivory">
                  Operating in another region?
                </h4>
                <p className="text-xs text-ivory/70 mt-1">
                  We frequently welcome enquiries from Southeast Asia, Africa, and Australia.
                </p>
              </div>
            </div>
            <Link to="/contact">
              <Button variant="light" size="md">
                Introduce your market <ArrowUpRight size={15} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
