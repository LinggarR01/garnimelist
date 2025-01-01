/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Tambahkan reactStrictMode di sini
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net",
            },
        ],
    },
};

module.exports = nextConfig;
