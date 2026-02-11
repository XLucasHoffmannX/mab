import React from "react";
import { Button } from "@/components/ui/button";

interface FilterBarProps {
  categories: string[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
}

export default function FilterBar({
  categories,
  activeFilter,
  onFilterChange,
}: FilterBarProps) {
  return (
    <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
      <Button
        variant={activeFilter === "" ? "default" : "secondary"}
        className={`rounded-full px-6 transition-all duration-300 ${activeFilter === "" ? "bg-[#322783] hover:bg-[#2a216e]" : "bg-white border border-gray-100"}`}
        onClick={() => onFilterChange("")}
      >
        Todos
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeFilter === category ? "default" : "secondary"}
          className={`rounded-full px-6 whitespace-nowrap transition-all duration-300 ${activeFilter === category ? "bg-[#322783] hover:bg-[#2a216e]" : "bg-white border border-gray-100"}`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
