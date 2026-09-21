import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/anvaya-site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [{ title: "Terms of Trade — Anvaya Global" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageFrame
      eyebrow="Commercial Protocol"
      title="Terms of Trade"
      intro="General terms governing trade conversations, quotations, and preliminary sourcing exploration with Anvaya Global."
    >
      <section className="section">
        <div className="shell max-w-3xl mx-auto space-y-8 text-sm text-clay leading-relaxed">
          <div>
            <h2 className="text-xl font-serif font-bold text-ink mb-2">
              1. Exploratory Stage &amp; Non-Binding Briefs
            </h2>
            <p>
              Information presented on this website represents categories in active planning,
              sourcing evaluation, or exploration. Preliminary conversations, product overviews, and
              exploratory emails do not constitute a binding contract until formal Sales Contracts
              and Letters of Credit / Commercial terms are executed.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-serif font-bold text-ink mb-2">
              2. Specifications &amp; Tolerances
            </h2>
            <p>
              Agro commodities are natural agricultural products subject to seasonal variation. All
              commercial commitments specify exact moisture, purity, foreign matter tolerances, and
              inspection standards in mutually signed Proforma Invoices or Contracts.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-serif font-bold text-ink mb-2">3. Jurisdiction</h2>
            <p>
              All domestic operations and initial trade representations are governed in accordance
              with the laws of the Republic of India, under the jurisdiction of Prayagraj, Uttar
              Pradesh.
            </p>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
