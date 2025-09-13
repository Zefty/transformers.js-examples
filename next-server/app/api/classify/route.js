export async function GET(request) {
  const text = request.nextUrl.searchParams.get("text");

  if (!text) {
    return Response.json({ message: "No text provided" }, { status: 400 });
  }

  // const { pipeline } = await import("@huggingface/transformers");
  // const classifier = await pipeline(
  //   "text-classification",
  //   "Xenova/distilbert-base-uncased-finetuned-sst-2-english",
  // );
  // const result = await classifier(text);
  // return Response.json(result[0]);
  return Response.json({})
}
