import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTask }) {

  return (
    <div className="tasks">
      {tasks.map(task => 
        <Task 
          deleteTask={deleteTask}
          key={task.text} 
          text={task.text} 
          category={task.category} 
        />
        )}
    </div>
  );
}

export default TaskList;
