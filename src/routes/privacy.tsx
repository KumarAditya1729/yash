import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/anvaya-site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [{ title: "Privacy Policy — Anvaya Global" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageFrame
      eyebrow="Legal & Governance"
      title="Privacy Policy"
      intro="Our commitment to safeguarding the commercial and personal information of our clients, suppliers, and visitors."
    >
      <section className="section">
        <div className="shell max-w-3xl mx-auto space-y-8 text-sm text-clay leading-relaxed">
          <div>
            <h2 className="text-xl font-serif font-bold text-ink mb-2">1. Overview</h2>
            <p>
              Anvaya Global respects your right to privacy. This Privacy Policy details the types of
              information we collect through our website, communications, and commercial enquiries,
              and how that information is utilized and protected.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-serif font-bold text-ink mb-2">
              2. Information We Collect
            </h2>
            <p>
              When you submit a trade enquiry or contact us, we collect information including your
              name, company name, corporate email address, phone/WhatsApp number, and specific
              product interests.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-serif font-bold text-ink mb-2">
              3. Commercial Confidentiality
            </h2>
            <p>
              Trade briefs, target quantities, pricing discussions, and packaging requirements
              submitted to Anvaya Global are treated as confidential commercial information and are
              never sold or shared with unauthorized third parties.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-serif font-bold text-ink mb-2">4. Contact Information</h2>
            <p>
              For privacy or data handling queries, contact our desk at{" "}
              <a href="mailto:mprworth001@gmail.com" className="text-ink font-semibold underline">
                mprworth001@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
