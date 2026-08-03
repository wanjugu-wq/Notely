import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/api";
import ActionLoader from "../components/ActionLoader";
import { useNotes } from "../contexts/NoteContext";

function AddNotePage() {
  const { fetchAllNotes } = useNotes();
  const [note, setNote] = useState({
    title: "",
    body: "",
    category: "PERSONAL",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { name: "Personal", value: "PERSONAL" },
    { name: "Business", value: "BUSINESS" },
    { name: "Important", value: "IMPORTANT" },
  ];

  const handleSubmit = async (e) => {
    if (e?.preventDefault) e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/notes/", note);
      const newNoteSlug = response.data.slug;
      fetchAllNotes();
      navigate(`/notes/${newNoteSlug}`, { state: { showAddToast: true } });
      setNote({ title: "", body: "", category: "PERSONAL" });
    } catch (error) {
      toast.error("Failed to add note.", {
        autoClose: 4000,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="lg:w-1/2 flex justify-center items-center gap-4 flex-col md:w-[80%] p-6 bg-[#141313] rounded-md sm:w-[90%] w-full">
      <header className="create_note_header flex justify-between items-center w-full">
        <Link
          to="/notes"
          className="rounded-md bg-transparent text-white p-3 font-extrabold text-lg border-[2px] border-[#ffffff31] border-solid"
        >
          <ArrowLeft />
        </Link>
        <button
          onClick={handleSubmit}
          type="button"
          className="rounded-md bg-transparent text-white px-4 py-2 border-[2px] border-[#ffffff31] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[12px]"
          disabled={loading}
        >
          Save
        </button>
      </header>

      <form
        id="createNoteForm"
        onSubmit={handleSubmit}
        className="create_note_form w-full gap-3 flex mt-3 flex-col items-center justify-center"
      >
        <fieldset disabled={loading} className="w-full space-y-3">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            value={note.title}
            autoFocus
            className="w-full outline-none p-4 text-2xl text-white bg-[#ffffff03] rounded-t-md border-[1px] border-[#ffffff1a] border-solid lg:text-[20px] md:text-[18px] sm:text-[18px] text-[16px]"
          />
          <textarea
            rows="10"
            placeholder="Notes Details..."
            onChange={(e) => setNote({ ...note, body: e.target.value })}
            value={note.body}
            className="w-full outline-none text-white p-4 bg-[#ffffff03] resize-none rounded-b-md border-[1px] border-[#ffffff1a] border-solid lg:text-[18px] md:text-[16px] sm:text-[16px] text-[14px]"
          ></textarea>
          <div className="w-full">
            <label className="text-white text-sm mb-2 inline-block">
              Category
            </label>
            <select
              value={note.category}
              onChange={(e) => setNote({ ...note, category: e.target.value })}
              className="w-full bg-[#ffffff03] text-white p-3 rounded-md border-[1px] border-[#ffffff1a] border-solid outline-none"
            >
              {categories.map((category) => (
                <option
                  key={category.value}
                  value={category.value}
                  className="bg-[#141313] text-white"
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
      </form>

      <ActionLoader isOpen={loading} text="Adding your note..." />
      <ToastContainer />
    </section>
  );
}

export default AddNotePage;
