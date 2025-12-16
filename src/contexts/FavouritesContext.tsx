import { createContext, use, useState, type ReactNode } from "react";
import type { Artwork } from "../modules/types";
import { loadFavourites, writeFavourites } from "../modules/storage";

const FavouritesContext = createContext<
  | {
      favourites: Artwork[];
      addFavourite: (favourite: Artwork) => void;
      deleteFavourite: (id: number) => void;
      isFavourite: (id: number) => boolean;
      toggleFavourite: (favourite: Artwork) => void;
    }
  | undefined
>(undefined);

export function FavouritesContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [favourites, setFavourites] = useState<Artwork[]>(loadFavourites());
  const addFavourite = (favourite: Artwork) => {
    setFavourites((prev) => {
      prev.push(favourite);
      writeFavourites(prev);
      return prev;
    });
  };
  const deleteFavourite = (id: number) => {
    setFavourites((prev) => {
      const updatedFavourites = prev.filter((favourite) => favourite.id !== id);
      writeFavourites(updatedFavourites);
      return updatedFavourites;
    });
  };
  const toggleFavourite = (favourite: Artwork) => {
    setFavourites((prev) => {
      const updatedFavourites = isFavourite(favourite.id)
        ? prev.filter((element) => element.id !== favourite.id)
        : prev.concat(favourite);
      writeFavourites(updatedFavourites);
      return updatedFavourites;
    });
  };
  const isFavourite = (id: number): boolean => {
    return favourites.some((favourite) => favourite.id === id);
  };

  return (
    <FavouritesContext
      value={{
        favourites,
        addFavourite,
        deleteFavourite,
        isFavourite,
        toggleFavourite,
      }}
    >
      {children}
    </FavouritesContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFavourites() {
  const currentContext = use(FavouritesContext);
  if (!currentContext) {
    throw new Error(
      "useFavourites has to be used within <FavouritesContextProvider>"
    );
  }
  return currentContext;
}
