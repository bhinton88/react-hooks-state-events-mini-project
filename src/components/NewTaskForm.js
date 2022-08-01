import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit }) {

  const updatedCategories = categories.filter(value => value !== "All")

  const [formData, setFormData] = useState({
    text:"",
    category: "Code"
  })

  function handleNewTask (event) {
    const keyName = event.target.name
    const value = event.target.value

    setFormData({
      ...formData,
      [keyName]: value
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleNewTask} type="text" name="text"  />
      </label>
      <label>
        Category
        <select onChange={handleNewTask} name="category">
          {updatedCategories.map(value => 
            <option key={value} value={value}>{value}</option>
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
