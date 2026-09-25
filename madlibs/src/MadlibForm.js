import { useState } from "react";

function MadlibForm({ createStory }) {
  const [formData, setFormData] = useState({
    noun: "",
    noun2: "",
    adjective: "",
    color: ""
  });

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(data => ({
      ...data,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (
      !formData.noun ||
      !formData.noun2 ||
      !formData.adjective ||
      !formData.color
    ) {
      return;
    }

    createStory(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="noun"
        placeholder="noun"
        value={formData.noun}
        onChange={handleChange}
      />

      <input
        name="noun2"
        placeholder="noun 2"
        value={formData.noun2}
        onChange={handleChange}
      />

      <input
        name="adjective"
        placeholder="adjective"
        value={formData.adjective}
        onChange={handleChange}
      />

      <input
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />

      <button>Get Story</button>
    </form>
  );
}

export default MadlibForm;