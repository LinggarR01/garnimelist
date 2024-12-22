"use client"

import AnimeList from "@/components/AnimeList"

const Home = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
    )
    const anime = await response.json();

    return (
        <main>
            <div className="flex justify-between items-center p-4">
                <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 inline-block">Top Trending</h1>
                <h1 className="">See ALL</h1>
            </div>
            <div
                className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 p-4 bg-gray-900 rounded-lg shadow-lg">
                {
                    anime
                        .data
                        .map(data => {
                            return (
                                <div
                                    key={data.mal_id}
                                    className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                    <AnimeList
                                        title={data.title}
                                        images={data.images.webp.image_url}
                                        id={data.mal_id}/>
                                </div>
                            )
                        })
                }
            </div>
        </main>
    )
}

export default Home
