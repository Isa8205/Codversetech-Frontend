import { ChevronDown, LocateFixedIcon, Wallet } from "lucide-react";

const searchResults = [
    { company: 'Google', companyLogo: 'lorem', jobTitle: 'Full Stack Developer', requiredStack: ['React', 'AWS', 'C#', 'Python'], payment: '16k/month', timestamp: '16 mins ago' }
]

export function JobAdverts() {
    const Resultcard = () => {
        return (
            searchResults.map((result, index) => (
                <div className="card flex flex-col bg-white p-2 rounded-md">
                    <div className="flex gap-2">
                        <img src="" alt="companyLogo" className="h-16 w-16 object-cover rounded-lg" />
                        <span>
                            <h2 className="text-1xl font-bold">{result.jobTitle}</h2>
                            <p className="text-sm text-gray-400">{result.company}</p>
                        </span>
                    </div>

                    <div className="flex gap-2 my-4">
                        {result.requiredStack.map((item, index) => (
                            <span className="bg-gray-300 rounded-xl px-3 text-sm">{item}</span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <p><Wallet className="text-pink-500 inline-block font-semibold" /> {result.payment}</p>
                        <p className="text-sm text-gray-400">{result.timestamp}</p>
                    </div>
                </div>
            ))
        )
    }
    return (
        <div className="container w-full bg-white">

            <div className="w-full bg-gray-300 p-4">
                <head>
                    <title>Jobs | Codversetech</title>
                </head>

                <div className="mx-auto flex justify-between gap-4 items-start">
                    <section className="mx-auto flex justify-between gap-4 items-start">
                        {/* The search and the results section(LHS) and also the popular section */}
                        <div className="flex flex-col gap-4 w-3/4">
                            {/* The search bar */}
                            <div className="search flex bg-gray-200 p-3 rounded-lg gap-3 w-fit">
                                <span className="flex">
                                    <input type="search" name="" id="" placeholder="Find a job" className="rounded-l-md p-2" />
                                    <span className="location flex bg-white rounded-r-md p-2 border-l-2 items-center gap-1"><LocateFixedIcon /> Loaction <ChevronDown /></span>
                                </span>

                                <button className="p-2 rounded-md bg-pink-500 text-white px-4 cursor-pointer hover:bg-pink-600">Search</button>
                            </div>

                            {/* The search results and realted content */}
                            <div className="p-4 bg-gray-200 rounded-lg">
                                <span className="flex justify-between">
                                    <h2 className="font-bold text-2xl">Search Results</h2>
                                    <p className="text-sm">1,303 results found</p>
                                </span>

                                <div className="grid grid-cols-2 gap-3 ">
                                    {[...Array(10)].map((_, i) => (<Resultcard />))}
                                </div>

                            </div>
                        </div>

                        {/* The side for displaying more info on the job */}
                        <div className="rounded-md bg-white p-4 md:block sm:hidden lg:block w-1/4">
                            <img src="" alt="Company" className="h-14 w-14 rounded-md block" />

                            <h2 className="text-3xl py-2 font-semibold">Backend .NET developer</h2>
                            <p className="text-sm text-gray-400 py-2">Netflix</p>

                            <button className="bg-pink-200 text-pink-500 rounded-xl px-2 py-1">100+ Applications</button>

                            <hr className="my-4 border-gray-300" />

                            <h2 className="text-2xl font-semibold">Description</h2>

                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid assumenda deserunt sequi possimus totam architecto dicta facilis velit quisquam voluptas exercitationem voluptates corrupti, quia odit voluptatum nulla, fugiat molestias nemo.</p>

                            <hr className="my-4 border-gray-300" />

                            <h2 className="text-2xl font-semibold">Skills</h2>


                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}