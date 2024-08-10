import React from "react";
import Task from "./Task";

function TaskList({ tasksData, deleteThis }) {
  return (
    <div className="tasks">
      {/* *index as key* */}
      {tasksData.map((tsk, index) => {
        return (
          <Task
            key={index}
            category={tsk.category}
            text={tsk.text}
            deleteThis={deleteThis}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
