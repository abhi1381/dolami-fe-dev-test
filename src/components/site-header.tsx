"use client";

import { Button } from "@/components/ui/button";
import { CategoryDropdown } from "@/components/ui/category-dropdown";
import { FilterDialog } from "@/components/ui/filter-dialog";
import { LanguageDropdown } from "@/components/ui/language-dropdown";
import { UserDropdown } from "@/components/ui/user-dorpdown";
import { categories } from "@/lib/data";
import { Search, ShoppingCart, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SearchInput } from "./search-input";

export function SiteHeader() {
  const [filterOpen, setFilterOpen] = useState(false);

  const handleCategorySelect = (category: string, subcategory: string) => {
    console.log("Selected:", category, subcategory);
    // Handle category selection
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={170} height={32} />
        </Link>
        <SearchInput />
        <div className="flex items-center gap-4 ml-auto">
          <LanguageDropdown />
          <UserDropdown />
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <FilterDialog open={filterOpen} onOpenChange={setFilterOpen} />
    </header>
  );
}
