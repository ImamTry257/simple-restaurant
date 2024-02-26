/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL_API: process.env.BASE_URL_API, // pulls from .env file
    },
}

module.exports = nextConfig
