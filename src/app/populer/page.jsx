"use client"
import AnimeList from '@/components/AnimeList'
import HeaderMenu from '@/components/Utilities/Headermenu'
import { useEffect, useState } from "react"

const Page = () => {
    const [topAnime, setTopAnime] = useState({ data: [] })


    useEffect(() => {
        fetchData();
        // Scroll ke atas saat currentPage berubah
        window.scrollTo(0, 0);
    }, []);

    
    const fetchData = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
            )
            const TopAnime = await response.json();
            setTopAnime(TopAnime);
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <div>
            <HeaderMenu title={"Most Popular"}/>
            <section>
                <AnimeList api={topAnime} />
            </section>
        </div>
    )
}

export default Page
