"use client"
import VideoPlayer from '@/components/Utilities/VideoPlayer';
import Image from 'next/image';
import {useEffect, useState} from 'react';

const Page = ({params: {id}}) => {
    const [anime, setAnime] = useState({data: []});

    useEffect(() => {
        fetchData()
    }, [id])

    const fetchData = async () => {
        try {
            // fetch data top Anime
            const getAnimeResponse = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`
            )
            const Anime = await getAnimeResponse.json();
            setAnime(Anime)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="p-16 min-h-screen">
            <h1 className="font-bold text-4xl mb-2 md:text-left text-center">{anime?.data?.title}</h1>
            <h2 className="font-semibold text-xl text-gray-600 mb-4 md:text-left text-center">
                ({anime?.data?.title_japanese})
            </h2>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Anime Image and Details */}
                <div className="lg:w-1/3  p-6 rounded-lg justify justify-items-center">
                    <Image
                        src={anime?.data?.images?.webp?.image_url}
                        alt={anime?.data?.title || 'Loading...'}
                        width={350}
                        height={350}
                        className="md:w-256 max-w-128 h-auto rounded-lg shadow-md"
                    />
                    <h3 className="font-bold text-lg mt-4">Details</h3>
                    {/* anime?.data?.aired? Optional chaining harus ditulis dalam satu baris atau menggunakan tanda kurung untuk pemisahan baris. */}
                    <div>
                        <p><strong>Aired:</strong> {anime?.data?.aired?.string || 'N/A'}</p>
                        <p><strong>Status:</strong> {anime?.data?.status || 'N/A'}</p>
                        <p><strong>Score:</strong> {anime?.data?.score || 'N/A'}</p>
                        <p><strong>Type:</strong> {anime?.data?.type || 'N/A'}</p>
                        <p><strong>Episodes:</strong> {anime?.data?.episodes || 'N/A'}</p>
                        <p><strong>Genres:</strong> {anime?.data?.genres?.map(genre => genre.name).join(', ') || 'N/A'}</p>
                        <p><strong>Rank:</strong> {anime?.data?.rank || 'N/A'}</p>
                        <p><strong>Popularity:</strong> {anime?.data?.popularity || 'N/A'}</p>
                        <p><strong>Source:</strong> {anime?.data?.source || 'N/A'}</p>
                    </div>
                    <h3 className="font-bold text-lg mt-6">Trailer</h3>
                    {anime?.data?.trailer?.url ? (
                        <iframe
                            width="100%"
                            height="315"
                            src={anime.data.trailer.url}
                            title="Anime Trailer"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="mt-4 rounded-lg"
                        ></iframe>
                    ) : (
                        <p>No trailer available</p>
                    )}
                </div>

                {/* Anime Description */}
                <div className="lg:w-2/3  p-6 rounded-lg shadow-lg">
                    <h1 className="font-bold text-4xl mb-2">Synopsis</h1>
                    
                    <p className="text-justify text-lg leading-relaxed">
                        {anime?.data?.synopsis || 'No synopsis available.'}
                    </p>
                </div>
                <VideoPlayer youtubeID={anime?.data?.trailer?.url ? new URL(anime.data.trailer.url).searchParams.get("v") : null}/>
            </div>
        </div>
    );
};

export default Page;
