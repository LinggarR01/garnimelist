import Link from "next/link";

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white-800 inline-block">{title}</h1>
            {
                linkTitle && linkHref
                    ? <Link
                            href={linkHref}
                            className="md:text-xl text-sm underline hover:text-indigo-600 transition-all">{linkTitle}</Link>
                    : null
            }
        </div>
    )
}

export default Header;