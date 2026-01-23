"use client";

import { useState } from "react";

interface ProductFiltersProps {
    onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
    categories: string[];
    materials: string[];
}

const CATEGORIES = ["Mild Steel Gate", "Stainless Steel Railing", "Window Grill"];
const MATERIALS = ["Mild Steel", "Stainless Steel (SS 202)", "Stainless Steel (SS 304)"];

export function ProductFilters({ onFilterChange }: ProductFiltersProps) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

    const handleCategoryToggle = (category: string) => {
        const newCategories = selectedCategories.includes(category)
            ? selectedCategories.filter(c => c !== category)
            : [...selectedCategories, category];

        setSelectedCategories(newCategories);
        onFilterChange({ categories: newCategories, materials: selectedMaterials });
    };

    const handleMaterialToggle = (material: string) => {
        const newMaterials = selectedMaterials.includes(material)
            ? selectedMaterials.filter(m => m !== material)
            : [...selectedMaterials, material];

        setSelectedMaterials(newMaterials);
        onFilterChange({ categories: selectedCategories, materials: newMaterials });
    };

    const clearFilters = () => {
        setSelectedCategories([]);
        setSelectedMaterials([]);
        onFilterChange({ categories: [], materials: [] });
    };

    const hasActiveFilters = selectedCategories.length > 0 || selectedMaterials.length > 0;

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-4">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-primary">Filters</h3>
                {hasActiveFilters && (
                    <button
                        onClick={clearFilters}
                        className="text-xs text-accent hover:text-accent-hover font-medium"
                    >
                        Clear All
                    </button>
                )}
            </div>

            {/* Category Filter */}
            <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent rounded-full"></span>
                    Category
                </h4>
                <div className="space-y-2">
                    {CATEGORIES.map((category) => (
                        <label key={category} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(category)}
                                onChange={() => handleCategoryToggle(category)}
                                className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent focus:ring-offset-0"
                            />
                            <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                                {category}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Material Filter */}
            <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent rounded-full"></span>
                    Material
                </h4>
                <div className="space-y-2">
                    {MATERIALS.map((material) => (
                        <label key={material} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={selectedMaterials.includes(material)}
                                onChange={() => handleMaterialToggle(material)}
                                className="w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent focus:ring-offset-0"
                            />
                            <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                                {material}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}
