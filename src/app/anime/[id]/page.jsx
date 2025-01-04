"use client"
import { useEffect, useState } from 'react';

const Page = ({ params: { id } }) => {
    const [anime, setAnime] = useState({data: []});
    
    useEffect( () => {
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

    // useEffect(() => {
    //     const fetchAnime = async () => {
    //         try {
    //             const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}`);
    //             const data = await response.json();
    //             setAnime(data);
    //         } catch (error) {
    //             console.error('Failed to fetch anime data:', error);
    //         }
    //     };
    //     fetchAnime();
    // }, [id]);

    return (
        <>
            <div>
                <h3>{anime.data.title}</h3>
            </div>
        </>
    );
};

export default Page;
