import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageFrame, ProductTile, CategoryFilter } from "@/components/anvaya-site";
import { products } from "@/lib/anvaya-data";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products Explorer — Anvaya Global" },
      {
        name: "description",
        content:
          "Explore Indian agro products, spices, grains, and specialty foods available for international sourcing and custom briefs.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All products");

  const filteredProducts =
    selectedCategory === "All products"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <PageFrame
      eyebrow="Indian Food Products / Catalogue"
      title={
        <>
          Products in <em>exploration.</em>
        </>
      }
      intro="Explore our active sourcing categories. Every product status is transparently marked — whether exploring suppliers, currently sourcing, or open to direct buyer enquiries."
    >
      <section className="section explorer-section">
        <div className="shell">
          <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />

          {filteredProducts.length > 0 ? (
            <div className="explorer-grid">
              {filteredProducts.map((product) => (
                <ProductTile key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state mt-8">
              <p>No products currently listed in this category.</p>
            </div>
          )}
        </div>
      </section>
    </PageFrame>
  );
}
