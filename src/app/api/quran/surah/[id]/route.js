export async function GET(req, { params }) {
  try {
    const id = params.id;

    const res = await fetch(
      `https://api.alquran.cloud/v1/surah/${id}/editions/quran-uthmani,en.asad`
    );

    const json = await res.json();

    if (!json?.data || !Array.isArray(json.data)) {
      return Response.json({
        success: false,
        data: [],
      });
    }

    return Response.json({
      success: true,
      data: json.data,
    });

  } catch (error) {
    return Response.json({
      success: false,
      data: [],
    });
  }
}