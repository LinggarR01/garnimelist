import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({title, images, id}) => {
    return (
        <Link href={`/${id}`}>
            <Image
                alt="..."
                width={350}
                height={350}
                src={images}
                className="w-full max-h-32"/>

            <h3 className="font-bold md:text-xl text-sm p-8 text-white">{title}</h3>
        </Link>
    )
}

export default AnimeList;