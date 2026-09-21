import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/anvaya-hero.jpg";
import { Button } from "@/components/ui/button";
import { ProductTile, SectionLink, SiteFooter, SiteHeader } from "@/components/anvaya-site";
import { categoryImages, products } from "@/lib/anvaya-data";
import { AnvayaEmblem } from "@/components/anvaya-logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anvaya Global — Relationships are the currency of trade™" },
      {
        name: "description",
        content:
          "Anvaya Global — Rooted in India, Open to the World. Trusted sourcing partnerships for Indian food products, agricultural commodities, and international trade.",
      },
      { property: "og:title", content: "Anvaya Global — Relationships are the currency of trade™" },
      {
        property: "og:description",
        content:
          "Indian food products, sourcing conversations, and international trade opportunities.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/anvaya-logo-full.svg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="page">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <img
            className="hero-image"
            src={heroImage}
            alt="Indian spices, rice, makhana, and cardamom arranged for product sourcing"
            width={1600}
            height={1104}
          />
          <div className="shell hero-inner">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AnvayaEmblem variant="dark" size={36} idPrefix="hero-emblem" />
                <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#C9A96B] font-semibold">
                  Rooted in India · Open to the World
                </span>
              </div>
              <h1 className="display hero-title">
                Connecting quality.
                <br />
                <em>Enabling trade.</em>
              </h1>
              <p className="hero-copy">
                <span className="block font-serif italic text-lg md:text-xl text-[#C9A96B] mb-2">
                  Relationships are the currency of trade™
                </span>
                Anvaya Global explores trusted sourcing partnerships for Indian food products,
                specialty grains, spices, and international trade opportunities.
              </p>
              <div className="hero-actions flex flex-wrap items-center gap-3">
                <Link to="/contact">
                  <Button size="lg">
                    Start a conversation <ArrowUpRight size={16} />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="light" size="lg">
                    Explore products <ArrowDown size={15} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hero-meta">
              <span>Indian Origins · Global Opportunities</span>
              <span>Prayagraj · Uttar Pradesh · India</span>
            </div>
          </div>
        </section>

        {/* 1. Clear Starting Point / Intro Grid */}
        <section className="section">
          <div className="shell intro-grid">
            <div>
              <p className="eyebrow">A clear starting point</p>
              <p className="display intro-statement">
                Good trade starts with <em>good questions.</em> We are building the relationships,
                product understanding, and market context that come before a confident next step.
              </p>
            </div>
            <div className="intro-side">
              <strong>Where we are today</strong>
              <p>
                Anvaya Global is in the planning and exploration stage. Product availability,
                suppliers, formats, destinations, and documentation will be confirmed through
                conversation — not assumed.
              </p>
              <SectionLink to="/about">About Anvaya Global</SectionLink>
            </div>
          </div>
        </section>

        {/* 2. Product Discovery */}
        <section className="section section-soft">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Product discovery</p>
                <h2 className="display">A catalogue in the making.</h2>
              </div>
              <p>
                Explore the categories we are currently researching. Every status is intentionally
                honest and open to the right brief.
              </p>
            </div>
            <div className="category-strip">
              <div className="category-panel category-panel-with-img group">
                <img
                  src={categoryImages.spices}
                  alt="Spices and Seasonings"
                  className="category-bg-img"
                />
                <div className="category-overlay" />
                <div className="category-panel-content">
                  <div className="category-num">
                    <span>01</span>
                    <span>Core categories</span>
                  </div>
                  <div>
                    <h3>
                      Spices &amp;
                      <br />
                      seasonings
                    </h3>
                    <p>
                      Turmeric, pepper, cardamom, cumin, and more — formats and specifications to be
                      confirmed.
                    </p>
                  </div>
                  <SectionLink to="/products">Browse the explorer</SectionLink>
                </div>
              </div>
              <div className="category-panel category-panel-with-img group">
                <img
                  src={categoryImages.grains}
                  alt="Rice and Supergrains"
                  className="category-bg-img"
                />
                <div className="category-overlay" />
                <div className="category-panel-content">
                  <div className="category-num">
                    <span>02</span>
                    <span>Grains</span>
                  </div>
                  <div>
                    <h3>
                      Rice &amp;
                      <br />
                      supergrains
                    </h3>
                    <p>Basmati, non-basmati, millets, and future-facing grain conversations.</p>
                  </div>
                  <SectionLink to="/products">View categories</SectionLink>
                </div>
              </div>
              <div className="category-panel category-panel-with-img group">
                <img
                  src={categoryImages.specialty}
                  alt="Nuts and Seeds"
                  className="category-bg-img"
                />
                <div className="category-overlay" />
                <div className="category-panel-content">
                  <div className="category-num">
                    <span>03</span>
                    <span>Specialty</span>
                  </div>
                  <div>
                    <h3>
                      Nuts,
                      <br />
                      seeds &amp; more
                    </h3>
                    <p>Makhana, sesame, cashew, and potential value-added food directions.</p>
                  </div>
                  <SectionLink to="/products">See possibilities</SectionLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Product Spotlight */}
        <section className="section section-ink">
          <div className="shell product-preview">
            <div>
              <p className="eyebrow">Potential product spotlight</p>
              <p className="display product-note">
                Not a promise of availability. A starting point for a better conversation.
                <SectionLink to="/products">See all products</SectionLink>
              </p>
            </div>
            <div className="product-grid">
              {products.slice(0, 3).map((product) => (
                <ProductTile key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* 5. Process / Sourcing Approach */}
        <section className="section section-soft">
          <div className="shell process-layout">
            <div>
              <p className="eyebrow">The sourcing approach</p>
              <p className="display process-statement">
                From first question to a considered next step.
              </p>
              <p className="page-intro mt-6">
                A simple, transparent way to shape the work without overstating what is already in
                place.
              </p>
            </div>
            <div className="process-list">
              <div className="process-row">
                <span>01</span>
                <h3>Discover</h3>
                <p>
                  Understand your product, market, format, and the kind of relationship you want to
                  build.
                </p>
              </div>
              <div className="process-row">
                <span>02</span>
                <h3>Evaluate</h3>
                <p>
                  Explore relevant Indian sourcing possibilities and identify the details still to
                  be confirmed.
                </p>
              </div>
              <div className="process-row">
                <span>03</span>
                <h3>Coordinate</h3>
                <p>
                  Bring questions, product information, packaging conversations, and people into
                  focus.
                </p>
              </div>
              <div className="process-row">
                <span>04</span>
                <h3>Prepare</h3>
                <p>
                  Shape a clear next step once the product, documentation, and market requirements
                  are understood.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Market Opportunities */}
        <section className="section markets-band">
          <div className="shell markets-band">
            <div>
              <p className="eyebrow">Market opportunities / research stage</p>
              <h2 className="display">Looking outward, honestly.</h2>
            </div>
            <div>
              <p>
                UAE, USA, UK, and Europe are areas of research — not claims of active export
                operations. We are interested in finding the right fit before making bigger
                promises.
              </p>
              <SectionLink to="/markets">Explore market thinking</SectionLink>
            </div>
          </div>
        </section>

        {/* 7. Quality & Documentation */}
        <section className="section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Quality &amp; documentation</p>
                <h2 className="display">Clarity is part of the product.</h2>
              </div>
              <p>
                As the business takes shape, product information, supplier evaluation, and
                documentation will be treated as practical foundations — not decorative claims.
              </p>
            </div>
            <div className="quality-grid">
              <div className="quality-item">
                <p className="eyebrow">01</p>
                <h3>Supplier evaluation</h3>
                <p>
                  A future space for how potential sourcing partners are understood and compared.
                </p>
              </div>
              <div className="quality-item">
                <p className="eyebrow">02</p>
                <h3>Product documentation</h3>
                <p>
                  Formats, specifications, packaging, and market requirements kept visible and
                  specific.
                </p>
              </div>
              <div className="quality-item">
                <p className="eyebrow">03</p>
                <h3>Responsible next steps</h3>
                <p>
                  Details confirmed through the enquiry process before any commitment is
                  represented.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Call To Action */}
        <section className="cta-section">
          <div className="shell cta-layout">
            <div>
              <p className="eyebrow">Have a product or market in mind?</p>
              <h2 className="display">Let’s start with the brief.</h2>
            </div>
            <div className="cta-copy">
              <p>
                Tell us what you are exploring — as a buyer, supplier, distributor, or simply
                someone with a thoughtful question.
              </p>
              <Link to="/contact" className="text-link">
                Start a conversation <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
