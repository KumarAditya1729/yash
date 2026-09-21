import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryForm, PageFrame, ProductTile, StatusBadge } from "@/components/anvaya-site";
import { products } from "@/lib/anvaya-data";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) {
      throw notFound();
    }
    return { product };
  },
  head: ({ loaderData }) => {
    const title = loaderData?.product
      ? `${loaderData.product.name} — Indian Sourcing | Anvaya Global`
      : "Product Details — Anvaya Global";
    return {
      meta: [{ title }],
    };
  },
  component: ProductDetailPage,
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData();
  const relatedProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <PageFrame
      eyebrow={`Sourcing Catalogue / ${product.category}`}
      title={product.name}
      intro={product.description}
    >
      <section className="section detail-wrap">
        <div className="shell">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-clay hover:text-spice transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to all products
          </Link>

          <div className="detail-grid">
            {/* Left Art / Visual */}
            <div
              className={`detail-art product-art-${product.color} rounded-sm relative overflow-hidden`}
            >
              <span className="detail-number">{product.index}</span>
              <div className="absolute top-6 right-6">
                <StatusBadge status={product.status} />
              </div>
            </div>

            {/* Right Details */}
            <div className="detail-copy flex flex-col justify-between">
              <div>
                <p className="micro-label">{product.eyebrow}</p>
                <h1 className="display text-4xl md:text-5xl text-ink mt-2">{product.name}</h1>
                <p className="text-clay mt-4 text-base leading-relaxed">{product.description}</p>

                <div className="detail-meta">
                  <div>
                    <span>Origin Region</span>
                    <strong>India (Verified agro-clusters)</strong>
                  </div>
                  <div>
                    <span>Status</span>
                    <strong className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-spice" />
                      {product.status}
                    </strong>
                  </div>
                  <div>
                    <span>Available Formats</span>
                    <strong>{product.form}</strong>
                  </div>
                  <div>
                    <span>Packaging Options</span>
                    <strong>Bulk / Custom export bags / Private label</strong>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-ivory-soft border border-ink/10 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-ink">
                    Sourcing Guarantee
                  </h4>
                  <ul className="text-xs text-clay space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-moss" /> Pre-shipment quality
                      inspection available
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck size={13} className="text-spice" /> Phytosanitary &amp; origin
                      certificates provided
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles size={13} className="text-ink" /> Custom briefs accepted for volume
                      orders
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <a href="#enquire">
                  <Button size="lg" className="w-full sm:w-auto">
                    Submit a brief for {product.name} <ArrowUpRight size={16} />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Enquiry Section */}
          <div id="enquire" className="mt-16 pt-12 border-t border-ink/15">
            <EnquiryForm productName={product.name} />
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related mt-20 pt-12 border-t border-ink/15">
              <h2 className="display text-2xl md:text-3xl text-ink">Explore related products</h2>
              <div className="product-grid mt-6">
                {relatedProducts.map((p) => (
                  <ProductTile key={p.slug} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageFrame>
  );
}
