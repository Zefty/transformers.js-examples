import pipeline from "@xenova/transformers";

export async function GET(request) {
  const text = request.nextUrl.searchParams.get("text");

  if (!text) {
    return Response.json({ message: "No text provided" }, { status: 400 });
  }

  const classifier = await pipeline(
    "text-classification",
    "Xenova/distilbert-base-uncased-finetuned-sst-2-english",
  );
  const result = await classifier(text);
  return Response.json(result[0]);
}
