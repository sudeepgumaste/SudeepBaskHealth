export function GET(
  request: Request,
) {
  return new Response(JSON.stringify({
    message: "Hello World",
  }))
}