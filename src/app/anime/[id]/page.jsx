"use client"
import HeaderMenu from '@/components/Utilities/HeaderMenu';

import Image from 'next/image';
import {useEffect, useState} from 'react';
import { useAnimeResource } from '@/libs/api-libs';

const Page = ({params: {id}}) => {
    const [anime, setAnime] = useState({data: []});
    const [chara, setChara] = useState({data: []});
    

    const fetchData = async () => {
        try {
            const getAnimeResponse = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`
            )
            const Anime = await getAnimeResponse.json();
            setAnime(Anime)

            const getCharaResponse = await fetch(`
                ${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}/characters    
            `)
            const Chara = await getCharaResponse.json();
            setChara(Chara)
        } catch (err) {
            console.error(err)
        }
    }

    if (chara && chara.data && chara.data.length > 0) {
        chara.data.forEach((charaMember) => {
          const {character} = charaMember; // Destructure correctly
      
          console.log(character.name); // Access character's name
          console.log(character.images.jpg.image_url); // Access image URL (JPG format)
          console.log(character.images.webp.image_url); // Access image URL (WEBP format) – optional
      
          
        });
      }

    // Fetch data on component mount and when id prop changes.
    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div className="flex flex-row p-16 min-h-screen">
            
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Anime Image and Details */}
                <div className="lg:w-1/3  p-6 rounded-lg justify justify-items-center">
                <h1 className="font-bold text-4xl mb-2 md:text-left text-center">{anime?.data?.title}</h1>
                <h2 className="font-semibold text-xl text-gray-600 mb-4 md:text-left text-center">
                    ({anime?.data?.title_japanese})
                </h2>
                    <Image
                        src={anime?.data?.images?.webp?.image_url}
                        alt={anime?.data?.title || 'Loading...'}
                        width={350}
                        height={350}
                        className="md:w-256 max-w-128 h-auto rounded-lg shadow-md"
                    />
                    <h3 className="font-bold text-2xl my-4 border-b-2 border-gray-800">Details</h3>
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
                    <div className="font-bold text-2xl my-6 border-b-2 border-gray-800">Trailer</div>

                    <div className="flex justify-center items-center bg-gray-900 rounded-lg shadow-lg ">
                        {anime?.data?.trailer?.url ? (
                          <iframe
                            className="rounded-lg shadow-xl"
                            src={`https://www.youtube.com/embed/${new URL(anime.data.trailer.url).searchParams.get("v")}`}
                            title="Anime Trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <div className="text-center text-white">
                            <p className="text-xl font-semibold">Trailer not available</p>
                            <p className="text-sm text-gray-400">Check back later for updates</p>
                          </div>
                        )}
                    </div>
                </div>

                {/* Anime Description */}
                <div className="lg:w-2/3  p-6 rounded-lg shadow-lg">
                    <h1 className="font-bold text-2xl mb-2">Synopsis</h1>
                    
                    <p className="text-justify text-lg leading-relaxed">
                        {anime?.data?.synopsis || 'No synopsis available.'}
                    </p>
                </div> 
                <div className="lg:w-2/3  p-6 rounded-lg shadow-lg">
                    <h1 className="font-bold text-2xl mb-2">Characters</h1>
                        {chara && chara.data && chara.data.length > 0 && (
                        <ul>
                            {chara.data.map((charaMember, index) => (
                              <li key={index}>
                                <img
                                  src={charaMember.character.images.jpg.image_url} // Use JPG image
                                  alt={charaMember.character.name}
                                  />
                                  <h3>{charaMember.character.name}</h3> {/* Access character name */}
                              </li>
                            ))}
                        </ul>
                    )}
                </div> 
            </div>
            
        </div>
    );
};

export default Page;
