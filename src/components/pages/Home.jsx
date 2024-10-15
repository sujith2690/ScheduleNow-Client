import React from 'react'

const Home = () => {
    return (

        <>
            <section className="dark:bg-gray-300 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="/calenderImage.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className='text-5xl'>Schedule <span className="dark:text-violet-600">Your</span> Meetings
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Arrange day to day meeting through ScheduleNow
                        </p>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Don't Wait for Tomorrow ...
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Schedule Now</a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">History</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home