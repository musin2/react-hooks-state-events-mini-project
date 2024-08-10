import React from "react";

function NewTaskForm({ categoriesData, onFormSubmit }) {
  function onTaskFormSubmit(ev) {
    ev.preventDefault();
    const textValue = ev.target.text.value;
    const categoryValue = ev.target.category.value;

    const inputTask = { text: textValue, category: categoryValue };
    onFormSubmit(inputTask);
  }
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categoriesData.map((ctgr) => {
            return ctgr !== "All" ? <option key={ctgr}>{ctgr}</option> : null;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
