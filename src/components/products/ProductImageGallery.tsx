"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImageGalleryProps {
    image1: string;
    image2: string;
    title: string;
}

export function ProductImageGallery({ image1, image2, title }: ProductImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(image1);

    const images = [
        { src: image1, alt: `${title} - View 1` },
        { src: image2, alt: `${title} - View 2` }
    ];

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <Image
                    src={selectedImage}
                    alt={title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                />
            </div>

            {/* Thumbnails Below */}
            <div className="flex gap-3">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(image.src)}
                        className={`relative w-24 h-24 rounded-lg border-2 ${selectedImage === image.src
                                ? 'border-accent ring-2 ring-accent/20'
                                : 'border-gray-200 hover:border-gray-400'
                            } cursor-pointer bg-white flex-shrink-0 transition-all overflow-hidden`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
