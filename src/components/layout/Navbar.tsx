"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    // Close mobile menu when route changes
    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm lg:border-none">
            <div className="bg-primary py-2 text-white hidden lg:block">
                <Container className="flex items-center justify-between text-sm font-medium">
                    <div>Manufacturing Excellence Since {COMPANY_INFO.founded}</div>
                    <div className="flex items-center gap-6">
                        <a href={`tel:${COMPANY_INFO.phone.value}`} className="flex items-center gap-2 hover:text-secondary-accent transition-colors">
                            <Phone className="h-4 w-4" />
                            <span>{COMPANY_INFO.phone.display}</span>
                        </a>
                        <div className="h-4 w-[1px] bg-white/20" />
                        <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-secondary-accent transition-colors">
                            {COMPANY_INFO.email}
                        </a>
                    </div>
                </Container>
            </div>

            <Container className="flex h-20 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50 relative">
                    <Image
                        src="/Images/Logo.png"
                        alt="Mas Metal Craft & Automation"
                        width={180}
                        height={60}
                        priority
                        className="h-12 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-accent",
                                pathname === link.href ? "text-accent" : "text-text-primary"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button variant="outline" size="sm" asChild className="hidden xl:flex">
                        <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace("+", "")}`}>
                            <WhatsAppIcon className="mr-2 h-4 w-4" />
                            WhatsApp
                        </a>
                    </Button>
                    <Button variant="accent" size="sm" asChild>
                        <a href={`tel:${COMPANY_INFO.phone.value}`}>
                            <Phone className="mr-2 h-4 w-4" />
                            Call Now
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md p-2 text-primary hover:bg-surface lg:hidden"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </Container>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 flex flex-col bg-white pt-24 lg:hidden"
                    >
                        <Container className="flex flex-col gap-6">
                            <nav className="flex flex-col gap-4">
                                {NAV_LINKS.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "text-2xl font-semibold tracking-tight transition-colors py-2 border-b border-gray-100",
                                            pathname === link.href ? "text-accent" : "text-text-primary"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-8 flex flex-col gap-4">
                                <Button variant="accent" size="lg" className="w-full justify-start" asChild>
                                    <a href={`tel:${COMPANY_INFO.phone.value}`}>
                                        <Phone className="mr-2 h-5 w-5" />
                                        {COMPANY_INFO.phone.display}
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace("+", "")}`}>
                                        <WhatsAppIcon className="mr-2 h-5 w-5 text-green-600" />
                                        Chat on WhatsApp
                                    </a>
                                </Button>
                            </div>

                            <div className="mt-auto pb-12 text-sm text-text-muted">
                                <p>{COMPANY_INFO.address.line1}</p>
                                <p>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.pincode}</p>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
