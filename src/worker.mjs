const GSC_VERIFICATION_PATH = "/googleecb5b8e22f3772c8.html";
const GSC_VERIFICATION_BODY = "google-site-verification: googleecb5b8e22f3772c8.html";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === GSC_VERIFICATION_PATH) {
      return new Response(GSC_VERIFICATION_BODY, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=0, must-revalidate",
        },
      });
    }

    const response = await env.ASSETS.fetch(request);
    const hostname = url.hostname;

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
