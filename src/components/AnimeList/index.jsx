import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/app/loading';

const AnimeList = ({ api }) => {
    if (!api || !api.data || api.data.length === 0) {
        // Jika data api belum ada atau kosong, tampilkan pesan loading atau empty
        return <Loading />;
    }
    console.log(api); // Tambahkan untuk memeriksa struktur api


    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-4 shadow-lg">
            {api.data.map((anime) => {
                return (
                    <Link
                        key={anime.mal_id}  // Tambahkan key unik untuk setiap elemen dalam list
                        href={`/${anime.mal_id}`}
                        className="cursor-pointer hover:text-white transition-all"
                    >
                        <Image
                            src={anime.images.webp.image_url}
                            alt={anime.title}
                            width={350}
                            height={350}
                            className="w-full max-h-64"
                        />
                        <h3 className="font-bold md:text-xl text-lg p-8">{anime.title}</h3>
                    </Link>
                );
            })}
        </div>
    );
};

export default AnimeList;
    