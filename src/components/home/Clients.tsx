"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

interface Client {
    id: string;
    name: string;
    logo?: string;
    logoPadding?: string;
    logoScale?: string;
    logoHoverScale?: string;
    description: string;
    // Styling attributes to make the text-based logos look like actual brand marks
    textColor: string;
    bgColor: string;
    borderColor: string;
    brandText: string;
    subText?: string;
    logoColorClass?: string;
}

const CLIENTS: Client[] = [
    {
        id: "hcl",
        name: "HCL Technologies",
        logo: "/Images/company logos/HCL.png",
        description: "Global Technology Company",
        textColor: "text-[#002B49]",
        bgColor: "bg-blue-50/40",
        borderColor: "border-blue-100",
        brandText: "HCL",
        subText: "Technologies",
        logoColorClass: "bg-[#002B49]",
    },
    {
        id: "honeywell",
        name: "Honeywell",
        logo: "/Images/company logos/Honeywell-Logo.png",
        logoPadding: "p-2",
        logoScale: "scale-[1.10]",
        logoHoverScale: "group-hover:scale-[1.15]",
        description: "Industrial Automation & Aero",
        textColor: "text-[#EE3124]",
        bgColor: "bg-red-50/40",
        borderColor: "border-red-100",
        brandText: "Honeywell",
        logoColorClass: "bg-[#EE3124]",
    },
    {
        id: "srm",
        name: "SRM Madurai",
        logo: "/Images/company logos/srm.png",
        logoPadding: "p-0",
        logoScale: "scale-[1.35]",
        logoHoverScale: "group-hover:scale-[1.40]",
        description: "Educational Institution & Campus",
        textColor: "text-[#1E3A8A]",
        bgColor: "bg-amber-50/30",
        borderColor: "border-amber-100/70",
        brandText: "SRM",
        subText: "MADURAI",
        logoColorClass: "bg-amber-500",
    },
];

export function Clients() {
    return (
        <section className="py-16 bg-surface border-y border-gray-100 relative overflow-hidden">
            {/* Ambient Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

            <Container>
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <AnimateOnScroll direction="up">
                        <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
                            Trusted Partnerships
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                            Leading Brands & Institutions We Work With
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
                            We deliver precision engineering, structural steel fabrications, and automation support for esteemed companies and campuses.
                        </p>
                    </AnimateOnScroll>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {CLIENTS.map((client, index) => (
                        <AnimateOnScroll
                            key={client.id}
                            direction="up"
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <div className="group relative h-full flex flex-col items-center justify-between p-6 bg-white border border-gray-200 rounded-2xl hover:border-accent hover:shadow-md transition-all duration-300">
                                {/* Logo Area */}
                                <div className="w-full h-24 flex items-center justify-center mb-4 relative rounded-xl overflow-hidden bg-gray-50/50 group-hover:bg-white transition-colors duration-300">
                                    {client.logo ? (
                                        <Image
                                            src={client.logo}
                                            alt={`${client.name} Logo`}
                                            fill
                                            className={`object-contain ${client.logoPadding || "p-4"} ${client.logoScale || "scale-100"} ${client.logoHoverScale || "group-hover:scale-105"} transition-transform duration-300`}
                                        />
                                    ) : (
                                        /* Custom stylized text-logo mark that simulates a brand logo */
                                        <div className={`flex flex-col items-center justify-center w-full h-full rounded-xl border ${client.borderColor} ${client.bgColor} px-4 py-2 transition-all duration-300 group-hover:scale-[1.02]`}>
                                            <div className="flex items-center gap-1.5">
                                                {/* Simulated Logo Mark Icon */}
                                                <div className={`w-2 h-2 rounded-full ${client.logoColorClass} animate-pulse`} />
                                                <span className={`text-xl md:text-2xl font-black tracking-tight ${client.textColor}`}>
                                                    {client.brandText}
                                                </span>
                                            </div>
                                            {client.subText && (
                                                <span className="text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase -mt-0.5">
                                                    {client.subText}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Client Info */}
                                <div className="text-center">
                                    <h3 className="font-bold text-primary text-base group-hover:text-accent transition-colors duration-300">
                                        {client.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-1 font-medium">
                                        {client.description}
                                    </p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}
