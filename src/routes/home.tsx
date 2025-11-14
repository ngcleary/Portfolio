import profilePic from "../../public/profilepic.png";
import {useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import {Linkedin, Github, ArrowRight, ArrowLeft} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "@/components/ui/button";
// import { Pagination } from "../components/ui/pagination";
import { motion, AnimatePresence } from "framer-motion";
import {Particles} from "@/components/ui/shadcn-io/particles";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import CaptionedCarousel from "@/components/CaptionedCarousel.tsx";

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

//images
const albania = [
    "/brewery1.JPG",
    "/brewery2.JPG",
    "/brewery4.jpg",
]
const scorecard = [
    "/scoreQuestion.jpg",
    "/scoreResult.jpg"
]
const BGH = [
    { src: "/mgbHome.jpg", caption: "Home page with Navigation, Directory, and About sections available to all users. Full features require login." },
    { src: "/mgbHome2.jpg", caption: "Logged-in users can view notifications, service requests, and the request database." },
    { src: "/mgbExternal.jpg", caption: "‘Find a Location’ opens our external map tool powered by Google Maps API, where users can enter or detect their location, choose travel mode, and select a destination."},
    { src: "/mgbExternal2.jpg", caption: "After choosing start and destination, users see a route, step-by-step text directions, and optional audio guidance. Clicking ‘I’ve Arrived’ moves to internal navigation."},
    { src: "/mgbInternal.jpg", caption: "Internal maps help users navigate from parking lots to departments. Selecting both from dropdowns and clicking ‘Get Directions’ displays the route."},
    { src: "/mgbInternal2.jpg", caption: "Users can also say commands like ‘Take me from Patient Parking to Allergy Department.’ Voice input appears as text, and users can zoom or pan the map."},
    { src: "/mgbMapEdit.jpg", caption: "Admins can edit pathfinding maps. Nodes (colored markers) represent key locations, and edges (blue lines) connect them." },
    { src: "/mgbNodeInfo.jpg", caption: "Double-clicking a node highlights it and shows detailed info such as name and coordinates" },
    { src: "/mgbNodePlace.jpg", caption: "Click on the map to place a new node. After selecting its type and name, click ‘Save Node’ to add it." },

    { src: "/mgbNodeEdge.jpg", caption: "Select two nodes and click ‘Save Edge’ to connect them with a blue line." },
    { src: "/mgbEditNode.jpg", caption: "“In the Edit Node tab, admins can rename nodes, change type or coordinates, or drag them to new locations before saving." },
    { src: "/mgbServiceReq.jpg", caption: "Each tab lists service requests with filters, sortable columns, and details pop-ups for request info." },
    { src: "/mgbAnounce.jpg", caption: "Clicking the bell icon opens a notification panel showing active announcements for employees and admins. Clicking a notification marks it as read and removes the highlight. The bell icon badge displays the count of unread notifications." },


];
const softEngImages = [
    "/resizeWTBOld.png",
    "/WTBLogin.jpg",
    "/WTBSignup.jpg",
    "/WTBHome.jpg",
]
const Look =
    [
        {
            src: "/lookCards.jpg",
            caption:
                "Symptom Cards — On every home page (nurse, teacher, counselor), users can flip symptom cards to view an overview of PANS/PANDAS symptoms."
        },
        {
            src: "/counselor1.jpg",
            caption:
                "Counselors — Counselors can build exposure ladders by entering steps, rating anxiety and willingness, and saving each run. Steps can be reordered with drag-and-drop and edited at any time."
        },
        {
            src: "/nurse1.jpg",
            caption:
                "School Nurse — A quick test breaks down each PANS/PANDAS symptom for easy identification. If the symptoms align with PANDAS, users can generate a provider note with recommended next steps."
        },
        {
            src: "/nurse2.jpg",
            caption:
                "School Nurse — Users fill out text boxes to generate a provider note. The symptoms selected above are automatically included."
        },
        {
            src: "/nurse4.jpg",
            caption:
                "School Nurse — Users can preview the provider note before downloading a personalized PDF."
        },
        {
            src: "/nurse5.jpg",
            caption:
                "School Nurse (Illness Letter) — Users fill in text boxes to generate a customized illness letter for classes, supporting students whose PANDAS symptoms flare when they get sick. The PDF can then be downloaded."
        },
        {
            src: "/teacher1.jpg",
            caption:
                "Teachers — Check symptom boxes to generate a tailored list of classroom accommodations based on the symptoms selected."
        },
        {
            src: "/teacher2.jpg",
            caption:
                "Teachers — A symptom tracking list allows teachers to record behaviors and communicate patterns to parents."
        }
]
const LookWalkImages = [
    "/LookGoat.JPG",
    "/LookTable.JPG",
    "/LookWalking.JPG",
    "/LookTable2.JPG",
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
            <div className="grid grid-cols-[8fr_2fr] gap-3 justify-end">

                <div className="text-left ">
                    I am currently collaborating with a project manager at Microsoft on an applied research project focused on advanced Natural Language Processing and Generative AI. Along with a team of three, I am designing and developing an agentic Retrieval-Augmented Generation (RAG) system where retrieval quality, traceability, and reasoning accuracy are the top priorities.
                    <br/><br/>
                </div>
                <img
                    src="/microsoft.png"
                    alt='shukalb logo'
                    className="object-cover rounded-xl -mt-14 w-[80%]"
                />
            </div>
            Our work involves exploring and evaluating different RAG frameworks to improve decision-making, reduce hallucinations, and optimize context selection. I’m building ReAct-style agents using LangChain and Azure AI Foundry, with an emphasis on creating a system that is both powerful and easy for future teams to adapt. This project has allowed me to work hands-on with cutting-edge GenAI tooling while contributing to research on more reliable and interpretable AI systems.

            <div className="text-left ">

            </div>
            <div className="text-left font-bold  mt-5">
                Key Focus Areas:
            </div>
            <ul className="list-[square] text-left pl-8">
                <li>Designing and evaluating high-quality RAG pipelines to improve retrieval accuracy and reasoning</li>
                <li>Developing prescriptive, traceable solutions for natural-language queries using Python, LangChain, and Azure AI Foundry</li>
                <li>Building agentic workflows (ReAct agents) powered by OpenAI models</li>
                <li>Testing different decision-making strategies and context-optimization methods</li>
                <li>Ensuring the system remains modular, learnable, and adaptable for future improvements</li>
            </ul>
        </div>

        ) },
    { id: 1, title: "Brewery Water Stewardship in Albania | August - December 2024", details: (
            <div>
                <div className="flex flex-wrap gap-2 -mt-4 mb-3">
                    <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                        Research
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                        Interdisciplinary
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                        Problem Solving
                    </Badge>

                </div>
                <div className="grid grid-cols-[7fr_3fr] justify-end">

                    <div className="text-left ">
                        In fulfilment of the WPI Interactive Qualifying Project (IQP), I traveled to Tirana, Albania for 7
                        weeks to develop a pilot water stewardship certificate program tailored to Albanian
                        craft brewers. My team worked with the Water Supply and Sewer Association of Albania (SHUKALB), a non-profit water management
                        organization in Albania, to encourage water conscious practices among brewers in hope of reducing the harmful effects
                        of brewery wastewater. In Albania we had the privilege to speak to all seven craft brewers in the country, understanding their needs and
                        learning the best ways to support them in wastewater management.
                    </div>
                    <img
                        src="../../public/Recognition%20logo%20(1).png"
                        alt='shukalb logo'
                        className="object-cover rounded-xl -mt-24"
                    />
                </div>
                <div>
                    <div className=" grid grid-cols-[5fr_5fr] justify-center">
                        <div className="flex justify-center h-full">
                            <Carousel opts={{ loop: true }} className="w-full mt-5">
                                <CarouselContent>
                                    {albania.map((src, index) => (
                                        <CarouselItem key={index} className="flex justify-center ">
                                            <div className=" w-full justify-center">
                                                <img
                                                    src={src}
                                                    alt={`Slide ${index + 1}`}

                                                    // className="object-cover rounded-xl h-[75%] justify-center mx-auto"
                                                    className="object-cover object-center h-[90%] rounded-xl aspect-[16/9] mx-auto"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {/*fix*/}
                                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 " />
                                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />

                            </Carousel>
                        </div>

                        <div className="text-left mt-5">
                            Our conversations allowed us to connect each brewer with SHUKALB, encouraging an open dialogue about realistic actions brewers
                            could take to improve their environmental impact. We also connected SHUKALB with brewery wastewater specialists we met
                            in America before arriving in Albania. The experts at BetterBev, a New England based sustainability recognition program for brewers,
                            advised us throughout the development of our program, as they host a similar service in the US.
                        </div>

                    </div>
                    <div>
                        From these interviews we developed a 'self-assessment
                        score card' for brewers to asses there wastewater practices at any time. This card, powered by KoboToolbox, highlighted
                        the exact areas where brewers could improve, leading them directly to the appropriate section of our 'suggested practices'
                        website, where we outline detailed practices for brewers to improve certain areas of their wastewater process.
                    </div>


                    <div className="grid grid-cols-2 gap-6 mt-5">
                        <div className="relative inline-block group">
                            <Carousel opts={{ loop: true }} className="w-full mx-auto">
                                <CarouselContent>
                                    {scorecard.map((src, index) => (
                                        <CarouselItem key={index} className="flex justify-center">
                                            <div className="relative w-full group">
                                                {/* Image */}
                                                <img
                                                    src={src}
                                                    alt={"Slide ${index + 1}"}
                                                    className="rounded-xl shadow-md"
                                                />

                                                {/* Overlay that appears on hover */}
                                                <a
                                                    href='https://ee.kobotoolbox.org/x/9NNF0cGl'
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="absolute inset-0 flex items-center justify-center
                       bg-black/40 text-white opacity-0
                       group-hover:opacity-100 transition-opacity rounded-xl"
                                                >
            <span className="px-4 py-2 bg-white text-black rounded-md font-medium">
              Visit Site
            </span>
                                                </a>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                {/* Carousel controls */}
                                <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
                                <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
                            </Carousel>

                        </div>

                        <div className="relative inline-block group">
                            <img
                                src="../../public/brewSite.jpg"
                                alt="Wbrew site"
                                className="rounded-xl shadow-md"
                            />
                            <a
                                href="https://sites.google.com/view/brewing-a-better-future/home"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
                            >
                            <span className="px-4 py-2 bg-white text-black rounded-md font-medium">
                                Visit Site
                            </span>
                            </a>
                        </div>
                    </div>


                </div>

            </div>)
    },
    { id: 2, title: "Brigham & Women’s Hospital | Spring 2024", details: (
        <div>
            <div className="flex flex-wrap gap-2 -mt-4 mb-3">
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Leadership
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Agile Methodology
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Jira
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
            <div className="">
                In collaboration with Brigham and Women's Hospital, I lead a team of 9 other software developers through 7
                one-week sprints to design a professional, branded website for employees and patients of the Brigham and Women's hospitals.

                <CaptionedCarousel slides={BGH} />
                <div className="text-left mt-4"></div>
            </div>
                <div className="">
                    As Lead Software Engineer, I guided my team through the full Agile development process, facilitating sprint-planning meetings
                    where we created user stories, designed storyboards, and assigned story points using planning poker before organizing our tasks in Jira.
                    I emphasized aligning responsibilities with each team member’s strengths while encouraging everyone to contribute to both frontend and
                    backend development to grow as well-rounded programmers. Throughout each sprint, I monitored progress, ensured adherence to standardized
                    GitHub workflows, and provided hands-on support where needed — implementing frontend, backend, and algorithmic components.
                    We concluded each cycle with sprint reflections to evaluate progress and continuously improve our process.
                </div>
            </div>

        ) },
    { id: 3, title: "Look. Foundation School Guide | May 2025 - Present", details: <div>
            <div className="flex flex-wrap gap-2 -mt-4 mb-3">
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    JavaScript
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Project Management
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Advocacy
                </Badge>
                <div className="text-left ">
                    I am currently working with the Look. Foundation, a nonprofit dedicated to supporting families affected by PANS/PANDAS,
                    where I lead the design and development of new digital resources for teachers, school nurses, and counselors.
                    This role combines project management, technical development, and close collaboration with experts in both medicine
                    and education. <br/><br/>
                    Throughout this project, I’ve been responsible for identifying gaps in existing school resources, interviewing
                    medical professionals and active educators, and translating their insights into clear, accessible tools.
                    I’m designing and building interactive materials—using custom HTML, CSS, and JavaScript within Squarespace—that help school
                    professionals recognize symptoms, track student needs, and communicate more effectively with families and healthcare providers.
                </div>
                <CaptionedCarousel slides={Look} />

            </div>


        </div>},
    { id: 4, title: "WhatToBring | Present", details:
            <div>
                <div className="flex flex-wrap gap-2 -mt-4 mb-3">
                    <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                        Full-Stack
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                        Personal Project
                    </Badge>

                </div>
                <div className="grid grid-cols-[7fr_3fr] gap-6 -mt-5">
                    <div className="mt-5 justify-center items-center h-full">
                        <Carousel opts={{ loop: true }} className="w-full ">
                            <CarouselContent>
                                {softEngImages.map((src, index) => (
                                    <CarouselItem key={index} className=" justify-center">
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
                        WhatToBring allows users to sign in using GitHub, add items to the list to indicate they are bringing it or add items to a suggestion list.

                        <div className="text-left mt-5">
                            With the skills I learned throughout my courses, I have decided to build WhatToBring again. <a
                            href="https://github.com/ngcleary/WhatToBring"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 flex items-center gap-1 text-gray-800 hover:underline inline-flex"
                        >
                            <Github size={18} />
                            Visit
                        </a>
                        </div>
                    </div>
                </div>


                <div className="text-left mt-5">
                    I am currently developing WhatToBring using React, Tailwind, and Shadcn for the frontend, focusing on a dynamic, engaging
                    design that improves upon my original site. On the backend, I am building a Node.js and Express server that connects to a PostgreSQL
                    database, using Prisma ORM to manage and query user data efficiently.
                </div>
            </div>
    },
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
    { id: 6, title: "Amazon Rating ML Model | October 2025", details:
        <div>
            <div  className="flex flex-wrap gap-2 -mt-4 mb-3">
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    NLP
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    SciKit
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    Python
                </Badge>
                <Badge variant="secondary" className="bg-gray-100/70 text-gray-800">
                    pandas
                </Badge>
            </div>

            <div>
                An exploration of Natural Language Processing and multi-class logistic regression models with a group of 5 WPI students. Using SciKit-Learn,
                SentenceTransformers, and pandas, we predicted the average start rating (1-5) of an Amazon product given the product description,
                price, and text content of the reviews.  <a
                    href="https://github.com/esthermao/CS4342_finalproject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 flex items-center gap-1 text-gray-800 hover:underline inline-flex"
                >
                    <Github size={18} />
                     Visit
                </a>
                <br/><br/>

                We explored different ways to evaluate text content, using both Word2Vec vector representations of the reviews and TF-IDF
                (Term Frequency-Inverse Document Frequency) to
                measure the importance of each word. Using LIME (Local Interpretable Model-agnostic Explanations) we visualized the influence
                of each word, seeing how words like 'poor' or 'refund' push the prediction down.
            </div>
            <img
                src="/LIME.png"
                alt='LIME visualization'
                className="object-cover mx-auto rounded-xl mt-5 mb-5"
            />

            We found that both methods (text-embedding and bag-of-words approach) resulted in 95.28% accuracy across folds. Because the reviews
            were short and to-the-point, the SentenceTransformers did not find any additional context, ultimately producing the same results as
            the TF-IDF approach.
        </div>
    },
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
                    <Carousel opts={{ loop: true }} className="w-full ">
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
                        <div className="flex flex-row gap-2 flex-wrap max-w-full mb-6">
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
                            <div className="ml-8 flex justify-between items-center gap-2">
                                <Button className="bg-white/90 text-black font-bold hover:bg-white" onClick={handlePrev}>
                                    <ArrowLeft size={28} />
                                </Button>
                                {/* Pagination dots */}
                                <div className="flex items-center gap-2">
                                    {categories
                                        .find((cat) => cat.indices.includes(currentIndex))
                                        ?.indices.map((i) => (
                                            <div
                                                key={i}
                                                className={`w-3 h-3 rounded-full ${
                                                    i === currentIndex ? "bg-amber-600" : "bg-gray-400"
                                                } transition-all duration-300`}
                                            />
                                        ))}
                                </div>
                                <Button className="bg-white/90 text-black font-bold hover:bg-white" onClick={handleNext}>
                                    <ArrowRight size={28} />
                                </Button>
                            </div>
                        </div>
                        <Card className="bg-white/90">
                            <CardHeader>
                                <CardTitle className="text-left text-2xl">Welcome to my website!</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col xl:flex-row gap-6">
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

                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col items-center">
                                <ul className="list-[square] text-left pl-8 mb-3">

                                    <li><b>Languages:</b> Java, Python, C/C++, SQL, JavaScript, TypeScript, HTML/CSS</li>
                                    <li><b>Frameworks:</b> React, Node.js, Express, Scikit-Learn, LangChain, FastAPI</li>
                                    <li><b>Developer Tools:</b> Azure DevOPs, Git, Docker</li>
                                    <li><b>Related courses:</b> Software Engineering, Artificial Intelligence, Machine Learning, Database Systems</li>
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
                                        className="flex items-center gap-1 text-gray-800 hover:underline"
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
                            {/*{categories.map((cat) => (*/}
                            {/*    <Card*/}
                            {/*        key={cat.name}*/}
                            {/*        className={`p-4 cursor-pointer transition-all font-medium justify-around text-center ${*/}
                            {/*            activeCategory?.name === cat.name*/}
                            {/*                ? "bg-amber-600"*/}
                            {/*                : "bg-white/90"*/}
                            {/*        }`}*/}
                            {/*        onClick={() => handleCategoryClick(cat)}*/}
                            {/*    >*/}
                            {/*        {cat.name}*/}
                            {/*    </Card>*/}
                            {/*))}*/}

                            {/* Top large project detail card */}
                                <Card className="flex flex-col justify-between w-[100%] bg-white/90 backdrop-blur-sm shadow-xl mb-6 overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        {/*<motion.div*/}
                                        {/*    key={items[currentIndex].id}*/}
                                        {/*    initial={isCategoryChange ? { opacity: 0, x: 50 } : { opacity: 1.8, x: 0 }}*/}
                                        {/*    animate={isCategoryChange ? { opacity: 1, x: 0 } : { opacity: 3, x: 0 }}*/}
                                        {/*    exit={isCategoryChange ? { opacity: 0, x: -50 } : { opacity: 0.8, x: 0 }}*/}
                                        {/*    transition={isCategoryChange ? { duration: 0.4 } : { duration: 0.15 }}*/}
                                        {/*>*/}
                                        <motion.div
                                            key={items[currentIndex].id}
                                            initial={
                                                isCategoryChange
                                                    ? { opacity: 0, x: 20 }
                                                    : { opacity: 0 }
                                            }
                                            animate={
                                                isCategoryChange
                                                    ? { opacity: 1, x: 0 }
                                                    : { opacity: 1 }
                                            }
                                            exit={
                                                isCategoryChange
                                                    ? { opacity: 0, x: -20 }
                                                    : { opacity: 0 }
                                            }
                                            transition={
                                                isCategoryChange
                                                    ? { duration: 0.3, ease: "easeOut" }
                                                    : { duration: 0.25, ease: "easeOut" }
                                            }
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
                                    {/*<CardFooter className=" flex justify-between items-center mt-4">*/}
                                    {/*    <Button onClick={handlePrev}>←</Button>*/}
                                    {/*    /!* Pagination dots *!/*/}
                                    {/*    <div className="flex items-center gap-2">*/}
                                    {/*        {categories*/}
                                    {/*            .find((cat) => cat.indices.includes(currentIndex))*/}
                                    {/*            ?.indices.map((i) => (*/}
                                    {/*                <div*/}
                                    {/*                    key={i}*/}
                                    {/*                    className={`w-3 h-3 rounded-full ${*/}
                                    {/*                        i === currentIndex ? "bg-amber-800" : "bg-gray-400"*/}
                                    {/*                    } transition-all duration-300`}*/}
                                    {/*                />*/}
                                    {/*            ))}*/}
                                    {/*    </div>*/}
                                    {/*    <Button onClick={handleNext}>→</Button>*/}
                                    {/*</CardFooter>*/}
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
