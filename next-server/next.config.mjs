/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ This tells Next.js to NOT bundle these into the output, just require() them at runtime
  // serverExternalPackages: [
  //   "@huggingface/transformers",
  //   "@xenova/transformers",
  //   "onnxruntime-node",
  //   "sharp",
  // ],


};

export default nextConfig;
