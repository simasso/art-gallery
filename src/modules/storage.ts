import type { Artwork } from "./types";

const KEY_FAVOURITES: string = "favourites";

export function loadFavourites(): Artwork[] {
  const item = localStorage.getItem(KEY_FAVOURITES);
  return item ? JSON.parse(item) : [];
}

export function writeFavourites(favourites: Artwork[]) {
  localStorage.setItem(KEY_FAVOURITES, JSON.stringify(favourites));
}
