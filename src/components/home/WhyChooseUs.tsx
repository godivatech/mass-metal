import { ShieldCheck, Clock, Award, PenTool } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const features = [
    {
        icon: Clock,
        title: "Established in 2009",
        description: "Over a decade of experience serving Madurai with reliable metal works and services.",
    },
    {
        icon: ShieldCheck,
        title: "Premium Quality Materials",
        description: "We use only high-grade steel and materials to ensure long-lasting durability and strength.",
    },
    {
        icon: PenTool,
        title: "Custom Metal Craft",
        description: "Tailored designs to match your architectural requirements and personal style.",
    },
    {
        icon: Award,
        title: "Skilled Workforce",
        description: "Our team of expert welders and technicians ensure precision in every joint.",
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-surface">
            <Container>
                <AnimateOnScroll>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Mas Metal?</h2>
                        <p className="text-gray-500">
                            We combine traditional craftsmanship with modern technology to deliver the best metal solutions in Madurai.
                        </p>
                    </div>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <AnimateOnScroll key={index} delay={index * 0.1}>
                            <div className="bg-white p-8 rounded-xl shadow-xs border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                                <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                                    <feature.icon className="h-6 w-6 text-accent" />
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-3">{feature.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Container>
        </section>
    );
}
