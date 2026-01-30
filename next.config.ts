import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <<< Bu satırı ekliyoruz
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
