// const createNextIntlPlugin = require('next-intl/plugin');
import createNextIntlPlugin from 'next-intl/plugin';
import typography from '@tailwindcss/typography';
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.univ-eloued.dz',
        pathname: '/**',
      },
    ],
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [typography], 
   darkMode: 'class',
  reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/',
          permanent: true, // Indicates a permanent redirect
        },
      ];
    },
    rewrites: async () => {
      return [
        {
          source: '/api/:path*',
          destination:
            process.env.NODE_ENV === 'development'
              ? 'http://127.0.0.1:5328/api/:path*'
              : '/api/',
        },
      ]
    },
    
  };
  // withNextIntl()
  export default nextConfig;
  