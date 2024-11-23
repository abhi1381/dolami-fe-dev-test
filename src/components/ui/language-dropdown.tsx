"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as React from "react";

const languages = [
  {
    code: "en-US",
    name: "English(US)",
    flag: "🇺🇸",
  },
  {
    code: "ja",
    name: "Japanese",
    flag: "🇯🇵",
  },
];

export function LanguageDropdown() {
  const [selected, setSelected] = React.useState(languages[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 px-3">
          <span className="text-lg">{selected.flag}</span>
          <span>{selected.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[200px] bg-[#2A2A2A] text-white border-gray-600"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setSelected(language)}
            className="flex items-center gap-2 hover:bg-gray-700"
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
