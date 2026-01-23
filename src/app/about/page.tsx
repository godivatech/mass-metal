import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Award, ShieldCheck, Users } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
    title: "About Us | Mas Metal Craft & Automation",
    description: "Learn about Mas Metal Craft & Automation, Madurai's trusted metal craft experts since 2009.",
};

export default function AboutPage() {
    return (
        <>
            {/* Header */}
            <div className="bg-primary text-white py-16">
                <Container>
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Building trust through steel since 2009. With over 17 years of excellence, we are dedicated to providing the highest quality metal craft and automation solutions.
                    </p>
                </Container>
            </div>

            {/* History & Intro */}
            <section className="py-20">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <AnimateOnScroll className="lg:w-1/2" direction="left">
                            <h2 className="text-3xl font-bold text-primary mb-6">Our Journey</h2>
                            <div className="prose prose-gray max-w-none text-gray-500 leading-relaxed space-y-4">
                                <p>
                                    <strong>Mas Metal Craft & Automation</strong> was founded in 2009. Our founders bring extensive international experience from foreign countries, including successful business operations in Malaysia. Supported by highly experienced professionals, we have built a robust foundation for quality and craftsmanship.
                                </p>
                                <p>
                                    In addition to over <strong>17 years of experience</strong> in the metal craft field, we also proudly possess **25 years of expertise in the electrical field**, which gives us a distinct advantage in delivering sophisticated automation solutions.
                                </p>
                                <p>
                                    From a small workshop to a trusted industry name, we have grown significantly. Our vision is to continue this expansion and become the leading metal craft and automation company in **Tamil Nadu**, serving homeowners, architects, and industrial clients with excellence.
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll className="lg:w-1/2 grid gap-6" direction="right" delay={0.2}>
                            <div className="bg-surface p-6 rounded-xl border border-gray-100">
                                <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                                    <Users className="h-5 w-5 text-accent" />
                                    Experienced Team
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Our workforce consists of highly skilled welders, fabricators, and site supervisors who bring years of expertise to every project.
                                </p>
                            </div>
                            <div className="bg-surface p-6 rounded-xl border border-gray-100">
                                <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5 text-accent" />
                                    Quality Assurance
                                </h3>
                                <p className="text-sm text-gray-500">
                                    We never compromise on material quality. We use certified steel and premium components to ensure durability and safety.
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </Container>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-surface">
                <Container>
                    <div className="grid md:grid-cols-2 gap-12">
                        <AnimateOnScroll delay={0}>
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white mb-6">
                                <Award className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                            <p className="text-gray-500 leading-relaxed">
                                To provide innovative, durable, and aesthetic metal solutions that enhance the safety and beauty of every property we touch. We aim to exceed customer expectations through craftsmanship and service excellence.
                            </p>
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={0.2}>
                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-accent text-white mb-6">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-primary mb-4">Our Values</h2>
                            <ul className="space-y-3 text-gray-500">
                                <li className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    Integrity in pricing and materials
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    Commitment to safety standards
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    Continuous innovation in design
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                                    Customer-centric approach
                                </li>
                            </ul>
                        </AnimateOnScroll>
                    </div>
                </Container>
            </section>
        </>
    );
}
