import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { COMPANY_INFO } from "@/lib/constants";

export function Hero() {
    return (
        <section className="relative bg-primary text-white py-20 lg:py-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Images/Banner/1.jpg"
                    alt="Mas Metal Craft Workshop"
                    fill
                    className="object-cover opacity-50"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/50 to-transparent" />
            </div>

            <Container className="relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-accent-hover mb-6 border border-white/10 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Trusted in Madurai Since 2009
                    </div>

                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 tracking-tight">
                        Reliable Metal Craft & <span className="text-accent">Automation Works</span>
                    </h1>

                    <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                        Specialized in Gates, Grills, Railings & Rolling Shutters. We deliver high-quality custom metal works for homes and businesses with precision and durability.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" variant="accent" className="text-base h-14 px-8" asChild>
                            <a href={`tel:${COMPANY_INFO.phone.value}`}>
                                <Phone className="mr-2 h-5 w-5" />
                                Call Now
                            </a>
                        </Button>

                        <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
                            <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace("+", "")}`}>
                                <WhatsAppIcon className="mr-2 h-5 w-5 text-green-500" />
                                WhatsApp Enquiry
                            </a>
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-accent" />
                            Expert Craftsmanship
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-accent" />
                            On-Time Delivery
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-accent" />
                            Best Prices
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
