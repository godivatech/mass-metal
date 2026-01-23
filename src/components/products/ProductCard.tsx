import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

interface ProductCardProps {
    id: string;
    title: string;
    category: string;
    image1: string;
}

export function ProductCard({ id, title, category, image1 }: ProductCardProps) {
    return (
        <div className="group flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden transition-all hover:border-accent hover:shadow-lg h-full">
            <Link href={`/products/${id}`} className="block relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                <Image
                    src={image1}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary rounded-full uppercase tracking-wider">
                    {category}
                </div>
            </Link>

            <div className="p-6 flex flex-col flex-1">
                <Link href={`/products/${id}`}>
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                        {title}
                    </h3>
                </Link>

                <div className="mt-auto flex flex-col gap-3">
                    <div className="flex gap-3">
                        <Button variant="accent" size="sm" className="flex-1" asChild>
                            <a href={`tel:${COMPANY_INFO.phone.value}`}>
                                <Phone className="mr-2 h-4 w-4" />
                                Call
                            </a>
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                            <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace("+", "")}?text=Hi, I am interested in ${title}`}>
                                <WhatsAppIcon className="mr-2 h-4 w-4 text-green-600" />
                                WhatsApp
                            </a>
                        </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full text-gray-500 hover:text-accent" asChild>
                        <Link href={`/products/${id}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
