import { ArtworkGrid } from "../components/ArtworkGrid";
import { Notes } from "../components/Notes";
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
      <Notes />
    </div>
  );
};
