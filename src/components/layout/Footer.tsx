import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1.2fr_1fr] gap-8 lg:gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6 items-start">
                        <Image
                            src="/Images/Logo.png"
                            alt="Mas Metal Craft & Automation"
                            width={160}
                            height={50}
                            className="h-10 w-auto object-contain object-left -ml-16"
                        />
                        <p className="text-gray-400 text-sm leading-relaxed text-left">
                            Establishing trust and durability since 2009. We specialize in high-quality metal craft and automation solutions for homes and businesses in Madurai.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white/90">Quick Links</h3>
                        <ul className="flex flex-col gap-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-accent transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white/90">Contact Us</h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                <span>
                                    {COMPANY_INFO.address.line1}<br />
                                    {COMPANY_INFO.address.line2}<br />
                                    {COMPANY_INFO.address.city} - {COMPANY_INFO.address.pincode}
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone className="h-5 w-5 text-accent shrink-0" />
                                <a href={`tel:${COMPANY_INFO.phone.value}`} className="hover:text-white transition-colors">
                                    {COMPANY_INFO.phone.display}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail className="h-5 w-5 text-accent shrink-0" />
                                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                                    {COMPANY_INFO.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Business Hours */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white/90">Business Hours</h3>
                        <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                            <li className="grid grid-cols-[80px_1fr] items-center">
                                <span>Mon - Sat:</span>
                                <span className="text-white">9:00 AM - 7:00 PM</span>
                            </li>
                            <li className="grid grid-cols-[80px_1fr] items-center">
                                <span>Sunday:</span>
                                <span className="text-white">Closed</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
                    <a
                        href="https://www.godivatech.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group text-gray-400 font-medium transition-colors"
                    >
                        Designed and developed by <span className="text-white font-bold group-hover:text-accent transition-colors">Godivatech</span>
                    </a>
                </div>
            </Container>
        </footer>
    );
}
