"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[240px] bg-[#2A2A2A] text-white border-gray-600"
      >
        <DropdownMenuItem className="hover:bg-gray-700">
          Sign in
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-gray-700">
          Sign up
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem className="hover:bg-gray-700">
          List your item
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:bg-gray-700">
          Message to Yuta(The founder)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
