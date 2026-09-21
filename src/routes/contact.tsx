import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, MessageSquare, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryForm, PageFrame } from "@/components/anvaya-site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Enquiries — Anvaya Global" },
      {
        name: "description",
        content:
          "Start a conversation with Anvaya Global. Discuss Indian agro sourcing, product specifications, or partnership opportunities.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageFrame
      eyebrow="Direct Desk / Enquiries"
      title={
        <>
          Start a <em>conversation.</em>
        </>
      }
      intro="Whether exploring a specific commodity, evaluating prospective sourcing partners, or seeking export specifications, our desk in Prayagraj is ready to assist."
    >
      <section className="section">
        <div className="shell grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-ivory border border-ink/10 space-y-6">
              <h3 className="text-xl font-serif font-bold text-ink">Office &amp; Contact Desk</h3>
              <div className="space-y-4 text-sm text-clay">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-spice shrink-0 mt-1" />
                  <div>
                    <strong className="text-ink block">Registered Office</strong>
                    <span>97E/4U/3 PFM, Naini</span>
                    <br />
                    <span>Prayagraj, Uttar Pradesh 211008</span>
                    <br />
                    <span>India</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-ink/10">
                  <Mail size={18} className="text-spice shrink-0" />
                  <div>
                    <strong className="text-ink block text-xs uppercase tracking-wider">
                      Email Us
                    </strong>
                    <a
                      href="mailto:mprworth001@gmail.com"
                      className="text-ink hover:text-spice transition-colors font-medium"
                    >
                      mprworth001@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-ink/10">
                  <Phone size={18} className="text-spice shrink-0" />
                  <div>
                    <strong className="text-ink block text-xs uppercase tracking-wider">
                      Phone / WhatsApp
                    </strong>
                    <a
                      href="tel:+918858575970"
                      className="text-ink hover:text-spice transition-colors font-medium"
                    >
                      +91 88585 75970
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-ink/10">
                  <Clock size={18} className="text-spice shrink-0" />
                  <div>
                    <strong className="text-ink block text-xs uppercase tracking-wider">
                      Business Hours
                    </strong>
                    <span>Mon – Sat: 09:30 AM – 06:30 PM (IST)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-ink/10">
                <a
                  href="https://wa.me/918858575970?text=Hello%20Anvaya%20Global,%20I%20would%20like%20to%20enquire%20about%20sourcing."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#0F3D2E] text-white hover:bg-[#16503d] transition-colors rounded-none font-semibold text-xs uppercase tracking-wider"
                >
                  <MessageSquare size={16} /> Chat directly on WhatsApp
                </a>
              </div>
            </div>

            <div className="p-6 bg-ivory-soft border border-ink/10 flex items-start gap-3">
              <ShieldCheck size={20} className="text-moss shrink-0 mt-0.5" />
              <p className="text-xs text-clay leading-relaxed">
                <strong>Confidential Briefs:</strong> All discussions, buyer specifications, and
                target pricing are handled under strict business discretion.
              </p>
            </div>
          </div>

          {/* Right: Interactive Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-ink/10 shadow-sm">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
