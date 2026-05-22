import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	experimental: {
		globalNotFound: true
	},
	reactCompiler: true,
	output: 'export',
	images: {
		unoptimized: true
	}
}

export default nextConfig
