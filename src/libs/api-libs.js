// export const getAnimeResource = async(resource, query) => {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
//     const data = await response.json();
//     return data
// }

// export const getNestedResource = async(resource, objectProperty) => {
//     const response = await getAnimeResource(resource)
//     return response.data.flatMap(item => item.entry)
// }

export const useAnimeResource = (resource, query) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [resource, query]); // Only fetch when resource or query changes

    return { data, loading, error };
};