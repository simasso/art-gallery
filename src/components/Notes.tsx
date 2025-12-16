export const Notes = () => {
  const saveNotes = () => {};
  return (
    <dialog id="notes_dialog" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Notes</h3>
        <div className="modal-action justify-center">
          <form onSubmit={saveNotes} method="dialog">
            <fieldset className="fieldset w-80">
              <textarea name="content" className="textarea" required />
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
