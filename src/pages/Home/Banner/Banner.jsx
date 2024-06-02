import React from "react"

const Banner = () => {
    return (
        <div className="md:-ml-[9%] md:-mr-[9%] -ml-[6%] -mr-[6%] relative overflow-hidden">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#749bd3"
                        fillOpacity="1"
                        d="M0,192L120,208C240,224,480,256,720,240C960,224,1200,160,1320,128L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                    ></path>
                </svg>
            </div>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 -mt-24 lg:-mt-56 md:mb-14">
                <div className="relative isolate  px-6 py-20 text-center sm:px-16">
                    <p className="mx-auto max-w-lg text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Did not find post you were looking for?
                    </p>

                    <form>
                        <label
                            className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                            htmlFor="search-bar"
                        >
                            <input
                                id="search-bar"
                                placeholder="your keyword here"
                                name="q"
                                className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                                required=""
                            />
                            <button
                                type="submit"
                                className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
                            >
                                <div className="flex items-center transition-all opacity-1">
                                    <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">Search</span>
                                </div>
                            </button>
                        </label>
                        <div className="mt-2">
                            Popular Topics:{" "}
                            <span>
                                <button className="text-blue-500">Helpdesk</button>,{" "}
                                <button className="text-blue-500">Introduction</button>,{" "}
                                <button className="text-blue-500">Payment</button>
                            </span>
                        </div>
                    </form>

                    {/* <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                        aria-hidden="true"
                    >
                        <circle
                            cx="512"
                            cy="512"
                            r="512"
                            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                            fillOpacity="0.7"
                        ></circle>
                        <defs>
                            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                <stop stopColor="#3b82f6"></stop>
                                <stop offset="1" stopColor="#1d4ed8"></stop>
                            </radialGradient>
                        </defs>
                    </svg> */}
                </div>
            </div>
        </div>
    )
}

export default Banner
