"use client";

import * as React from "react";
import { Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function SearchInput() {
  const [category, setCategory] = React.useState("All Categories");

  return (
    <div className="flex items-center w-full max-w-2xl rounded-full border border-gray-600 bg-background">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-l-full border-r border-gray-600 min-w-[160px]">
          <span className="mr-2 text-sm">{category}</span>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[160px]">
          <DropdownMenuItem onClick={() => setCategory("All Categories")}>
            All Categories
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setCategory("Avatars")}>
            Avatars
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setCategory("Fashion")}>
            Fashion
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <input
        type="text"
        placeholder="Search items..."
        className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
      />

      <button className="p-2 mr-1 rounded-full bg-red-500 hover:bg-red-600">
        <Search className="h-5 w-5 text-white" />
      </button>
    </div>
  );
}
