/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com",
            'importonyperu.local',
            'importonyperu.com.pe',
            'importhnostony.com.pe',
            'depsac.com.pe',
            'cygrefrisac.com.pe',
            'lezcor.com',
            'samarnature.local',
            'samarnature.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "**.r2.cloudflarestorage.com",
                pathname: "/**",
            },
        ]
    },
    allowedDevOrigins: ['http://importonyperu.local', 'http://samarnature.local'],
}

module.exports = nextConfig