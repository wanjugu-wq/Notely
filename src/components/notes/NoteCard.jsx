const NoteCard = ({ title, content }) => {
  return (
    <article className="note-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </article>
  );
};

export default NoteCard;
