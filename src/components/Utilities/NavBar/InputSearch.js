"use client";

import {MagnifyingGlass} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import {useRef} from "react";

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (event) => {
        event.preventDefault();
        const keyword = searchRef.current.value

        if (!keyword) {
            alert("Please enter a search term.");
            return;
        }

        router.push(`/search/${keyword}`)
    }

    return (
        <form onSubmit={handleSearch} className="relative md:w-64 w-full">
            <input
                placeholder="Search..."
                className="md:w-64 w-full p-2 pl-10 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ref={searchRef}
            />

            <button
                type="submit"  // This makes the button trigger the form submission
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 focus:outline-none"
            >
                <MagnifyingGlass size={24} />
            </button>
        </form>
    );
};

export default InputSearch;
