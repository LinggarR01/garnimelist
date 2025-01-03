"use client"
import AnimeList from '@/components/AnimeList'
import HeaderMenu from '@/components/Utilities/Headermenu'
import Pagination from '@/components/Utilities/Pagination'
import { useEffect, useState } from "react"

const Page = () => {
    const [topAnime, setTopAnime] = useState({ data: [] })
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchData();
        // Scroll ke atas saat currentPage berubah
        window.scrollTo(0, 0);
    }, [currentPage]);

    
    const fetchData = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${currentPage}&limit=24`
            )
            const TopAnime = await response.json();
            setTopAnime(TopAnime);
            setTotalPages(TopAnime.pagination?.last_visible_page || 1);
        } catch (err) {
            console.error(err)
        }
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }


    return (
        <div>
            <HeaderMenu title={"Most Popular"}/>
            <section>
                <AnimeList api={topAnime} />
            </section>
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
            />
        </div>
    )
}

export default Page
