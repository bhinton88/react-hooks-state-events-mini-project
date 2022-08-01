import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

const [tasks, setTasks] = useState(TASKS)
const [filter, setFilter] = useState("All")

function onTaskFormSubmit(formData){
  setTasks([...tasks, formData])
}

function handleFilter (event) {
  setFilter(event.target.value)
}

function deleteTask(event) {
  const updatedTasks = tasks.filter(value => value.text !== event.target.value )

  setTasks(updatedTasks)
}

const filteredTasks = tasks.filter((task) => {
  if(filter === "All"){
    return true
  } else {
    return task.category === filter
  }
})


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        handleFilter={handleFilter}
        filter={filter}
      />
      <NewTaskForm 
        onTaskFormSubmit={onTaskFormSubmit}
        categories={CATEGORIES}
      />
      <TaskList 
        deleteTask={deleteTask}
        tasks={filteredTasks}
      />
    </div>
  );
}

export default App;