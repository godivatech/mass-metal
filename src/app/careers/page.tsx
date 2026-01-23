"use client";

import type { Metadata } from "next";
import { Briefcase, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { useState } from "react";

const OPENINGS = [
    {
        role: "Service Engineer",
        icon: Wrench,
        description: "Performs process tests along with associated inspection, process control, documentation, and data collection activities. Assists in developing fixturing and tooling design concepts and has the ability to express and implement ideas with tool designers.",
    },
    {
        role: "Marketing Executive",
        icon: Briefcase,
        description: "A manufacturing engineer working within medical devices will design systems and processes for devices, install, repair and maintain equipment used for manufacturing and quality control, and make sure that machinery operates correctly and safely.",
    },
];

export default function CareersPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        additionalInfo: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
        alert("Application submitted successfully! We will contact you soon.");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <div className="bg-primary text-white py-16">
                <Container>
                    <h1 className="text-4xl font-bold mb-4">Careers at Mas Metal</h1>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Build your career with Madurai's leading metal craft company. We value skill, dedication, and safety.
                    </p>
                </Container>
            </div>

            <section className="py-20">
                <Container>
                    <div className="max-w-5xl mx-auto">
                        <AnimateOnScroll>
                            <h2 className="text-2xl font-bold text-primary mb-8 text-center">Current Openings</h2>
                        </AnimateOnScroll>

                        <div className="grid md:grid-cols-2 gap-6 mb-16">
                            {OPENINGS.map((job, index) => (
                                <AnimateOnScroll key={index} delay={index * 0.1}>
                                    <div className="bg-white border border-gray-200 p-8 rounded-xl hover:border-accent transition-colors">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="bg-accent/10 p-3 rounded-lg">
                                                <job.icon className="h-6 w-6 text-accent" />
                                            </div>
                                            <h3 className="text-xl font-bold text-primary">{job.role}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {job.description}
                                        </p>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>

                        <AnimateOnScroll delay={0.3}>
                            <div className="bg-surface rounded-2xl p-8 md:p-12">
                                <h3 className="text-2xl font-bold text-primary mb-2 text-center">Apply Now</h3>
                                <p className="text-gray-500 mb-8 text-center">
                                    Fill out the form below to apply for any of the above positions.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                                First Name <span className="text-accent">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                                placeholder="First Name*"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Your Email <span className="text-accent">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                                placeholder="Your Email"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Your Phone <span className="text-accent">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                                placeholder="Your Phone"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                                            Position Applying For <span className="text-accent">*</span>
                                        </label>
                                        <select
                                            id="position"
                                            name="position"
                                            required
                                            value={formData.position}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all appearance-none bg-white"
                                        >
                                            <option value="">Select Position</option>
                                            {OPENINGS.map((job, index) => (
                                                <option key={index} value={job.role}>
                                                    {job.role}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                                            Additional Information
                                        </label>
                                        <textarea
                                            id="additionalInfo"
                                            name="additionalInfo"
                                            rows={5}
                                            value={formData.additionalInfo}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                                            placeholder="Tell us about your experience and qualifications..."
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                                            Upload Resume (Optional)
                                        </label>
                                        <input
                                            type="file"
                                            id="resume"
                                            name="resume"
                                            accept=".pdf,.doc,.docx"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-accent file:text-white hover:file:bg-accent-hover file:cursor-pointer"
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <Button type="submit" variant="accent" size="lg" className="w-full md:w-auto px-12">
                                            Submit Application
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </Container>
            </section>
        </>
    );
}
