import profilePic from "../../public/profilepic.png";
import {useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "@/components/ui/button";
// import { Pagination } from "../components/ui/pagination";
import { motion, AnimatePresence } from "framer-motion";

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
    { id: 2, title: "WhatToBring", details: (
            <div>
                <div className="text-md text-left -mt-5">
                    Fall 2025 - Present
                </div>
                <div className="text-left mt-5">
                    In 2022, I created WhatToBring, my first ever web development project using Javascript, HTML, and CSS paired with Express, Node.js, and MongoDB,
                    Now, I am applying the skills I have learned about agile methodolgy and planning, as well as my new techinical skills in React, PrismaORM,
                    PostgreSQL, and Typescript.
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
    const navigate = useNavigate();

    const handleLearnMore = (category: Category)=> {
        const slash = '/' ;
        const page = slash.concat(category.name.trim().toLowerCase().replace(/\s+/g, ""));
        console.log(page);
        navigate(page)
    }

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


    // Track previous index and category
    useEffect(() => {
        prevIndexRef.current = currentIndex;
        prevCategoryRef.current = activeCategory;
    }, [currentIndex, activeCategory]);

    return (
        <div className="bg-black min-h-screen w-screen pt-[40px] px-10">
            <div className='text-6xl font-bold text-white mb-5'>
                Welcome
            </div>
            <div className="flex gap-9 justify-start pl-14">
                {/* Left large card with pagination */}
                <div className='animate-fade-in'>
                    <Card className="w-[600px] h-[600px] bg-white/90 backdrop-blur-sm shadow-xl flex-shrink-0">
                        <CardHeader>
                            <CardTitle className="text-left text-2xl">About Me</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex gap-8">
                                <img
                                    src={profilePic}
                                    alt="My Item"
                                    className="object-cover rounded-md"/>
                                <div>
                                    <div className='text-xl mb-1'>Welcome to my website!</div>

                                    <div className='mb-1'>
                                        My name is Nora Cleary, I currently study at Worcester Polytechnic Institute in
                                        Worcester, Massachusetts, working towards a Bachelor's Degree in Computer Science.
                                    </div>

                                    <div className='mb-1'>
                                        more infor.
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col justify-between items-center h-40">

                        </CardFooter>
                    </Card>
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-6">


                    {/* Bottom row of smaller cards */}
                    <div className="flex gap-8 flex-wrap">

                        {categories.map((cat) => (
                            <Card
                                key={cat.name}
                                className={`p-4 cursor-pointer transition-all ${
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
                        <Card className="flex flex-col justify-between w-[870px] h-[400px] bg-white/90 backdrop-blur-sm shadow-xl mb-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={items[currentIndex].id}
                                    initial={isCategoryChange ? { opacity: 0, x: 50 } : { opacity: 1.8, x: 0 }}
                                    animate={isCategoryChange ? { opacity: 1, x: 0 } : { opacity: 3, x: 0 }}
                                    exit={isCategoryChange ? { opacity: 0, x: -50 } : { opacity: 0.8, x: 0 }}
                                    transition={isCategoryChange ? { duration: 0.4 } : { duration: 0.15 }}
                                    // className="w-[700px]"
                                >
                                    <CardHeader>
                                        <CardTitle className="text-left text-2xl">{items[currentIndex].title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {items[currentIndex].details}
                                    </CardContent>
                                </motion.div>
                            </AnimatePresence>

                            <div className="flex flex-col">
                                <Button variant="link"
                                        className="justify-end"
                                        type="submit"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (activeCategory) {
                                                handleLearnMore(activeCategory);
                                            }
                                        }}>Learn More</Button>
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
        </div>
    );
}
