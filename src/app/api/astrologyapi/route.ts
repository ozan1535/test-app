export const GET = async (req) => {
    try {
        const searchParams = new URLSearchParams(new URL(req.url).searchParams);
        const timerange = searchParams.get("timerange");
        const zodiac = searchParams.get("zodiac");
        const res = await fetch(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/${timerange}?sign=${zodiac}`)
        const data = await res.json()
        return Response.json(data);
    } catch (error) {
        return Response.json({ error: "error" });
    }
};