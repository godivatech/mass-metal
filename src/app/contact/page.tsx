import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Phone, Mail, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
    title: "Contact Us | Mas Metal Craft & Automation",
    description: "Get in touch with Mas Metal in Madurai. Call us for quotes on gates, grills, and automation works.",
};

export default function ContactPage() {
    return (
        <>
            <div className="bg-primary text-white py-16">
                <Container>
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Ready to start your project? Reach out to us for a free consultation and quote.
                    </p>
                </Container>
            </div>

            <section className="py-16 md:py-20">
                <Container>
                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <AnimateOnScroll delay={0}>
                            <div className="bg-surface p-6 rounded-xl border border-gray-100 flex items-start gap-4 h-full">
                                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                                    <Phone className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary mb-1">Phone Number</h3>
                                    <p className="text-gray-500 mb-2 text-sm">Mon-Sat from 9am to 7pm</p>
                                    <a href={`tel:${COMPANY_INFO.phone.value}`} className="text-lg font-bold text-primary hover:text-accent transition-colors block">
                                        {COMPANY_INFO.phone.display}
                                    </a>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.1}>
                            <div className="bg-surface p-6 rounded-xl border border-gray-100 flex items-start gap-4 h-full">
                                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                                    <Mail className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary mb-1">Email Address</h3>
                                    <p className="text-gray-500 mb-2 text-sm">Send us your requirements</p>
                                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-lg font-medium text-primary hover:text-accent transition-colors break-all block">
                                        {COMPANY_INFO.email}
                                    </a>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        <AnimateOnScroll delay={0.2}>
                            <div className="bg-surface p-6 rounded-xl border border-gray-100 flex items-start gap-4 h-full">
                                <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary mb-1">Workshop Location</h3>
                                    <address className="not-italic text-gray-500 leading-relaxed text-sm">
                                        {COMPANY_INFO.address.line1}<br />
                                        {COMPANY_INFO.address.line2}<br />
                                        {COMPANY_INFO.address.city} - {COMPANY_INFO.address.pincode}
                                    </address>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Contact Form - 7 columns */}
                        <div className="lg:col-span-7">
                            <AnimateOnScroll direction="left">
                                <ContactForm />
                            </AnimateOnScroll>
                        </div>

                        {/* Sidebar - Map & WhatsApp - 5 columns */}
                        <div className="lg:col-span-5 space-y-8">
                            {/* WhatsApp Card */}
                            <AnimateOnScroll direction="right">
                                <div className="bg-green-50 border border-green-100 p-8 rounded-2xl">
                                    <h3 className="text-xl font-bold text-green-900 mb-3">Instant Chat</h3>
                                    <p className="text-green-800/80 mb-6 leading-relaxed">
                                        Need a quicker response? Chat with us on WhatsApp to share photos, drawings, or discuss your immediate metal craft needs.
                                    </p>
                                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white border-transparent" size="lg" asChild>
                                        <a href={`https://wa.me/${COMPANY_INFO.whatsapp.replace("+", "")}`}>
                                            <WhatsAppIcon className="mr-2 h-5 w-5" />
                                            Chat on WhatsApp
                                        </a>
                                    </Button>
                                </div>
                            </AnimateOnScroll>

                            {/* Map */}
                            <AnimateOnScroll direction="right" delay={0.2}>
                                <div className="h-[400px] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 relative shadow-sm">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.138478477157!2d78.140924!3d9.916666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5bc6b083437%3A0x6bd773738e4a860!2sY.Pudhupatti%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        title="Mas Metal Location"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
