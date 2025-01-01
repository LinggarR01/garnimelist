"use client"

import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"
import { useEffect, useState } from "react"

const Home = () => {
    const [topAnime, setTopAnime] = useState({data: []})
    const [newAnime, setNewAnime] = useState({data: []})

    useEffect( () => {
        fetchData()
    }, [])
    
    const fetchData = async () => {
        try {
            // fetch data top Anime
            const topResponse = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=4`
            )
            const TopAnime = await topResponse.json();
            setTopAnime(TopAnime)

            // fetch data new Anime
            const newResponse = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/upcoming?limit=8`
            )
            const NewAnime = await newResponse.json();
            setNewAnime(NewAnime)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <section>
                <Header title="Most Popular" linkHref="/populer" linkTitle="See All"/>
                <AnimeList api={topAnime}/>
            </section>

            <section>
                <Header title="Upcoming Anime" linkHref="/upcoming" linkTitle="See All"/>
                <AnimeList api={newAnime}/>
            </section>
        </>
    )
}

export default Home
