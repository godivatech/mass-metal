import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/products/ProductCard";
import { PRODUCTS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function ProductsPreview() {
    const featuredProducts = PRODUCTS.slice(0, 6); // Show top 6

    return (
        <section className="py-20 bg-background">
            <Container>
                <AnimateOnScroll>
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div className="max-w-xl">
                            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">High-Quality Metal Works</h2>
                            <p className="mt-4 text-gray-500">
                                Explore our range of custom-fabricated gates, grills, and automation systems designed for security and elegance.
                            </p>
                        </div>
                        <Button variant="outline" asChild>
                            <Link href="/products">
                                View All Products
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product, index) => (
                        <AnimateOnScroll key={product.id} delay={index * 0.1}>
                            <ProductCard
                                {...product}
                            />
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}
