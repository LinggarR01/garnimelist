import Link from "next/link";

const Navbar = () => {
    return (
        <header className="">
            <div
                className="flex md:flex-row flex-col justify-between md:p-6 p-7 gap-3 bg-gray-800 shadow-lg rounded-b-lg">
                <Link
                    className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
                    href="/">
                    GARNIMELIST
                </Link>
                <input
                    placeholder="Cari Anime"
                    className="p-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>

        </header>
    )
}

export default Navbar;