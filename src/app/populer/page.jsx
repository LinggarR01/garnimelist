"use client"
import AnimeList from '@/components/AnimeList'
import { useEffect, useState } from "react"

const Page = () => {
    const [topAnime, setTopAnime] = useState({data: []})

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
            )
            const TopAnime = await response.json();
            setTopAnime(TopAnime)
        } catch (err) {
            console.error(err)
        }
    }

    // const response = await fetch(
    // `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime` ) const TopAnime = await
    // response.json();

    return (
        <div>
            <section>
                <AnimeList api={topAnime}/>
            </section>
        </div>
    )
}

export default Page