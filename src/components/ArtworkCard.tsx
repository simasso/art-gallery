import { useFavourites } from "../contexts/FavouritesContext";
import type { Artwork } from "../modules/types";
import { useOutletContext } from "react-router";

export const ArtworkCard = ({ artwork }: { artwork: Artwork }) => {
  const { iiifUrl }: { iiifUrl: string } = useOutletContext();
  const {
    isFavourite,
    toggleFavourite,
  }: {
    isFavourite: (id: number) => boolean;
    toggleFavourite: (favourite: Artwork) => void;
  } = useFavourites();
  const { id, title, artist_display, image_id } = artwork;
  const image = iiifUrl + "/" + image_id + "/full/400,/0/default.jpg";
  const svgClassName = `size-[1.2em] ${
    isFavourite(id) ? "fill-red-500 stroke-red-500" : ""
  }`;

  const handleClick = () => {
    toggleFavourite(artwork);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm mt-10">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <div className="flex gap-1 justify-between top">
          <h2 className="card-title">{title}</h2>
          <button onClick={handleClick} className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className={svgClassName}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
        <p>{artist_display}</p>
      </div>
    </div>
  );
};
