import { useState } from "react";

function AddProjectForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    onAdd(title.trim(), description.trim());
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h2>Add Project</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddProjectForm;
