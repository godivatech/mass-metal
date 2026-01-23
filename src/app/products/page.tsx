"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilters, FilterState } from "@/components/products/ProductFilters";
import { PRODUCTS } from "@/lib/constants";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export default function ProductsPage() {
    const [filters, setFilters] = useState<FilterState>({ categories: [], materials: [] });

    // Filter products based on selected filters
    const filteredProducts = PRODUCTS.filter(product => {
        const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);
        const materialMatch = filters.materials.length === 0 || filters.materials.some(mat => {
            const productMaterial = product.specifications["Material"]?.toLowerCase() || "";
            return productMaterial.includes(mat.toLowerCase());
        });
        return categoryMatch && materialMatch;
    });

    // Group filtered products by category
    const productsByCategory: Record<string, typeof PRODUCTS> = {};
    filteredProducts.forEach(product => {
        if (!productsByCategory[product.category]) {
            productsByCategory[product.category] = [];
        }
        productsByCategory[product.category].push(product);
    });

    const hasFilters = filters.categories.length > 0 || filters.materials.length > 0;

    return (
        <>
            <div className="bg-primary text-white py-16">
                <Container>
                    <h1 className="text-4xl font-bold mb-4">Our Products</h1>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Explore our premium collection of custom metal works. We design and fabricate based on your specific requirements.
                    </p>
                </Container>
            </div>

            <div className="py-12 bg-gray-50/50">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Sidebar - Filters */}
                        <aside className="lg:col-span-3">
                            <ProductFilters onFilterChange={setFilters} />
                        </aside>

                        {/* Right Content - Products */}
                        <main className="lg:col-span-9">
                            {filteredProducts.length === 0 ? (
                                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                                    <p className="text-gray-500 text-lg">No products found matching your filters.</p>
                                    <p className="text-gray-400 text-sm mt-2">Try adjusting your filter selection.</p>
                                </div>
                            ) : hasFilters ? (
                                <div>
                                    <div className="mb-6">
                                        <p className="text-sm text-gray-600">
                                            Showing <span className="font-semibold text-primary">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                        {filteredProducts.map((product, index) => (
                                            <AnimateOnScroll key={product.id} delay={index * 0.08}>
                                                <ProductCard {...product} />
                                            </AnimateOnScroll>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                Object.entries(productsByCategory).map(([category, products]) => (
                                    <section key={category} className="mb-12 last:mb-0">
                                        <h2 className="text-2xl font-bold text-primary mb-6 border-l-4 border-accent pl-4">{category}</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                            {products.map((product, index) => (
                                                <AnimateOnScroll key={product.id} delay={index * 0.08}>
                                                    <ProductCard {...product} />
                                                </AnimateOnScroll>
                                            ))}
                                        </div>
                                    </section>
                                ))
                            )}
                        </main>
                    </div>
                </Container>
            </div>
        </>
    );
}
