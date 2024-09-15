/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: `${process.env.NEXT_PUBLIC_API_URL}:path*`, // Proxy to the API server
			},
		];
	},
};

export default nextConfig;
