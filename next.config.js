/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com", 'importonyperu.local', 'importonyperu.com.pe', 'depsac.com.pe', 'lezcor.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**.r2.cloudflarestorage.com",
                pathname: "/**",
            },
        ]
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/:path*',
    //             has: [
    //                 {
    //                     type: 'host',
    //                     value: '(?<domains>importonyperu\\.local|depsac\\.local|lezcor\\.local|importonyperu\\.com\\.pe|depsac\\.com\\.pe|lezcor\\.com)',
    //                 },
    //             ],
    //             destination: '/:domains/:path*',
    //         },
    //     ]
    // },
}

module.exports = nextConfig