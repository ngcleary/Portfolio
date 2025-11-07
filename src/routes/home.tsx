import profilePic from "../../public/profilepic.png";
import {useEffect, useRef, useState} from "react";
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
    { id: 0, title: "Microsoft", details: "Details about Hobby 1" },
    { id: 1, title: "IQP", details: "Details about Hobby 2" },
    { id: 2, title: "WTB", details: "Project Alpha details" },
    { id: 3, title: "sfteng", details: "Project Beta details" },
    { id: 4, title: "look website", details: "Project Gamma details" },
    { id: 5, title: "lasker morris", details: "School info" },
    { id: 6, title: "ml", details: "College info" },
    { id: 7, title: "look walk", details: "College info" },
    { id: 8, title: "tri", details: "College info" },
];

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // const activeCategory = categories.find((cat) =>
    //     cat.indices.includes(currentIndex)
    // );

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
                            key={items[currentIndex].id}
                            initial={isCategoryChange ? { opacity: 0, x: 50 } : { opacity: 1.8, x: 0 }}
                            animate={isCategoryChange ? { opacity: 1, x: 0 } : { opacity: 3, x: 0 }}
                            exit={isCategoryChange ? { opacity: 0, x: -50 } : { opacity: 0.8, x: 0 }}
                            transition={isCategoryChange ? { duration: 0.4 } : { duration: 0.15 }}
                            className="w-[700px]"
                        >
                            <Card className="w-[870px] h-[400px] bg-white/90 backdrop-blur-sm shadow-xl mb-6">
                                <CardHeader>
                                    <CardTitle className="text-left text-2xl">{items[currentIndex].title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {items[currentIndex].details}
                                </CardContent>
                                <CardFooter className="flex-col justify-between items-center h-40">
                                    <Button onClick={handlePrev}>←</Button>
                                    <Button onClick={handleNext}>→</Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    </AnimatePresence>

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
                    </div>

                </div>
            </div>
        </div>
    );
}
