"use client";

import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";

const ratings = [5, 4, 3, 2, 1];

export default function FilterSidebar() {
  return (
    <div className="w-64 p-4 border rounded-xl space-y-6 text-sm">
      {/* Filter By Price */}
      <div>
        <h3 className="font-semibold mb-2">Filter By Price</h3>
        <div className="flex gap-2 mb-2">
          <input
            type="number"
            placeholder="Min"
            className="w-full p-1 border rounded text-xs"
          />
          <input
            type="number"
            placeholder="Max"
            className="w-full p-1 border rounded text-xs"
          />
        </div>
        <Slider defaultValue={[0]} max={100} step={1} />
      </div>

      {/* Product Types */}
      <div>
        <h3 className="font-semibold mb-2">Product Types</h3>
        <RadioGroup>
          {[
            "Laptop & Accessories",
            "Computers-Pc",
            "Speakers & Headset",
            "Keyboards & Mouse",
            "Camera",
            "Video Recording",
            "Tablets",
            "Table Lights",
          ].map((type) => (
            <div key={type} className="flex items-center gap-2">
              <RadioGroupItem value={type} id={type} />
              <Label htmlFor={type}>{type}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Brands */}
      <div>
        <h3 className="font-semibold mb-2">Brands</h3>
        <RadioGroup>
          {["HP (15)", "Apple (68)", "Dell (64)", "Asus (11)", "Camera"].map(
            (brand) => (
              <div key={brand} className="flex items-center gap-2">
                <RadioGroupItem value={brand} id={brand} />
                <Label htmlFor={brand}>{brand}</Label>
              </div>
            )
          )}
        </RadioGroup>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold mb-2">Rating</h3>
        <RadioGroup>
          {ratings.map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <RadioGroupItem value={String(rating)} id={`rating-${rating}`} />
              <Label htmlFor={`rating-${rating}`} className="flex gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                {Array.from({ length: 5 - rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gray-300" />
                ))}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-semibold mb-2">Availability</h3>
        <RadioGroup>
          {["In Stock", "Pre Order", "Upcoming"].map((status) => (
            <div key={status} className="flex items-center gap-2">
              <RadioGroupItem value={status} id={status} />
              <Label htmlFor={status}>{status}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
