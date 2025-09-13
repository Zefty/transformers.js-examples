/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  serverExternalPackages: [
    "@huggingface/transformers", // still externalize the library itself
    "sharp"                      // keep if you need sharp at runtime
  ],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "onnxruntime-node": false,
      sharp: false,
    };

    return config;
  },
};

export default nextConfig;
