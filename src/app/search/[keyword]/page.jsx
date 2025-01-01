import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
    const { keyword } = params;

    // Decode URL dan ganti '-' dengan spasi
    const decodeKeyword = decodeURI(keyword).replace(/-/g, " ");

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`
    );
    const searchAnime = await response.json();

    return (
        <>
            <section>
                <Header title={`Results for "${decodeKeyword}"`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    );
};

export default Page;
