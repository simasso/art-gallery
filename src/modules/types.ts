import z from "zod/v4";

const ArtworkScheme = z.object({
  id: z.number(),
  title: z.string(),
  artist_display: z.string(),
  image_id: z.string().nullable(),
});

// const ConfigScheme = z.object({ iiif_url: z.string() });

export const ArtworksPageScheme = z.object({
  data: z.array(ArtworkScheme),
  config: z.object({ iiif_url: z.string() }),
});

// export type ArtworkConfig = z.infer<typeof ConfigScheme>;
export type Artwork = z.infer<typeof ArtworkScheme>;
export type ArtworksPage = z.infer<typeof ArtworksPageScheme>;

export type Note = { id: number; text: string };
