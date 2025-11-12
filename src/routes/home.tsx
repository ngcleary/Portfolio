import profilePic from "../../public/profilepic.png";
import {useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import {Linkedin, Github} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "@/components/ui/button";
// import { Pagination } from "../components/ui/pagination";
import { motion, AnimatePresence } from "framer-motion";
import {Particles} from "@/components/ui/shadcn-io/particles";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import {Badge} from "@/components/ui/badge.tsx";

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
    "../../public/resizeWTBOld.png",
    "../../public/WTBLogin.jpg",
    "../../public/WTBSignup.jpg",
    "../../public/WTBHome.jpg",
]
const LookWalkImages = [
    "../../public/LookGoat.JPG",
    "../../public/LookTable.JPG",
    "../../public/LookWalking.JPG",
    "../../public/LookTable2.JPG",
]

const items = [
    { id: 0, title: "Microsoft Collaboration | Present", details: (
        <div>
            <div className="flex flex-wrap gap-2 -mt-4 mb-3">
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Azure AI Foundry
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    LangChain
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Agentic RAG
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    NLP
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Web-Scrapping
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Fine-Tuning
                </Badge>

            </div>
            <div className="text-left ">
                I currently have the opportunity to work closely with a project manager from Microsoft to investigate
                advanced Natural Language Processing (NLP) and GenAI techniques. Myself and a team of three others are
                designing and developing an agentic RAG system with retrieval quality as the top priority. We are designing and testing
                various frameworks to improve decision making and context optimization, while ensuring the system can be easily learned
                by users and further adapted for future improvements.
            </div>
            <ul>
                <li>Azure AI Foundry</li>
                <li>LangChain</li>
                <li>Ragas</li>
            </ul>
        </div>

        ) },
    { id: 1, title: "Brewery Water Stewardship in Albania | August 2024 - December 2024", details: (
            <div>
                <div className="flex flex-wrap gap-2 -mt-4 mb-3">
                    <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                        ALbania
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                        REST API
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                        Personal Project
                    </Badge>

                </div>
                <div className="flex flex-row justify-end">
                    <img
                        src="../../public/Recognition%20logo%20(1).png"
                        alt='shukalb logo'
                        className="object-cover rounded-xl -mt-24"
                    />
                </div>

                <div>
                    <div className="flex flex-row gap-6 -mt-5">

                        <div className="text-left mt-5">
                            In fulfilment of the WPI Interactive Qualifying Project (IQP), I traveled to Tirana, Albania for 7
                            weeks to complete a social science project. My team worked with SHUKALB, a non-profit water management and
                            sewage organization in Albania, to develop a pilot water stewardship certificate program tailored to Albanian
                            craft brewers. This process included an intital 7 week research period before getting to Tirana, where the team
                            interviewed local brewers and wastewater professionals to get an understanding of the industry, as well as the problem.
                        </div>
                        <div className="text-left -mt-5">
                            In Albania we had the privilege to speak to all seven craft brewers in the country, understanding their needs and
                            learning the best ways to support them in wastewater management. From these interviews we developed a 'self-assessment
                            score card' for brewers to asses there wastewater practices at any time. This card, powered by KoboToolbox, highlighted
                            the exact areas where brewers could improve, leading them directly to the appropriate section of our 'suggested practices'
                            website, where we outline detailed practices for brewers to improve certain areas of their wastewater process.
                        </div>

                    </div>


                    <div className="text-left mt-5">
                        read more and such
                    </div>
                </div>

            </div>)
    },
    { id: 2, title: "WhatToBring | Fall 2025 - Present", details: (
            <div>
                <div className="flex flex-wrap gap-2 -mt-4 mb-3">
                    <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                        Full-Stack
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                        REST API
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                        Personal Project
                    </Badge>

                </div>
                <div className="flex flex-row gap-6 -mt-5">
                    <div className="mt-5 flex justify-center items-center w-[250%] h-full">
                        <Carousel className="w-full ">
                            <CarouselContent>
                                {softEngImages.map((src, index) => (
                                    <CarouselItem key={index} className="flex justify-center">
                                        <div className="relative w-full">
                                            <img
                                                src={src}
                                                alt={`Slide ${index + 1}`}

                                                className="object-cover rounded-xl "
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            {/*fix*/}
                            <CarouselPrevious className="left-0.5 top-1/2 translate-y-24 " />
                            <CarouselNext className="right-2 top-1/2 translate-y-24 " />
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
    { id: 3, title: "Brigham & Women’s Hospital | Spring 2024", details:     <div>
            <div className="flex flex-wrap gap-2 -mt-4 mb-3">
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Leadership
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Agile Methodology
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    10-person Team
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    AWS
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Docker
                </Badge>

            </div>
            BGH
        </div>},
    { id: 4, title: "Look. Foundation School Guide | May 2025 - Present", details: <div>
            <div className="flex flex-wrap gap-2 -mt-4 mb-3">
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Leadership
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Project Management
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Javascript
                </Badge>

            </div>
            BGH
        </div>},
    { id: 5, title: "Lasker Morris AI | February 2025", details:
    <div>
        <div className="flex flex-wrap gap-2 -mt-4 mb-3">
            <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                Java
            </Badge>
            <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                AI
            </Badge>
        </div>
        <div className="grid grid-cols-2 gap-6">
            <div className="grid-row-2">
                <img
                    src="../../public/Gabor.png"
                    alt='Swim'
                    className="object-cover rounded-xl "
                />
                <div className="text-left mt-2">
                    Game visualization courtesy of <a
                        href="https://jake-molnia.github.io/CS4341-referee/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:underline"
                    >Jake Molnia's referee program.
                    </a>

                </div>
            </div>

            <div>
                <div>
                    Lasker Morris (also called Ten Men's Morris) in an ancient mill game of strategy. I worked to create a Java-based
                    AI model to master the game, using the minimax game-playing algorithm with alpha-beta pruning and iterative descent.
                </div>
                <div className="text-left mt-2">
                    This was my first time working with AI strategies and algorithms, and I enjoyed testing the heuristics to improve
                    my algorithm's performance. To understand how large, general-knowledge models compare to specifically designed algorithms,
                    I made a second model powered by Google Gemini LLM API and watched as the minimax model beat Gemini in every single round.
                </div>
            </div>

        </div>

    </div>},
    { id: 6, title: "ml", details: "Project details" },
    { id: 7, title: "Look. Foundation Walk | October 2025", details:
            <div>
                {/* Skill / Keyword Badges */}
                <div className="flex flex-wrap gap-2 -mt-4 mb-3">
                    <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                        Leadership
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                        Event Planning
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                        Advocacy
                    </Badge>
                </div>
                <div className="text-left">
                    This October, I had the opportunity to organize and host a PANS/PANDAS Awareness Walk on
                    the Worcester Polytechnic Institute campus, in collaboration with the WPI Campus Recreation Advisory
                    Council,
                    the WPI Center for Well-Being, and the Look. Foundation, a nonprofit supporting families affected
                    by{""}
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger className="inline-block bg-inherit underline decoration-dotted px-1 rounded">
                                PANS/PANDAS
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>
                                    Pediatric Acute-Onset Neuropsychiatric Syndrome / Pediatric
                                    Autoimmune Neuropsychiatric Disorders Associated with Streptococcus
                                </p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>{""}
                    nationwide.
                </div>

            <div className="grid grid-cols-[5fr_5fr] gap-6">
                <div className="mt-5 justify-center items-center h-full">
                    <Carousel className="w-full ">
                        <CarouselContent>
                            {LookWalkImages.map((src, index) => (
                                <CarouselItem key={index} className="flex justify-center">
                                    <div className="relative w-full">
                                        <img
                                            src={src}
                                            alt={`Slide ${index + 1}`}

                                            className="object-cover rounded-xl "
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        {/*fix*/}
                        <CarouselPrevious className="left-0.5 top-1/2 translate-y-24 " />
                        <CarouselNext className="right-2 top-1/2 translate-y-24 " />
                    </Carousel>
                </div>
                <div className="text-left mt-2">
                    <div className="text-left mt-1">
                        Growing up, I witnessed my cousins endure the confusing, isolating and devastating effects of PANS/PANDAS.
                        That experience, along with my internship at the Look. Foundation, motivated me to help raise awareness
                        for these often misunderstood
                        conditions.
                    </div>
                    <div className="text-left mt-2">
                        PANS and PANDAS are medical conditions that inflame the brain.
                        The symptoms can look exactly like mental illness: sudden OCD, eating restriction, rage, tics, depression,
                        even suicidal ideations.
                    </div>
                    <div className="text-left mt-2">
                        Hosting this event taught me a lot about organizing community initiatives and the importance of sparking conversation
                        about mental health. Seeing students engage, ask questions, and share what they learned was incredibly meaningful.
                    </div>
                </div>
            </div>
                <div className="text-left mt-5">
                    Learn more about the Look. Foundation
                </div>
        </div> },
    { id: 8, title: "Cohasset Triathlon", details:
    <div>
        {/* Skill / Keyword Badges */}
        <div className="flex flex-wrap gap-2 -mt-4 mb-3">
            <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                Advocacy
            </Badge>
            <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                Community
            </Badge>
            <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                Fundraising
            </Badge>
        </div>
        <div className="grid grid-cols-3 gap-6">
            <img
                src="../../public/TriSwim.JPG"
                alt='Swim'
                className="object-cover rounded-xl "
            />
            <img
                src="../../public/TriBike.JPG"
                alt='Bike'
                className="object-cover rounded-xl "
            />
            <img
                src="../../public/TriRun.JPG"
                alt='Run'
                className="object-cover rounded-xl "
            />
        </div>
        <div className="text-left mt-5">
            In 2023 I completed my first Triathlon with Team Look.! I have always been a long distance runner, so I was
            excited for this new challenge. In support of my 3 cousins with PANDAS, I began training and fundraising in January, motivated
            to raise money and awareness for the Look. Foundation.
        </div>
        <div className="text-left mt-2">
            This event has become an annual tradition for my family, with participants growing each year. As of 2025, we had 11 family members
            competing - including my mom, sister, many cousins, and my uncle! This has become my favorite tradition as it brings my family together
            and pushes me to try new.
        </div>
    </div>},
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

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
                {/*<div className="gap-9 justify-start items-stretch grid grid-cols-[3fr_7fr]">*/}
                {/*<div className="gap-9 justify-start items-stretch grid grid-cols-[3fr_7fr] max-w-full">*/}
                <div className="grid grid-cols-[3fr_7fr] gap-9 p-10 h-full items-stretch">

                {/* Left large card with pagination */}
                    <div className='animate-fade-in h-[100%] w-[100%]'>
                        <Card className="bg-white/90">
                            <CardHeader>
                                <CardTitle className="text-left text-2xl">Welcome to my website!</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col xl:flex-row gap-8">
                                    <img
                                        src={profilePic}
                                        alt="My Item"
                                        className="object-cover rounded-md w-full xl:w-[50%] h-full max-w-full border-black border-2"/>
                                    <div>
                                        <div className="text-xl mb-1 -mt-2 ">About me!</div>

                                        <div className='mb-1'>
                                            My name is Nora Cleary, I currently study at Worcester Polytechnic Institute
                                            working towards a Bachelor's Degree in Computer Science.
                                        </div>

                                        <div className='mb-1'>

                                        </div>
                                    </div>

                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col items-center gap-2">
                                <ul className="list-[square] text-left pl-8 mb-3">
                                    <li>Java, Typescript, Javascript, Python, SQL, C</li>
                                    <li>
                                        Related courses: Software Engineering, Artificial Intelligence,
                                        Machine Learning, Database Systems
                                    </li>
                                    <li>Azure AI Foundry</li>
                                </ul>

                                <div className="flex flex-col sm:flex-row gap-3 pl-8 justify-center items-center">
                                    <a
                                        href="https://www.linkedin.com/in/nora-cleary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-800 hover:underline"
                                    >
                                        <Linkedin size={18} />
                                        LinkedIn
                                    </a>

                                    <a
                                        href="https://github.com/ngcleary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-800 hover:underline"
                                    >
                                        <Github size={18} />
                                        GitHub
                                    </a>
                                </div>
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
                                    className={`p-4 cursor-pointer transition-all font-medium justify-around text-center ${
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
