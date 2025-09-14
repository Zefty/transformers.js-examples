import { pipeline } from "@huggingface/transformers";

export async function GET() {
  const classifier = await pipeline(
    "text-classification",
    "Xenova/distilbert-base-uncased-finetuned-sst-2-english"
  );

  const result = await classifier("I love Transformers.js!");
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
  });
}