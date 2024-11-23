"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden bg-card">
      <div className="relative aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="text-sm">
            {product.category}
            <span className="text-gray-300">&gt;{product.subcategory}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-card-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.creator}</p>
        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
          ))}
          <span className="ml-1 text-sm text-card-foreground">
            {product.rating}
          </span>
        </div>
        <div className="mt-2 font-semibold text-card-foreground">
          ${product.price.toFixed(2)}
        </div>
      </CardContent>
    </Card>
  );
}
