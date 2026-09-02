import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		globalNotFound: true
	},
	reactCompiler: true,
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true
	}
}

export default nextConfig
