import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function AboutPreview() {
    return (
        <section className="py-20 bg-background overflow-hidden relative">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <AnimateOnScroll className="w-full lg:w-1/2" direction="left">
                        <div className="aspect-video rounded-2xl bg-surface relative overflow-hidden border border-gray-100 shadow-lg">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/Images/videos/video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll className="w-full lg:w-1/2" direction="right">
                        <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">About Our Company</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                            Crafting Steel with Precision & Passion
                        </h2>
                        <p className="text-gray-500 text-lg mb-6 leading-relaxed">
                            At Mas Metal Craft & Automation, we take pride in delivering top-notch metal works. From simple window grills to complex industrial gates, we handle every project with utmost dedication.
                        </p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-accent" />
                                <span className="text-gray-700 font-medium">17+ Years of Experience</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-accent" />
                                <span className="text-gray-700 font-medium">Custom Design Solutions</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-accent" />
                                <span className="text-gray-700 font-medium">Competitive Pricing</span>
                            </li>
                        </ul>

                        <Button asChild>
                            <Link href="/about">
                                Learn More About Us
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </AnimateOnScroll>
                </div>
            </Container>
        </section>
    );
}
