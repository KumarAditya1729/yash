import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, type Product, statusStyles } from "@/lib/anvaya-data";
import { AnvayaHorizontalLogo } from "./anvaya-logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header className="site-header">
      <div className="shell flex h-24 items-center justify-between gap-5">
        <Link to="/" className="brand-mark py-2" aria-label="Anvaya Global home">
          <AnvayaHorizontalLogo variant="light" size="sm" showTagline={true} />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          <Link
            to="/about"
            className={isActive("/about") ? "nav-link nav-link-active" : "nav-link"}
          >
            About
          </Link>
          <Link
            to="/products"
            className={isActive("/products") ? "nav-link nav-link-active" : "nav-link"}
          >
            Products
          </Link>
          <Link
            to="/catalog"
            className={isActive("/catalog") ? "nav-link nav-link-active" : "nav-link"}
          >
            Catalogue
          </Link>
          <Link
            to="/sourcing"
            className={isActive("/sourcing") ? "nav-link nav-link-active" : "nav-link"}
          >
            Sourcing
          </Link>
          <Link
            to="/markets"
            className={isActive("/markets") ? "nav-link nav-link-active" : "nav-link"}
          >
            Markets
          </Link>
          <Link
            to="/quality"
            className={isActive("/quality") ? "nav-link nav-link-active" : "nav-link"}
          >
            Quality & documents
          </Link>
        </nav>
        <div className="hidden lg:block">
          <Link to="/contact">
            <Button size="sm">
              Start a conversation <ArrowUpRight size={14} />
            </Button>
          </Link>
        </div>
        <button
          type="button"
          className="mobile-menu-button lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <nav className="mobile-nav lg:hidden" aria-label="Mobile navigation">
          {(
            [
              ["About", "/about"],
              ["Products", "/products"],
              ["Catalogue", "/catalog"],
              ["Sourcing", "/sourcing"],
              ["Markets", "/markets"],
              ["Quality & documents", "/quality"],
            ] as const
          ).map(([label, path]) => (
            <Link key={path} to={path} onClick={() => setOpen(false)} className="mobile-nav-link">
              {label}
              <ArrowUpRight size={15} />
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mobile-nav-link mobile-nav-cta"
          >
            Start a conversation
            <ArrowUpRight size={15} />
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <div className="footer-brand mb-4">
            <AnvayaHorizontalLogo variant="dark" size="sm" showTagline={true} />
          </div>
          <p className="footer-note">
            Indian food products, sourcing conversations, and international trade opportunities.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-[#C9A96B]/30 rounded text-[11px] text-[#C9A96B]">
            <span>Rooted in India · Open to the World</span>
          </div>
        </div>
        <div className="footer-column">
          <span className="footer-label">Explore</span>
          <Link to="/about">About</Link>
          <Link to="/products">Product explorer</Link>
          <Link to="/catalog">Export Catalogue</Link>
          <Link to="/sourcing">Sourcing approach</Link>
          <Link to="/markets">Market opportunities</Link>
        </div>
        <div className="footer-column">
          <span className="footer-label">Start here</span>
          <Link to="/contact">Request an enquiry</Link>
          <a href="mailto:mprworth001@gmail.com">mprworth001@gmail.com</a>
          <a href="tel:+918858575970">+91 88585 75970</a>
        </div>
        <div className="footer-column">
          <span className="footer-label">Visit</span>
          <span>97E/4U/3 PFM, Naini</span>
          <span>Prayagraj, Uttar Pradesh</span>
          <span>211008, India</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>
          © {new Date().getFullYear()} Anvaya Global — Relationships are the currency of trade™
        </span>
        <div>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
        <span>Origin to opportunity</span>
      </div>
    </footer>
  );
}

export function PageFrame({
  children,
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  children: React.ReactNode;
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <div className={dark ? "page dark-page" : "page"}>
      <SiteHeader />
      <main>
        <section className="page-heading">
          <div className="shell page-heading-inner">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="display page-title">{title}</h1>
            </div>
            {intro ? <p className="page-intro">{intro}</p> : null}
          </div>
        </section>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export function StatusBadge({ status }: { status: Product["status"] }) {
  return (
    <span className={`status-badge ${statusStyles[status]}`}>
      <span className="status-dot" />
      {status}
    </span>
  );
}

export function ProductTile({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className={featured ? "product-tile product-tile-featured" : "product-tile"}
    >
      <div className={`product-art product-art-${product.color}`}>
        {product.image ? (
          <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
        ) : null}
        <span className="product-index-tag">{product.index}</span>
        <div className="product-art-overlay" />
      </div>
      <div className="product-tile-body">
        <div>
          <p className="micro-label">{product.eyebrow}</p>
          <h3>{product.name}</h3>
        </div>
        <ArrowUpRight size={18} className="tile-arrow" />
      </div>
      <div className="product-tile-meta">
        <StatusBadge status={product.status} />
        <span>{product.category}</span>
      </div>
    </Link>
  );
}

export function CategoryFilter({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (category: string) => void;
}) {
  return (
    <div className="filter-row" aria-label="Product categories">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={selected === category ? "filter-button filter-button-active" : "filter-button"}
        >
          {category}
          <span>{category === "All products" ? "08" : ""}</span>
        </button>
      ))}
    </div>
  );
}

export function EnquiryForm({ productName }: { productName?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  if (submitted)
    return (
      <div className="success-panel">
        <span className="success-icon">
          <Check size={18} />
        </span>
        <h3>Thank you. Your enquiry is ready to be continued.</h3>
        <p>
          We’ll review the details and respond through the contact information provided. This is a
          planning-stage conversation, so every brief helps shape what comes next.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  return (
    <form
      className="enquiry-form"
      onSubmit={(event) => {
        event.preventDefault();
        setFormError("");
        const form = new FormData(event.currentTarget);
        const email = String(form.get("email") ?? "");
        if (
          !form.get("name") ||
          !email.includes("@") ||
          !form.get("message") ||
          !form.get("consent")
        ) {
          setFormError("Please complete your name, email, message, and privacy consent.");
          return;
        }
        setSubmitted(true);
      }}
    >
      <div className="form-intro">
        <p className="eyebrow">Request information</p>
        <h2 className="display">Bring us a brief.</h2>
        <p>
          Tell us what you are exploring. We’ll keep the response focused, clear, and grounded in
          what is currently possible.
        </p>
      </div>
      {productName ? (
        <div className="selected-product">
          <span>Product of interest</span>
          <strong>{productName}</strong>
        </div>
      ) : null}
      <div className="form-grid">
        <label>
          <span>Full name</span>
          <input name="name" placeholder="Your name" autoComplete="name" />
        </label>
        <label>
          <span>Company name</span>
          <input name="company" placeholder="Company (optional)" autoComplete="organization" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" placeholder="you@company.com" autoComplete="email" />
        </label>
        <label>
          <span>Phone / WhatsApp</span>
          <input name="phone" placeholder="+91 ..." autoComplete="tel" />
        </label>
        <label>
          <span>I am a</span>
          <select name="role" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Buyer</option>
            <option>Supplier</option>
            <option>Distributor</option>
          </select>
        </label>
        <label>
          <span>Product category</span>
          <select name="category" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {categories.slice(1).map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </label>
        <label className="field-wide">
          <span>Estimated order quantity</span>
          <input name="quantity" placeholder="Share a range if known" />
        </label>
        <label className="field-wide">
          <span>Message</span>
          <textarea name="message" rows={5} placeholder="What would you like to explore?" />
        </label>
      </div>
      <label className="consent">
        <input name="consent" type="checkbox" />
        <span>I agree to Anvaya Global using these details to respond to my enquiry.</span>
      </label>
      {formError ? (
        <p className="form-error" role="alert">
          {formError}
        </p>
      ) : null}
      <Button type="submit" size="lg">
        Submit enquiry <ArrowUpRight size={16} />
      </Button>
    </form>
  );
}

export function Disclosure({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="disclosure">
      <summary>
        {title}
        <ChevronDown size={17} />
      </summary>
      <div>{children}</div>
    </details>
  );
}

export function SectionLink({
  to,
  children,
}: {
  to: "/about" | "/products" | "/sourcing" | "/markets" | "/quality" | "/contact" | "/catalog";
  children: React.ReactNode;
}) {
  return (
    <Link to={to} className="text-link">
      {children}
      <ArrowRight size={15} />
    </Link>
  );
}
