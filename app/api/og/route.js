// app/api/og/route.js
import axios from "axios";
import * as cheerio from "cheerio";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return new Response(JSON.stringify({ error: "Missing URL parameter" }), {
      status: 400,
    });
  }

  try {
    const response = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const $ = cheerio.load(response.data);
    const ogData = {};

    $("meta").each((_, el) => {
      const property = $(el).attr("property");
      const content = $(el).attr("content");
      if (property && property.startsWith("og:")) {
        ogData[property] = content;
      }
    });

    return new Response(
      JSON.stringify({
        title: ogData["og:title"],
        description: ogData["og:description"],
        image: ogData["og:image"],
        url: ogData["og:url"],
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch OG data",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
