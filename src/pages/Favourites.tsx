import { ArtworkGrid } from "../components/ArtworkGrid";
import { useFavourites } from "../contexts/FavouritesContext";
import type { Artwork } from "../modules/types";

export const Favourites = () => {
  const {
    favourites,
  }: {
    favourites: Artwork[];
  } = useFavourites();
  return (
    <div>
      <ArtworkGrid artworks={favourites} />
    </div>
  );
};
