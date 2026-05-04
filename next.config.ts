import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		globalNotFound: true
	},
	reactCompiler: true,
	images: {
		unoptimized: true
	}
}

export default nextConfig
