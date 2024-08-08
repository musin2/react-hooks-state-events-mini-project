import React from "react";
import Task from "./Task";

function TaskList({ TASKS }) {
  
  return (
    <div className="tasks">
      {/* *index as key* */}
      {TASKS.map((tsk, index) => {
       return <Task key={index} category={tsk.category} text={tsk.text} />;
       })}
    </div>
  );
}

export default TaskList;
