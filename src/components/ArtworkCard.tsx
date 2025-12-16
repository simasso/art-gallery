import type { Artwork } from "../modules/types";
import { useOutletContext } from "react-router";

export const ArtworkCard = ({ artwork }: { artwork: Artwork }) => {
  const { iiifUrl }: { iiifUrl: string } = useOutletContext();
  const { title, artist_display, image_id } = artwork;
  const image = iiifUrl + "/" + image_id + "/full/400,/0/default.jpg";
  return (
    <div className="card bg-base-100 w-96 shadow-sm mt-10">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{artist_display}</p>
      </div>
    </div>
  );
};
