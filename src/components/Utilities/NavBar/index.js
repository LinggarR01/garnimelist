import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
    return (
        <header className="">
            <div
                className="flex md:flex-row flex-col justify-between md:p-6 p-7 gap-3 bg-primary shadow-lg rounded-b-lg items-center">
                <Link
                    className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
                    href="/">
                    GARNIMELIST
                </Link>
                <InputSearch/>
            </div>

        </header>
    )
}

export default Navbar;