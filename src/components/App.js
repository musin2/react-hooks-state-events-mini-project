import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksData, setTasksData] = useState(TASKS);
  //const [categoriesData, setCategoriesData] = useState(CATEGORIES);
  const categoriesData = CATEGORIES;

function submitTask(newTask) {
  setTasksData([...tasksData,newTask])
}
function deleteThis(deletedObject){
//const withRemovedTask = tasksData.filter((tsk) => {return tsk.category !== deletedObject.category && tsk.text !== deletedObject.text})
const withRemovedTask = [...tasksData].splice(deletedObject,1);
setTasksData(withRemovedTask);
}
const [filteredData, setFilteredData] = useState([]);
const [isFiltered, setIsFiltered] = useState(false);


function filterThis(categoryToFilter) {
  const filteredList = [...tasksData].filter((task) => {
    if(categoryToFilter ==="All") return true

    return task.category ===categoryToFilter
  })
  setIsFiltered(true)
  categoryToFilter === "All"
    ? setFilteredData(tasksData)
    : setFilteredData(filteredList);
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoriesData={categoriesData} filterThis={filterThis} />
      <NewTaskForm
        categoriesData={categoriesData}
        onFormSubmit={submitTask}
      />
      {
      !isFiltered? (<TaskList tasksData={tasksData} deleteThis={deleteThis} />)
      : (<TaskList tasksData={filteredData} deleteThis={deleteThis} />)
      }
    </div>
  );
}

export default App;
