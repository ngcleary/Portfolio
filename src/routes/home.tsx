import profilePic from "../../public/profilepic.png";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "@/components/ui/button";
// import { Pagination } from "../components/ui/pagination";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Personal Project",
        altTitle: "WhatToBring",
        summary: "I am currently transforming my first ever web development project into an improved",
        details: (
            <div className="flex flex-col gap-4">
                <p>
                    Detailed overvie.
                </p>
                <Button variant="default">See More</Button>
            </div>
        )
    },
    {
        id: 2,
        title: "Project 2",
        summary: "Short description of Project 2",
        details: "Detailed overview of Project 2..."
    },
    {
        id: 3,
        title: "Project 3",
        summary: "Short description of Project 3",
        details: "Detailed overview of Project 3..."
    },

];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };



    const currentProject = projects[currentIndex];

    return (
        <div className="bg-black min-h-screen w-screen pt-[80px] px-10">
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
                    {/* Top large project detail card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentProject.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Card className="w-[870px] h-[400px] bg-white/90 backdrop-blur-sm shadow-xl mb-6">
                                <CardHeader>
                                    <CardTitle className="text-left text-2xl">{currentProject.altTitle}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {currentProject.details}
                                </CardContent>
                                <CardFooter className="flex-col justify-between items-center h-40">
                                    {/* Text section at the top of the footer */}
                                    <div className="flex flex-col items-start mb-4 w-full px-4">
                                        <div className="text-lg font-semibold">{currentProject.title}</div>
                                        <div className="text-sm text-gray-700">{currentProject.summary}</div>
                                    </div>

                                    {/* Arrows section at the very bottom */}
                                    <div className="flex justify-between w-full px-4">
                                        <Button onClick={handlePrev}>←</Button>
                                        <Button onClick={handleNext}>→</Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom row of smaller cards */}
                    <div className="flex gap-8 flex-wrap">

                        {projects.map((p, index) => (
                            <motion.div
                                key={p.id}
                                layout
                                animate={{ opacity: currentIndex === index ? 0.5 : 1 }}
                                // className="w-40 h-40 bg-white/90 backdrop-blur-sm shadow-xl flex-shrink-0"
                            >
                                <Card className="w-[269px] h-[154px] bg-white/90 backdrop-blur-sm shadow-xl flex-shrink-0">
                                    <CardContent className='text-center pt-2'>{p.title}</CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
