import { Button } from "@/components/ui/button.tsx";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card.tsx";
import profilePic from "../assets/profilepic.png";


function Home() {
    return (
        <div className="bg-black min-h-screen w-screen">
            {/* Header */}
            <header className="h-[65px] fixed top-0 left-0 right-0 bg-primary text-white flex items-center px-4 shadow-md">
                Header
            </header>

            <div className="pt-[80px] px-10">
                {/* Main content flex container */}
                <div className="flex gap-6 justify-left">
                    {/* Large first card */}
                    <Card className="w-[600px] h-[600px] bg-white/90 backdrop-blur-sm shadow-xl flex-shrink-0 ml-20">
                        <CardHeader>
                            <CardTitle className="text-left text-2xl">About Me</CardTitle>
                            <CardDescription className="text-left">
                                Quick Facts
                            </CardDescription>
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
                        <CardFooter className="flex-col gap-2">
                            <div className="text-left justify-left">
                                Use the arrows below to learn more about me.
                            </div>

                        </CardFooter>
                    </Card>

                    {/* Column of smaller cards */}
                    <div className="flex flex-col gap-6">
                        <Card className="w-80 h-64 bg-white/90 backdrop-blur-sm shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-left text-2xl">My Lists</CardTitle>
                                <CardDescription className="text-left">
                                    Lists I own
                                </CardDescription>
                            </CardHeader>
                            <CardContent>hello</CardContent>
                            <CardFooter className="flex-col gap-2">
                                <Button variant="link" className="w-full">
                                    See more
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="w-80 h-64 bg-white/90 backdrop-blur-sm shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-left text-2xl">
                                    Shared with me
                                </CardTitle>
                                <CardDescription className="text-left">
                                    Events you are attending
                                </CardDescription>
                            </CardHeader>
                            <CardContent>card</CardContent>
                            <CardFooter className="flex-col gap-2">
                                <Button variant="link" className="w-full">
                                    See more
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
