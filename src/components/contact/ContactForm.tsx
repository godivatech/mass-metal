"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600 text-2xl">
                    ✓
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-700">
                    Thank you for contacting us. We will get back to you shortly.
                </p>
                <Button
                    variant="outline"
                    className="mt-6 border-green-200 text-green-700 hover:bg-green-100"
                    onClick={() => setIsSubmitted(false)}
                >
                    Send Another Message
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-2">Send us a Message</h2>
            <p className="text-gray-500 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                            placeholder="Enter your phone number"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
                        placeholder="Enter your email address"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                    <select
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors bg-white"
                    >
                        <option>General Enquiry</option>
                        <option>Gate Metal Works</option>
                        <option>Window Grill</option>
                        <option>Railing Work</option>
                        <option>Automation Solution</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        id="message"
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors resize-none"
                        placeholder="Enter your message"
                    ></textarea>
                </div>

                <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </div>
    );
}
