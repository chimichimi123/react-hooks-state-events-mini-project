import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const initalData = { text: "", category: "Code" };
  const [newTask, setNewTask] = useState(initalData);

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(newTask);
    console.log(newTask);
    setNewTask(initalData);
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input
          onChange={handleChange}
          value={newTask.text}
          type="text"
          name="text"
        />
      </label>
      <label>
        Category
        <select
          value={newTask.category}
          name="category"
          type="text"
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
