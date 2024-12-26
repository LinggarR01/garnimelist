"use client"
import AnimeList from '@/components/AnimeList'
import React from 'react'

const Page = async() => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
    )
    const TopAnime = await response.json();
    
    return (
        <div>
            <section>
                <AnimeList api={TopAnime}/>
            </section>
        </div>
    )
}

export default Page