import React from "react";
import { ArtworkCard } from "./ArtworkCard";
import { useOutletContext } from "react-router";
import type { Artwork } from "../modules/types";

export const ArtworkGrid = () => {
  const { artworks }: { artworks: Artwork[] } = useOutletContext();
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
      {artworks?.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
};
