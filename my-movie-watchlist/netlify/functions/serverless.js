export async function handler(event, context) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.OPENMOVIE_KEY}&t=${event.queryStringParameters}`)
    const titleParams = await event.queryStringParameters;

    console.log("Query Parameters:", titleParams);

    const data = await res.json();

    return {
    statusCode: 200,
    body: JSON.stringify(data),
    };
}