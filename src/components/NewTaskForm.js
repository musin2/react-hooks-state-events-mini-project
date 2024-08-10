import React from "react";

function NewTaskForm({
  categoriesData,
  onTaskFormSubmit,
  setCategory,
  setDetails,
}) {
  // function onTaskFormSubmit(ev) {
  //   ev.preventDefault();
  //   const textValue = ev.target.text.value;
  //   const categoryValue = ev.target.category.value;

  //   const inputTask = { text: textValue, category: categoryValue };
  //   onFormSubmit(inputTask);
  // }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
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
