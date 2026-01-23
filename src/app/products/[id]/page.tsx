import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { PRODUCTS, COMPANY_INFO } from "@/lib/constants";
import { Metadata } from "next";

interface Props {
    params: Promise<{
        id: string;
    }>
}

// Generate static routes for all products at build time
export async function generateStaticParams() {
    return PRODUCTS.map((product) => ({
        id: product.id,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return {};
    return {
        title: `${product.title} - Mas Metal Craft`,
        description: `Details for ${product.title} in the ${product.category} category.`,
    };
}

export default async function ProductDetailsPage({ params }: Props) {
    const { id } = await params;
    const product = PRODUCTS.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <div className="py-12 bg-gray-50/50 min-h-screen">
            <Container>
                <div className="mb-8">
                    <Link href="/products" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors group">
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Products
                    </Link>
                </div>

                <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
                    {/* Hero Section */}
                    <div className="p-6 md:p-10 border-b border-gray-100 bg-gradient-to-r from-gray-50/50 to-white">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                            <div className="space-y-2">
                                <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-accent text-xs font-bold tracking-wider uppercase">
                                    {product.category}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">{product.title}</h1>
                            </div>
                            <div className="flex flex-row gap-3 md:pt-2">
                                <Button size="lg" variant="accent" className="rounded-full shadow-lg shadow-orange-200/50" asChild>
                                    <a href={`tel:${COMPANY_INFO.phone.value}`}>
                                        <Phone className="mr-2 h-4 w-4" /> Call Now
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full border-2 hover:bg-green-50 hover:text-green-700 hover:border-green-200" asChild>
                                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace("+", "")}?text=I'm interested in ${product.title}`}>
                                        <WhatsAppIcon className="mr-2 h-4 w-4 text-green-600" /> WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
                        {/* LEFT COLUMN: Image Gallery */}
                        <div className="space-y-4">
                            <ProductImageGallery
                                image1={product.image1}
                                image2={product.image2}
                                title={product.title}
                            />
                        </div>

                        {/* RIGHT COLUMN: Product Info */}
                        <div className="space-y-8">
                            {/* Description */}
                            <div className="prose prose-lg text-gray-600 max-w-none">
                                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-accent rounded-full"></span>
                                    Product Overview
                                </h3>
                                <p className="leading-relaxed text-gray-600">
                                    {product.description}
                                </p>
                            </div>

                            {/* Specifications Grid */}
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-5 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-accent rounded-full"></span>
                                    Technical Specifications
                                </h3>
                                <div className="grid grid-cols-1 gap-3">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key} className="p-4 rounded-xl bg-gray-50 border border-transparent hover:border-accent/20 hover:bg-orange-50/30 transition-all">
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                                                {key}
                                            </p>
                                            <p className="text-base font-medium text-gray-900">
                                                {value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Custom CTA Card */}
                            <div className="relative overflow-hidden rounded-2xl bg-primary p-8 text-white shadow-2xl shadow-gray-200">
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-accent blur-3xl opacity-20"></div>
                                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-32 w-32 rounded-full bg-secondary-accent blur-3xl opacity-20"></div>

                                <div className="relative z-10">
                                    <h4 className="text-2xl font-bold mb-3">Need Custom Dimensions?</h4>
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        We specialize in bespoke metal craft. Whether it's a specific size, material grade (SS202/304), or a unique finish — we build exactly what you need.
                                    </p>

                                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 mb-6">
                                        <span className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Custom Sizing
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary-accent"></div> Grade Selection
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div> Premium Finishes
                                        </span>
                                    </div>

                                    <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 border-none font-semibold w-full" asChild>
                                        <a href="/contact">Get a Custom Quote</a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Products Section */}
                <div className="mt-16">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-primary mb-2">Featured Products</h2>
                        <p className="text-text-secondary">Explore more products from the {product.category} collection</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PRODUCTS
                            .filter(p => p.category === product.category && p.id !== product.id)
                            .slice(0, 4)
                            .map((featuredProduct) => (
                                <Link
                                    key={featuredProduct.id}
                                    href={`/products/${featuredProduct.id}`}
                                    className="group"
                                >
                                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                                        <div className="relative aspect-[4/3] bg-gray-100">
                                            <Image
                                                src={featuredProduct.image1}
                                                alt={featuredProduct.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-semibold text-primary group-hover:text-accent transition-colors line-clamp-2">
                                                {featuredProduct.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-1">{featuredProduct.category}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
