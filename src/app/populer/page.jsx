"use client"
import AnimeList from '@/components/AnimeList'
import HeaderMenu from '@/components/Utilities/Headermenu'
import { Star } from '@phosphor-icons/react'
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
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=5`
            )
            const TopAnime = await response.json();
            setTopAnime(TopAnime);
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <div>
          <HeaderMenu title={"Most Popular"} />
          <section className="container mx-auto px-4 py-8">  {/* Add container for better layout */}
            <table className="table-auto w-full rounded-lg shadow-md overflow-hidden">
              <thead>
                <tr className="bg-gray-100 border-gray-400 text-center">  {/* Add text-left for left alignment */}
                  <th className="border border-gray-400 px-4 py-2">Rank</th>
                  <th className="border border-gray-400 px-4 py-2">Title</th>
                  <th className="border border-gray-400 px-4 py-2">Rating</th>
                </tr>
              </thead>
              <tbody>
                {topAnime?.data?.map((anime, index) => (
                  <tr key={index} className="border border-gray-400 hover:bg-gray-50">
                    <td className="border border-gray-400 px-4 py-2 text-center">#{anime.rank || index + 1}</td>
                    <td className="border border-gray-400 px-4 py-2 flex items-center">
                      <img src={anime?.images?.webp?.image_url} alt={anime.title} className="w-24 h-24 mr-4 rounded-full object-cover" />
                      <div className="text-left">  {/* Add text-left for left alignment */}
                        <h2 className="font-bold">{anime.title}</h2>
                        <p className="text-sm text-gray-500">{anime.status}</p>
                      </div>
                    </td>
                    <td className="border border-gray-400 px-4 py-2 "> 
                        <div className="flex items-center md:gap-3 gap-2 justify-center">
                          <Star size={20} /> 
                          <span className="ml-1">{anime.score || 'N/A'}</span> 
                        </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      );
}

export default Page
