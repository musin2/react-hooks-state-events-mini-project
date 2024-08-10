import React from "react";

function Task({ category, text, deleteThis, index }) {
  function handleDelete() {
    console.log("should be deleted");
    const toBeDeleted = { text, category };
    console.log(toBeDeleted);

    deleteThis(index);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
