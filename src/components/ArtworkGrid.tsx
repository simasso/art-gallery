import { ArtworkCard } from "./ArtworkCard";
import type { Artwork } from "../modules/types";

export const ArtworkGrid = ({ artworks }: { artworks: Artwork[] }) => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
      {artworks?.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
};
