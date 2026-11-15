export async function handler(event, context) {
    const apiKey = process.env.OPENMOVIE_KEY;
    if (!apiKey) {
        return {
            statusCode: 500,
            body: JSON.stringify({ Error: "Server configuration error: OPENMOVIE_KEY is not set." }),
        };
    }

    const title = event.queryStringParameters?.t;
    if (!title) {
        return {
            statusCode: 400,
            body: JSON.stringify({ Error: "A movie title is required in the 't' query parameter." }),
        };
    }

    const url = new URL("https://www.omdbapi.com/");
    url.search = new URLSearchParams({ apikey: apiKey, t: title }).toString();

    const res = await fetch(url);
    const data = await res.json();

    return {
        statusCode: res.ok ? 200 : 502,
        body: JSON.stringify(data),
    };
}