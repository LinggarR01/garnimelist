import Link from "next/link";

const HeaderMenu = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white-800 inline-block">{title}</h1>
            {
                linkTitle && linkHref
                    ? <Link
                            href={linkHref}
                            className="sm:text-xl text-2xl underline hover:text-white transition-all">{linkTitle}</Link>
                    : null
            }
        </div>
    )
}

export default HeaderMenu;