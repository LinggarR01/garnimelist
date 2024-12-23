import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({api}) => {
    return (
        <div
            className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-4 bg-secondary  shadow-lg">
            {
                api
                    .data
                    .map((anime) => {
                        return (
                            <Link href={`/${anime.mal_id}`}>
                                <Image
                                    src={anime.images.webp.image_url}
                                    alt="..."
                                    width={350}
                                    height={350}
                                    className="w-full max-h-64"/>

                                <h3 className="font-bold md:text-xl text-sm p-8 text-white">{anime.title}</h3>
                            </Link>
                        )
                    })
            }
        </div>

    )
}

export default AnimeList;