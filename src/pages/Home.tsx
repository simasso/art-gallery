import { useOutletContext } from "react-router";
import { ArtworkGrid } from "../components/ArtworkGrid";
import type { Artwork } from "../modules/types";

export const Home = () => {
  const { artworks }: { artworks: Artwork[] } = useOutletContext();
  return (
    <div>
      <ArtworkGrid artworks={artworks} />
    </div>
  );
};
