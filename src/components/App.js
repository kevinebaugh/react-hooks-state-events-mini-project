import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [categories, setCategories] = useState(CATEGORIES)
  const [filteredCategory, setFilteredCategory] = useState(CATEGORIES)

  function filterCategories(filterBy) {
    setFilteredCategory(filterBy)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} filterCategories={filterCategories} />
      <NewTaskForm categories={categories} />
      <TaskList tasksData={TASKS} categories={categories} filteredCategory={filteredCategory} />
    </div>
  );
}

export default App;
