import React from 'react';

const Footer = () => {

    return (
        <footer class="bg-primary ">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between ">
                    <a
                        href="https://flowbite.com/"
                        class="flex items-center mb-4 sm:mb-0  rtl:space-x-reverse">
                        <svg
                            width="150"
                            height="150"
                            viewBox="0 0 183 318"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 306C48 235.2 37.5 134.5 17.5 79C48.7 103.8 65.6667 61.3333 79 51C108.2 131 65.6667 235.5 53.5 268L182.5 248.5C145.3 268.1 127.5 295 143 306H0Z"
                                fill="#D9D9D9"/>
                            <g filter="url(#filter0_i_51_15)">
                                <path
                                    d="M43.517 46C61.0087 50.4539 39.017 0 39.017 0C39.017 0 70.1723 14.9622 71.517 33C72.7853 50.0123 63.5784 63.7504 47.517 69.5C34.672 74.0982 21.7976 74.4422 13.0169 64C1.91744 50.8003 25.017 21.5 25.017 21.5C25.017 21.5 31.8986 43.0416 43.517 46Z"
                                    fill="#D5FF00"/>
                                <path
                                    d="M43.517 46C61.0087 50.4539 39.017 0 39.017 0C39.017 0 70.1723 14.9622 71.517 33C72.7853 50.0123 63.5784 63.7504 47.517 69.5C34.672 74.0982 21.7976 74.4422 13.0169 64C1.91744 50.8003 25.017 21.5 25.017 21.5C25.017 21.5 31.8986 43.0416 43.517 46Z"
                                    stroke="black"/>
                            </g>
                            <path
                                d="M74 306.5C111 303.5 109.5 250 75.5 264.5C91.5 276 79.9414 304 50.5 306.5L74 306.5Z"
                                fill="#001A6E"/>
                            <defs>
                                <filter
                                    id="filter0_i_51_15"
                                    x="-4"
                                    y="-18"
                                    width="75.6331"
                                    height="90.5603"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"/>
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"/>
                                    <feOffset dx="-14" dy="-18"/>
                                    <feGaussianBlur stdDeviation="18.9"/>
                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_51_15"/>
                                </filter>
                            </defs>
                        </svg>

                        <span
                            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GARNIMELIST</span>
                    </a>
                    <ul
                        class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a
                                href="https://www.instagram.com/garrlearn/"
                                class="hover:underline me-4 md:me-6">Instagram</a>
                        </li>
                        <li>
                            <a href="https://github.com/LinggarR01" class="hover:underline me-4 md:me-6">Github</a>
                        </li>
                        <li>
                            <a href="" class="hover:underline me-4 md:me-6">LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://jikan.moe/" class="hover:underline me-4 md:me-6">API</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024
                    <a href="https://flowbite.com/" class="hover:underline">
                        GarnimeList</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
