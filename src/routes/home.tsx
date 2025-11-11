import profilePic from "../../public/profilepic.png";
import {useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "@/components/ui/button";
// import { Pagination } from "../components/ui/pagination";
import { motion, AnimatePresence } from "framer-motion";
import {Particles} from "@/components/ui/shadcn-io/particles";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";

type Category = {
    name: string;
    indices: number[];
};

const categories = [
    { name: "Research", indices: [0, 1] },
    { name: "Software Development", indices: [2, 3, 4] },
    { name: "AI/ML", indices: [5, 6] },
    { name: "Hobbies", indices: [7, 8] },
];

const softEngImages = [
    "../../public/FullOldWTB-1.png",
    "../../public/profilepic.png",
]
const items = [
    { id: 0, title: "AI Research Project - Microsoft", details: (
        <div>
            <div className="text-md text-left -mt-5">
                Fall 2025 – Present
            </div>
            <div className="text-left mt-5">
                I currently have the oppurtunity to work closely with a project manager from Microsoft to investigate
                advanced Natural Language Processing (NLP) and GenAI techniques. Myself and a team of three others are
                designing and developing an agentic RAG system with retrieval quality as the top priority. We are designing and testing
                various frameworks to improve decision making and context optimization, while ensuring the system can be easily learned
                by users and further adapted for future improvements.
            </div>
        </div>

        ) },
    { id: 1, title: "Brewery Wastewater Research Project - Albania", details: (
            <div>
                <div className="text-md text-left -mt-5">
                    August 2024 - December 2024
                </div>
                <div className="text-left mt-5">
                    In fulfilment of the WPI Interactive Qualifying Project (IQP), I traveled to Tirana, Albania for 7
                    weeks to complete a social science project. I worked on a team with three other students and we worked with
                    SHUKALB, a non-profit water management and sewage organization in Albania.
                    In August 2024, I began working with three of my peers to develop a pilot water stewardship certification program
                    for Albanian craft brewers. In October we began our 2 month stay in Tirana, Albania where we worked closely with
                    Albanian water professionals and local craft brewers.
                </div>
            </div>)
    },
    { id: 2, title: "WhatToBring | Fall 2025 - Present", details: (
            <div>
                {/*<div className="text-md text-left -mt-5">*/}
                {/*    Fall 2025 - Present*/}
                {/*</div>*/}
                <div className="flex flex-row gap-6 -mt-5">
                    {/*<img*/}
                    {/*    src="../../public/FullOldWTB-1.png"*/}
                    {/*    alt="WhatToBring old"*/}
                    {/*    className="object-cover rounded-md w-[70%] h-full mt-5 border-black border-2 "/>*/}
                    <div className="flex justify-center items-center w-full">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {softEngImages.map((src, index) => (
                                    <CarouselItem key={index} className="flex justify-center">
                                        <div className="relative w-full">
                                            <img
                                                src={src}
                                                alt={`Slide ${index + 1}`}

                                                className="object-cover rounded-xl"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>

                    <div className="text-left mt-5">
                        In 2022, I created WhatToBring, my first ever web development project using Javascript, HTML, and CSS paired with Express, Node.js, and MongoDB.
                        WhatToBring allows users to sign in using GitHub, add items to the list to indicate they are bringing it, add items to a suggestion list.

                        <div className="text-left mt-5">
                            With the skills I learned from my Webware and Software Engineering courses, I have decided to build WhatToBring again, using the new knowledge
                            I have gained, and using the experience to improve my full-stack development skills.
                        </div>
                    </div>


                </div>



                <div className="text-left mt-5">
                    I am currently developing WhatToBring using React, Tailwind, and Shadcn for the frontend, focusing on a dynamic, engaging
                    design that improves upon my original site. On the backend, I am building a Node.js and Express server that connects to a PostgreSQL
                    database, using Prisma ORM to manage and query user data efficiently.
                </div>
            </div>
        ) },
    { id: 3, title: "sfteng", details: "Project details" },
    { id: 4, title: "look website", details: "Project details" },
    { id: 5, title: "lasker morris", details: "Project details" },
    { id: 6, title: "ml", details: "Project details" },
    { id: 7, title: "look walk", details: "Project details" },
    { id: 8, title: "tri", details: "Project details" },
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const navigate = useNavigate();

    // const handleLearnMore = (category: Category)=> {
    //     const slash = '/' ;
    //     const page = slash.concat(category.name.trim().toLowerCase().replace(/\s+/g, ""));
    //     console.log(page);
    //     navigate(page)
    // }

    const handleCategoryClick = (category: Category) => {
        setCurrentIndex(category.indices[0]);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const prevIndexRef = useRef(currentIndex);
    const prevCategoryRef = useRef<Category | undefined>(undefined);

    const activeCategory = categories.find((cat) => cat.indices.includes(currentIndex));
    const isCategoryChange = prevCategoryRef.current?.name !== activeCategory?.name;

    const [showParticles, setShowParticles] = useState(false);

    useEffect(() => {
        // Small delay to let layout stabilize
        const timer = setTimeout(() => setShowParticles(true), 100);
        return () => clearTimeout(timer);
    }, []);


    // Track previous index and category
    useEffect(() => {
        prevIndexRef.current = currentIndex;
        prevCategoryRef.current = activeCategory;
    }, [currentIndex, activeCategory]);

    return (
        <div className="bg-black min-h-screen w-full box-border relative z-10">
            <div className="p-2">
                {/*<div className='text-6xl font-bold text-white mb-5'>*/}
                {/*    Welcome*/}
                {/*</div>*/}
                {/*<div className="gap-9 justify-start items-stretch grid grid-cols-[3fr_7fr]">*/}
                {/*<div className="gap-9 justify-start items-stretch grid grid-cols-[3fr_7fr] max-w-full">*/}
                <div className="grid grid-cols-[3fr_7fr] gap-9 p-10 h-full items-stretch">

                {/* Left large card with pagination */}
                    <div className='animate-fade-in h-[100%] w-[100%]'>
                        <Card className="bg-white/90 h-full">
                            <CardHeader>
                                <CardTitle className="text-left text-2xl">Welcome to my website!</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-8">
                                    <img
                                        src={profilePic}
                                        alt="My Item"
                                        className="object-cover rounded-md w-full h-full max-w-full"/>
                                    <div>
                                        <div className='text-xl mb-1'>About me!</div>

                                        <div className='mb-1'>
                                            My name is Nora Cleary, I currently study at Worcester Polytechnic Institute in
                                            Worcester, Massachusetts, working towards a Bachelor's Degree in Computer Science.
                                        </div>

                                        <div className='mb-1'>

                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter >
                                <ul className="list-[square] text-left pl-8">
                                    <li>Java, Typescript, Javascript, Python, SQL, C</li>
                                    <li>Related courses: Software Engineering, Artificial Intelligence, Machine Learning, Database Systems</li>
                                    <li>n</li>
                                </ul>
                            </CardFooter>
                        </Card>
                    </div>

                    {/* Right column */}
                    {/*<div className="flex flex-col gap-6 w-[100%]">*/}
                    <div className="flex flex-col gap-6 w-full max-w-full h-full">


                        {/* Bottom row of smaller cards */}
                        {/*<div className="flex gap-8 flex-wrap">*/}
                        <div className="flex flex-row gap-8 flex-wrap max-w-full">
                            {categories.map((cat) => (
                                <Card
                                    key={cat.name}
                                    className={`p-4 cursor-pointer transition-all font-medium w-[22.7%] justify-around text-center ${
                                        activeCategory?.name === cat.name
                                            ? "bg-amber-600"
                                            : "bg-white/90"
                                    }`}
                                    onClick={() => handleCategoryClick(cat)}
                                >
                                    {cat.name}
                                </Card>
                            ))}

                            {/* Top large project detail card */}
                                <Card className="flex flex-col justify-between w-[100%] bg-white/90 backdrop-blur-sm shadow-xl mb-6 overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={items[currentIndex].id}
                                            initial={isCategoryChange ? { opacity: 0, x: 50 } : { opacity: 1.8, x: 0 }}
                                            animate={isCategoryChange ? { opacity: 1, x: 0 } : { opacity: 3, x: 0 }}
                                            exit={isCategoryChange ? { opacity: 0, x: -50 } : { opacity: 0.8, x: 0 }}
                                            transition={isCategoryChange ? { duration: 0.4 } : { duration: 0.15 }}
                                        >
                                            <CardHeader>
                                                <CardTitle className="text-left text-2xl">{items[currentIndex].title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                {items[currentIndex].details}
                                            </CardContent>
                                        </motion.div>
                                    </AnimatePresence>
                                    {/* rest of card */}
                                {/*</Card>*/}

                                <div className="flex flex-col">
                                    {/*<Button variant="link"*/}
                                    {/*        className="justify-end"*/}
                                    {/*        type="submit"*/}
                                    {/*        onClick={(e) => {*/}
                                    {/*            e.preventDefault();*/}
                                    {/*            if (activeCategory) {*/}
                                    {/*                handleLearnMore(activeCategory);*/}
                                    {/*            }*/}
                                    {/*        }}>Learn More</Button>*/}
                                    <CardFooter className=" flex justify-between items-center mt-4">
                                        <Button onClick={handlePrev}>←</Button>
                                        {/* Pagination dots */}
                                        <div className="flex items-center gap-2">
                                            {categories
                                                .find((cat) => cat.indices.includes(currentIndex))
                                                ?.indices.map((i) => (
                                                    <div
                                                        key={i}
                                                        className={`w-3 h-3 rounded-full ${
                                                            i === currentIndex ? "bg-amber-800" : "bg-gray-400"
                                                        } transition-all duration-300`}
                                                    />
                                                ))}
                                        </div>
                                        <Button onClick={handleNext}>→</Button>
                                    </CardFooter>
                                </div>

                            </Card>

                        </div>

                    </div>
                </div>
                {showParticles && (
                    <Particles
                        className="absolute inset-0 -z-10 pointer-events-none"
                        quantity={100}
                        ease={80}
                        staticity={50}
                        color="#ffffff"
                        size={0.8}
                    />
                )}

            </div>
        </div>
    );
}
