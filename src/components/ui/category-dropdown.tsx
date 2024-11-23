"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryDropdownProps {
  categories: {
    name: string;
    subcategories: string[];
  }[];
  onSelect: (category: string, subcategory: string) => void;
}

export function CategoryDropdown({
  categories,
  onSelect,
}: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null
  );
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <span>All Categories</span>
        <ChevronRight
          className={cn(
            "h-4 w-4 transition-transform",
            isOpen ? "rotate-90" : ""
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+4px)] z-50 w-[480px] rounded-lg border bg-[#2A2A2A] p-2 shadow-lg">
          <div className="flex">
            {/* Main categories */}
            <div className="w-1/2 border-r border-border pr-2">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent",
                    selectedCategory === category.name ? "bg-accent" : ""
                  )}
                >
                  {category.name}
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  onSelect("all", "all");
                  setIsOpen(false);
                }}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent"
              >
                All
              </button>
            </div>

            {/* Subcategories */}
            <div className="w-1/2 pl-2">
              {selectedCategory &&
                categories
                  .find((c) => c.name === selectedCategory)
                  ?.subcategories.map((subcategory) => (
                    <button
                      key={subcategory}
                      onClick={() => {
                        onSelect(selectedCategory, subcategory);
                        setIsOpen(false);
                      }}
                      className="flex w-full items-center rounded-md px-3 py-2 text-sm hover:bg-accent"
                    >
                      {subcategory}
                    </button>
                  ))}
              {selectedCategory && (
                <>
                  <button
                    onClick={() => {
                      onSelect(selectedCategory, "others");
                      setIsOpen(false);
                    }}
                    className="flex w-full items-center rounded-md px-3 py-2 text-sm hover:bg-accent"
                  >
                    Others
                  </button>
                  <button
                    onClick={() => {
                      onSelect(selectedCategory, "all");
                      setIsOpen(false);
                    }}
                    className="flex w-full items-center rounded-md px-3 py-2 text-sm hover:bg-accent"
                  >
                    All in {selectedCategory}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
