export async function handle(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const name = url.searchParams.get("name") || "World";
  return new Response(`Hello, ${name}`);
}
