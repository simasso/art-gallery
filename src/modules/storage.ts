import type { Artwork, Note } from "./types";

const KEY_FAVOURITES: string = "favourites";
const KEY_NOTES: string = "notes";

export function loadFavourites(): Artwork[] {
  const item = localStorage.getItem(KEY_FAVOURITES);
  return item ? JSON.parse(item) : [];
}

export function loadNotes(): Note[] {
  const item = localStorage.getItem(KEY_NOTES);
  return item ? JSON.parse(item) : [];
}

export function writeFavourites(favourites: Artwork[]) {
  localStorage.setItem(KEY_FAVOURITES, JSON.stringify(favourites));
}

export function writeNotes(notes: Note[]) {
  console.log("notes:", notes);
  localStorage.setItem(KEY_NOTES, JSON.stringify(notes));
}
