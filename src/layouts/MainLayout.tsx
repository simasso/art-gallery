import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { type Artwork, type ArtworksPage } from "../modules/types";
import { fetchArtworksPage } from "../modules/network";

export default function MainLayout() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [error, setError] = useState<Error | null>();
  const [iiifUrl, setIiifUrl] = useState<string | null>(null);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    fetchArtworksPage(searchString)
      .then((page: ArtworksPage) => {
        setArtworks(page.data);
        setIiifUrl(page.config.iiif_url);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError(error);
        } else {
          console.log("Something went wrong");
        }
      });
  }, [searchString]);

  return (
    <div className="body">
      <Navbar searchString={searchString} setSearchString={setSearchString} />
      {/* Outlet rendert die Child-Routes an dieser Stelle */}
      {/* context prop übergibt Daten an alle Child-Components */}
      {error && <p>Error: {error.message}</p>}
      {<Outlet context={{ artworks, iiifUrl }} />}
    </div>
  );
}
