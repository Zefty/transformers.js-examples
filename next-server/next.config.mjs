/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  webpack: (config, { isServer }) => {
    if (isServer) {
      // Replace the entire externals function with one that explicitly excludes onnxruntime-node
      const originalExternals = config.externals;
      config.externals = async (context, request, callback) => {
        if (request === "onnxruntime-node") {
          // ✅ Prevent webpack from bundling onnxruntime-node
          return callback(null, "commonjs onnxruntime-node");
        }
        if (typeof originalExternals === "function") {
          return originalExternals(context, request, callback);
        }
        callback();
      };
    }

    // No need for fallback stubbing in server context
    return config;
  },
};

export default nextConfig;
