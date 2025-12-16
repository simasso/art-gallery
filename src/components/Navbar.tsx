import type { ChangeEventHandler } from "react";

export const Navbar = ({
  searchString,
  setSearchString,
}: {
  searchString: string;
  setSearchString: (arg0: string) => void;
}) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (ev) => {
    setSearchString(ev.target.value);
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Art Gallery</a>
        </div>
        <div className="flex gap-2">
          <input
            type="search"
            value={searchString}
            onChange={handleChange}
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};
