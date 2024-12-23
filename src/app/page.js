"use client"

import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Home = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
    )
    const TopAnime = await response.json();

    return (
        <>
            <section>
                <Header title="Most Popular" linkHref="/populer" linkTitle="See All"/>
                <AnimeList api={TopAnime}/>
            </section>

            <section>
                <Header title="Upcoming Anime" linkHref="/upcoming" linkTitle="See All"/>
                <AnimeList api={TopAnime}/>
            </section>

            <section>
                <Header title="Top Newest" linkHref="/newest" linkTitle="See All"/>
                <AnimeList api={TopAnime}/>
            </section>
        </>
    )
}

export default Home
