/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  // ✅ This tells Next.js to NOT bundle these into the output, just require() them at runtime
  serverExternalPackages: [
    "@huggingface/transformers",
    "@xenova/transformers",
    "onnxruntime-node",
    "sharp",
  ],

  webpack: (config, { isServer }) => {
    if (isServer) {
      // ✅ Tell webpack to treat onnxruntime-node as an external module
      config.externals.push("onnxruntime-node");
    }

    // Remove any fallback that would stub it out
    config.resolve.fallback = { sharp: false, "onnxruntime-node": false };

    return config;
  },
};

export default nextConfig;
