import nextPwa from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // other config options if any
};

// Wrap withPWA and export
export default nextPwa({
  dest: 'public',
  register: true,
  skipWaiting: true,
})(nextConfig);
