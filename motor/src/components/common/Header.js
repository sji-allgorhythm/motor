import React from 'react'

export const Header = () => {
    return (
        <>
            <header class="text-gray-400 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="/logo.png" alt="Moons-Law" className="h-20" />
                    </a>
                    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <a class="mr-5 hover:text-gray-100">First Link</a>
                        <a class="mr-5 hover:text-gray-100">Second Link</a>
                        <a class="mr-5 hover:text-gray-100">Third Link</a>
                        <a class="mr-5 hover:text-gray-100">Fourth Link</a>
                    </nav>
                    <button class="inline-flex items-center bg-red-600 border-0 py-1 px-3 focus:outline-none hover:bg-red-400 rounded text-gray-100 mt-4 md:mt-0">Log In
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>

        </>
    )
}
