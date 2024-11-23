"use client";

import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";

export default function Page() {
  return (
    <main className="containerpy-6">
      <div className="mb-6">
        <h1 className="text-xl text-foreground">
          Parent category&gt;Child category
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
