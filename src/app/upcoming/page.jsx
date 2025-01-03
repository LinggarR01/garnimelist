"use client"
import AnimeList from '@/components/AnimeList'
import HeaderMenu from '@/components/Utilities/Headermenu'
import Pagination from '@/components/Utilities/Pagination'
import { useEffect, useState } from "react"

const Page = () => {
    const [upcomingAnime, setUpcoming] = useState({ data: [] })
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
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/upcoming?page=${currentPage}&limit=24`
            )
            const UpcomingAnime = await response.json();
            setUpcoming(UpcomingAnime);
            setTotalPages(UpcomingAnime.pagination?.last_visible_page || 1);
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
                <AnimeList api={upcomingAnime} />
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
