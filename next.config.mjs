/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
      images: {
    unoptimized: true,
      },
    reactStrictMode: true,
     basePath: "/Portfolio",
    assetPrefix: "/Portfolio/",
};

export default nextConfig;
