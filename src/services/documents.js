import api from "./api";

export const getDocuments = async () => {
  const res = await api.get("/documents");
  return res.data.documents;
};

export const getSidebarDocuments = async (parentId) => {
  const res = await api.get("/documents/sidebar", {
    params: {
      parent_id: parentId,
    },
  });
  return res.data.sidebar;
};

export const getDocument = async (id) => {
  const res = await api.get(`/documents/${id}`);
  return res.data.document;
};

export const createDocument = async (data) => {
  const res = await api.post("/documents", data);
  return res.data.document;
};

export const updateDocument = async (id, updates) => {
  const res = await api.patch(`/documents/${id}`, updates);
  return res.data.document;
};

export const deleteDocument = async (id) => {
  return api.delete(`/documents/${id}`);
};

export const restoreDocument = async (id) => {
  return api.patch(`/documents/${id}`, { is_archived: false });
};

export const searchDocuments = async (q) => {
  const res = await api.get(`/documents/search`, {
    params: { q },
  });
  return res.data.documents;
};