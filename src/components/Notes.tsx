import type { FormEvent } from "react";
import { useFavourites } from "../contexts/FavouritesContext";

export const Notes = ({ id }: { id: number }) => {
  const { notes, addNote } = useFavourites();
  const saveNotes = (e: FormEvent) => {
    // e.preventDefault();
    const target = e.target as typeof e.target & {
      content: { value: string };
    };
    addNote(id, target.content.value);
  };
  return (
    <dialog id="notes_dialog" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Notes</h3>
        <div className="modal-action justify-center">
          <form onSubmit={saveNotes} method="dialog">
            <fieldset className="fieldset w-80">
              <textarea
                name="content"
                className="textarea"
                required
                value={notes.find((note) => note.id === id)?.text}
              />
              <button type="submit" className="btn btn-neutral mt-4">
                Save Notes
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </dialog>
  );
};
