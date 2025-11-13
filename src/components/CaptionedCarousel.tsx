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

    useEffect(() => {
        if (!api) return;

        setActiveIndex(api.selectedScrollSnap());
        const onSelect = () => setActiveIndex(api.selectedScrollSnap());

        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api]);



    return (
        <div className="w-full mx-auto flex flex-col items-center">
            <Carousel
                setApi={setApi}
                opts={{ loop: true }}
                className="w-full max-w-3xl"
            >
                <CarouselContent className="flex items-center">
                    {slides.map((slide, index) => (
                        <CarouselItem
                            key={index}
                            className="flex justify-center items-center"
                        >
                            <img
                                src={slide.src}
                                alt={`Slide ${index + 1}`}
                                className="object-contain rounded-xl w-full max-h-[500px]"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 rounded-full" />
                <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 rounded-full" />
            </Carousel>

            {/* Caption snug below the image */}
            <div className="text-center text-sm mt-1 max-w-3xl px-2">
                {slides[activeIndex]?.caption}
            </div>
        </div>
    );
}