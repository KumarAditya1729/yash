import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  MessageSquare,
  Phone,
  Mail,
  Printer,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Package,
  Layers,
  SlidersHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageFrame, StatusBadge, EnquiryForm } from "@/components/anvaya-site";
import { products, categories } from "@/lib/anvaya-data";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Official Product & Export Catalogue — Anvaya Global" },
      {
        name: "description",
        content:
          "Official digital export catalogue of Anvaya Global. Explore premium Indian agro commodities, spices, basmati rice, makhana, cashews, and specialty food ingredients.",
      },
      { property: "og:title", content: "Official Product & Export Catalogue — Anvaya Global" },
      {
        property: "og:description",
        content:
          "Digital export catalogue of Indian food commodities, spices, grains, and specialty foods. Verified sourcing and export specifications.",
      },
    ],
  }),
  component: CatalogPage,
});

const packagingDetails: Record<string, string> = {
  turmeric: "25kg / 50kg HDPE/PP bags, corrugated cartons, or custom vacuum packs.",
  makhana: "5kg / 10kg master cartons, food-grade poly-lined packs, or retail pouch packaging.",
  "basmati-rice": "5kg, 10kg, 20kg, 25kg, 50kg Non-Woven / BOPP / Jute bags.",
  "black-pepper": "25kg / 50kg multilayer paper bags or vacuum poly-pouches.",
  "green-cardamom": "5kg / 10kg master cartons with food-grade inner poly bags to preserve aroma.",
  millets: "25kg / 50kg PP bags or customized private-label retail stand-up pouches.",
  "sesame-seeds": "25kg / 50kg 4-ply paper bags or polypropylene bags.",
  "cashew-nuts": "10kg / 20kg vacuum tin or nitrogen-flushed flexi-packs in outer cartons.",
};

const leadTimeDetails: Record<string, string> = {
  turmeric: "10-15 business days ex-works / FOB",
  makhana: "7-12 business days ex-works / FOB",
  "basmati-rice": "12-18 business days containerized FOB / CIF",
  "black-pepper": "10-14 business days ex-works / FOB",
  "green-cardamom": "7-10 business days air / sea shipment",
  millets: "10-15 business days containerized",
  "sesame-seeds": "10-14 business days FOB / CIF",
  "cashew-nuts": "10-15 business days vacuum packed",
};

function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All products");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All products" || product.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesQuery =
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.form.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <PageFrame
      eyebrow="Digital Catalogue / QR Desk"
      title={
        <>
          Product &amp; Export <em>Catalogue.</em>
        </>
      }
      intro="Official digital sourcing portfolio for international buyers, importers, and food manufacturers. Every listing is backed by direct origin verification, transparent grading, and tailored export packaging."
    >
      <section className="section pt-6 pb-20">
        <div className="shell space-y-10">
          {/* Quick Action Banner for QR / Mobile Visitors */}
          <div className="p-6 md:p-8 bg-[#0F3D2E] text-white border border-[#C9A96B]/30 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/10 text-[#C9A96B] text-[11px] font-mono tracking-widest uppercase rounded">
                  <span>Direct QR Desk</span>
                  <span>·</span>
                  <span>Origin: India</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
                  Connect directly with our export desk
                </h2>
                <p className="text-sm text-[#F7F5F0]/80 max-w-2xl leading-relaxed">
                  Scanned from a business card, booth, or meeting? Start an immediate conversation
                  with our trade desk for volume pricing, spec sheets, or customized samples.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/918858575970?text=Hello%20Anvaya%20Global,%20I%20scanned%20your%20QR%20code%20catalog%20and%20would%20like%20to%20enquire%20about%20your%20products."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#20ba59] transition-colors rounded-none shadow"
                >
                  <MessageSquare size={16} /> WhatsApp Enquiry
                </a>

                <a
                  href="tel:+918858575970"
                  className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors border border-white/20"
                >
                  <Phone size={15} /> +91 88585 75970
                </a>

                <a
                  href="mailto:mprworth001@gmail.com?subject=Enquiry%20from%20Anvaya%20Global%20QR%20Catalog"
                  className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors border border-white/20"
                >
                  <Mail size={15} /> Email Desk
                </a>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-4 py-3 bg-[#C9A96B] text-[#0F3D2E] font-semibold text-xs uppercase tracking-wider hover:bg-[#b89858] transition-colors cursor-pointer"
                  title="Print or Save PDF Catalogue"
                >
                  <Printer size={15} /> Print / Save PDF
                </button>
              </div>
            </div>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="bg-white p-5 md:p-6 border border-ink/10 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-clay pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Search products, grades (e.g. Basmati, Curcumin, TGSEB, Makhana)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-ivory-soft border border-ink/15 text-sm text-ink placeholder:text-clay/70 focus:outline-none focus:border-spice transition-colors"
                />
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-clay hover:text-ink font-semibold"
                  >
                    Clear
                  </button>
                ) : null}
              </div>

              {/* Counter Indicator */}
              <div className="flex items-center justify-between md:justify-end gap-3 text-xs text-clay">
                <span className="flex items-center gap-1.5">
                  <SlidersHorizontal size={14} />
                  Showing <strong>{filteredProducts.length}</strong> of {products.length} products
                </span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div
              className="flex flex-wrap gap-2 pt-2 border-t border-ink/10"
              aria-label="Categories"
            >
              {categories.map((category) => {
                const count =
                  category === "All products"
                    ? products.length
                    : products.filter((p) => p.category === category).length;
                const active = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium transition-all ${
                      active
                        ? "bg-[#0F3D2E] text-white border border-[#0F3D2E] shadow-xs"
                        : "bg-ivory text-ink/80 border border-ink/15 hover:border-spice hover:text-ink"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                        active ? "bg-white/20 text-white" : "bg-ink/5 text-clay"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Catalog Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProducts.map((product) => {
                const packaging =
                  packagingDetails[product.slug] ?? "Custom export packing available.";
                const leadTime = leadTimeDetails[product.slug] ?? "7-14 business days";
                const waMessage = encodeURIComponent(
                  `Hello Anvaya Global, I am inquiring about *${product.name}* (Grade/Form: ${product.form}) from your export catalogue. Could you share specifications and current FOB/CIF pricing?`,
                );

                return (
                  <div
                    key={product.slug}
                    className="bg-white border border-ink/15 shadow-sm hover:border-spice transition-all flex flex-col justify-between group overflow-hidden"
                  >
                    {/* Top Row: Visual & Quick Details */}
                    <div>
                      <div className="relative h-56 sm:h-64 bg-[#191e24] overflow-hidden">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : null}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 bg-black/75 text-white border border-white/20 backdrop-blur-xs">
                            {product.index}
                          </span>
                          <span className="text-[11px] font-medium px-2 py-0.5 bg-black/70 text-[#C9A96B] border border-[#C9A96B]/30 uppercase tracking-wider backdrop-blur-xs">
                            {product.category}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3 z-10">
                          <StatusBadge status={product.status} />
                        </div>

                        {/* Title Over Image */}
                        <div className="absolute bottom-3 left-4 right-4 z-10 text-white">
                          <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A96B] block">
                            {product.eyebrow}
                          </span>
                          <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                            {product.name}
                          </h3>
                        </div>
                      </div>

                      {/* Card Content & Export Specs */}
                      <div className="p-5 md:p-6 space-y-4">
                        <p className="text-sm text-clay leading-relaxed">{product.description}</p>

                        <div className="space-y-2.5 pt-3 border-t border-ink/10 text-xs">
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <span className="text-clay font-medium uppercase tracking-wider text-[11px]">
                              Export Form / Grade:
                            </span>
                            <span className="sm:col-span-2 text-ink font-semibold">
                              {product.form}
                            </span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <span className="text-clay font-medium uppercase tracking-wider text-[11px]">
                              Packaging Options:
                            </span>
                            <span className="sm:col-span-2 text-ink">{packaging}</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <span className="text-clay font-medium uppercase tracking-wider text-[11px]">
                              Estimated Lead Time:
                            </span>
                            <span className="sm:col-span-2 text-ink">{leadTime}</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <span className="text-clay font-medium uppercase tracking-wider text-[11px]">
                              Origin &amp; Cluster:
                            </span>
                            <span className="sm:col-span-2 text-ink">
                              India (Certified agro clusters)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Actions */}
                    <div className="p-5 md:p-6 pt-0 flex flex-wrap items-center gap-3 border-t border-ink/10 mt-2">
                      <a
                        href={`https://wa.me/918858575970?text=${waMessage}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-[#0F3D2E] text-white hover:bg-[#16503d] font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs"
                      >
                        <MessageSquare size={14} /> Enquire on WhatsApp
                      </a>

                      <Link
                        to="/products/$slug"
                        params={{ slug: product.slug }}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-ivory border border-ink/20 text-ink hover:border-spice font-semibold text-xs uppercase tracking-wider transition-colors"
                      >
                        Full Details <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-12 text-center bg-white border border-ink/15 space-y-3">
              <p className="text-base text-ink font-medium">
                No products match &ldquo;{searchQuery}&rdquo; in this category.
              </p>
              <p className="text-sm text-clay">
                We also source custom agro commodities upon buyer request.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All products");
                }}
              >
                Reset filters
              </Button>
            </div>
          )}

          {/* Export Quality Assurance Strip */}
          <div className="p-8 bg-ivory border border-ink/15 space-y-6">
            <div className="max-w-2xl">
              <span className="eyebrow text-xs uppercase tracking-wider text-spice font-mono">
                Trade Assurance &amp; Compliance
              </span>
              <h3 className="text-2xl font-serif font-bold text-ink mt-1">
                Export Standards Built Into Every Shipment
              </h3>
              <p className="text-sm text-clay mt-2 leading-relaxed">
                Whether you are procuring full container loads (FCL) or specialized trial pallets,
                Anvaya Global coordinates end-to-end documentation and quality benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-ink/10">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-ink font-semibold text-sm">
                  <ShieldCheck size={18} className="text-moss" /> Statutory Licensure
                </div>
                <p className="text-xs text-clay leading-relaxed">
                  Registered with APEDA, Spice Board of India, FSSAI, and Ministry of Commerce.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-ink font-semibold text-sm">
                  <CheckCircle2 size={18} className="text-moss" /> Pre-Shipment Inspection
                </div>
                <p className="text-xs text-clay leading-relaxed">
                  Third-party batch testing by SGS, Eurofins, or NABL labs per buyer destination
                  standards.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-ink font-semibold text-sm">
                  <Package size={18} className="text-moss" /> OEM &amp; Custom Packaging
                </div>
                <p className="text-xs text-clay leading-relaxed">
                  Private labeling, customized bilingual packaging, Barcode/GS1, and food-grade
                  liners.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-ink font-semibold text-sm">
                  <Layers size={18} className="text-moss" /> Complete Export Documentation
                </div>
                <p className="text-xs text-clay leading-relaxed">
                  Phytosanitary certificate, Certificate of Origin, Bill of Lading, and Fumigation
                  certificates.
                </p>
              </div>
            </div>
          </div>

          {/* Quick RFQ / Enquiry Form Section */}
          <div id="enquire" className="bg-white p-8 md:p-12 border border-ink/15 shadow-sm">
            <EnquiryForm />
          </div>

          {/* Direct Desk Strip */}
          <div className="p-6 bg-white border border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-clay">
            <div className="space-y-1 text-center sm:text-left">
              <strong className="text-ink block">Anvaya Global — Export Desk</strong>
              <span>97E/4U/3 PFM, Naini, Prayagraj, UP 211008, India</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="tel:+918858575970"
                className="text-ink hover:text-spice transition-colors font-semibold"
              >
                +91 88585 75970
              </a>
              <span>·</span>
              <a
                href="mailto:mprworth001@gmail.com"
                className="text-ink hover:text-spice transition-colors font-semibold"
              >
                mprworth001@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
