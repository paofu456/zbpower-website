export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const hostname = new URL(request.url).hostname;

    if (!hostname.endsWith(".workers.dev")) {
      return response;
    }

    const headers = new Headers(response.headers);
    headers.set("X-Robots-Tag", "noindex, nofollow");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
