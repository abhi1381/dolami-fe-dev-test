"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

interface Platform {
  id: string;
  name: string;
  logo: string;
}

const platforms: Platform[] = [
  {
    id: "vrchat-quest",
    name: "VRChat (Quest)",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "vrchat-pcvr",
    name: "VRChat (PCVR)",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "spatial",
    name: "Spatial",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "chillout-vr",
    name: "ChilloutVR",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "neos-vr",
    name: "Neos VR",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "cluster",
    name: "Cluster",
    logo: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "virtual-cast",
    name: "Virtual Cast",
    logo: "/placeholder.svg?height=40&width=40",
  },
  { id: "others", name: "Others", logo: "/placeholder.svg?height=40&width=40" },
];

interface FilterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FilterDialog({ open, onOpenChange }: FilterDialogProps) {
  const [priceRange, setPriceRange] = React.useState([0, 1000]);
  const [selectedPlatforms, setSelectedPlatforms] = React.useState<string[]>(
    []
  );

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  const handlePlatformToggle = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId)
        ? prev.filter((id) => id !== platformId)
        : [...prev, platformId]
    );
  };

  const handleClearAll = () => {
    setPriceRange([0, 1000]);
    setSelectedPlatforms([]);
  };

  const handleApply = () => {
    // Handle apply filters
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-[#2A2A2A] text-white">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>Filters</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Price range</h4>
            <Slider
              min={0}
              max={1000}
              step={1}
              value={priceRange}
              onValueChange={handlePriceChange}
              className="w-full"
            />
            <div className="flex justify-between gap-4">
              <div className="relative flex-1">
                <span className="absolute left-3 top-2.5 text-sm text-muted-foreground">
                  $
                </span>
                <Input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    handlePriceChange([Number(e.target.value), priceRange[1]])
                  }
                  className="pl-7 bg-transparent border-gray-600"
                />
                <span className="absolute left-3 -top-5 text-xs text-muted-foreground">
                  Minimum
                </span>
              </div>
              <div className="relative flex-1">
                <span className="absolute left-3 top-2.5 text-sm text-muted-foreground">
                  $
                </span>
                <Input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    handlePriceChange([priceRange[0], Number(e.target.value)])
                  }
                  className="pl-7 bg-transparent border-gray-600"
                />
                <span className="absolute left-3 -top-5 text-xs text-muted-foreground">
                  Maximum
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Platforms</h4>
            <div className="grid grid-cols-3 gap-3">
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  onClick={() => handlePlatformToggle(platform.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg border ${
                    selectedPlatforms.includes(platform.id)
                      ? "border-primary bg-primary/10"
                      : "border-gray-600 hover:border-primary/50"
                  }`}
                >
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="w-8 h-8 mb-2"
                  />
                  <span className="text-xs text-center">{platform.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <Button
            variant="ghost"
            onClick={handleClearAll}
            className="text-white hover:text-white/80"
          >
            Clear all
          </Button>
          <Button
            onClick={handleApply}
            className="bg-white text-black hover:bg-white/90"
          >
            Apply
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
