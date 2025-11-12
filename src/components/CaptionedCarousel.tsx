"use client";

import { useState, useEffect } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";

interface Slide {
    src: string;
    caption: string;
}

export default function CaptionedCarousel({ slides }: { slides: Slide[] }) {
    const [api, setApi] = useState<CarouselApi>();
    const [activeIndex, setActiveIndex] = useState(0);

    // Listen for slide changes
    useEffect(() => {
        if (!api) return;

        // Initialize current index
        setActiveIndex(api.selectedScrollSnap());

        // Update when user changes slide
        const onSelect = () => {
            setActiveIndex(api.selectedScrollSnap());
        };

        api.on("select", onSelect);

        // Cleanup listener
        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    return (
        <div className="w-full mx-auto flex flex-col items-center">
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index} className="flex justify-center">
                            <div className="">
                                <img
                                    src={slide.src}
                                    alt={`Slide ${index + 1}`}

                                    className="object-cover rounded-xl w-full h-full max-w-full"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 rounded-full" />
                <CarouselNext className="right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 rounded-full" />
            </Carousel>

            <div className="text-center text-sm mt-3">
                {slides[activeIndex]?.caption}
            </div>
        </div>
    );
}
