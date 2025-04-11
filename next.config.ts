import type { NextConfig } from 'next';
import { join } from 'node:path';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
    ],
  },
  serverExternalPackages: ['@electric-sql/pglite'],
  // Configure the root directory for file tracing
  // If PROJECT_ROOT env is set, use it as a relative path from __dirname
  // Remove trailing slash to prevent path resolution issues
  outputFileTracingRoot: join(
    __dirname,
    process.env.PROJECT_ROOT || './',
  ).replace(/\/$/, ''),
};

export default nextConfig;
