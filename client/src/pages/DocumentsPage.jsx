import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { DocumentList } from "../components/documents/DocumentList";
import { DocumentEditor } from "../components/documents/DocumentEditor";
import { getDocuments, createDocument } from "../services/documents";
import { toast } from "sonner";

export default function DocumentsPage() {
  const navigate = useNavigate();
  const params = useParams();
  const documentId = params.documentId;
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshSignal, setRefreshSignal] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      try {
        const docs = await getDocuments();
        setDocuments(docs);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  const onCreate = async () => {
    const promise = createDocument({ title: "Untitled" });

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });

    const doc = await promise;
    setSearchQuery("");
    setRefreshSignal((value) => value + 1);
    navigate(`/documents/${doc.id}`);
  };

  return (
    <div className="h-full min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Documents</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Access your workspace documents and navigate by page.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search notes..."
              className="min-w-[260px]"
            />
            <Button onClick={onCreate}>Create a note</Button>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            <DocumentList key={`${documentId || "root"}-${refreshSignal}`} query={searchQuery} refreshSignal={refreshSignal} />
          </aside>
          <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
            {documentId ? (
              <DocumentEditor documentId={documentId} onSaved={() => setRefreshSignal((value) => value + 1)} />
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                <img src="/empty.png" alt="Empty" className="mx-auto h-72 w-72 object-contain dark:hidden" />
                <img src="/empty-dark.png" alt="Empty" className="mx-auto h-72 w-72 object-contain hidden dark:block" />
                <h2 className="text-xl font-semibold">Welcome to Notely</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Select a note from the sidebar or create a new one.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}