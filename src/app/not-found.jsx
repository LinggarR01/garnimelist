import {ArrowUUpLeft, GlobeSimpleX} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen  text-gray-800">
            <div className="flex flex-row justify-center">
                <GlobeSimpleX size={40}/>
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            </div>
            <p className="text-lg mb-6 text-center">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col">
                <Link href="/" className="flex items-center hover:text-white underline">
                    <ArrowUUpLeft size={28} className="mr-2"/>
                    Go Back
                </Link>
            </div>

        </div>
    );
};

export default Page;
