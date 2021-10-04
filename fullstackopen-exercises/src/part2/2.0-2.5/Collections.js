const Collections = ({ notes }) => {
  const handleContent = () =>
    notes.map((note) => <li key={note.id}>{note.content}</li>);

  const handleContent2 = () => {
    const res = notes.map((key) => key.content);
    console.log(res);
  };

  handleContent2();
  return (
    <div>
      <h1>Notes</h1>
      <ul>{handleContent()}</ul>
    </div>
  );
};

export default Collections;
