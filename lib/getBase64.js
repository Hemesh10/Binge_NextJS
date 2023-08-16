import { getPlaiceholder } from "plaiceholder";

export async function getBase64(imgURL) {
  try {
    const src = imgURL;

    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    console.log(base64);
  } catch (error) {
    console.log(error);
  }
}
