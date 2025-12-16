import { ArtworksPageScheme } from "./types";
import z from "zod/v4";

export const fetchArtworksPage = async (searchString: string) => {
  const res = await fetch(
    `https://api.artic.edu/api/v1/artworks/search?q=${searchString}&page=1&limit=10&fields=id,title,artist_display,image_id`
  );
  if (!res.ok) throw new Error(`${res.status}. Fetch failed!`);
  const page = await res.json();
  const { data, error, success } = ArtworksPageScheme.safeParse(page);
  if (!success) {
    throw new Error(z.prettifyError(error));
  }
  // console.log(data);

  return data;
};
