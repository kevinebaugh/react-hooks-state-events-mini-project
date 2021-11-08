import React from "react";

function CategoryFilter({categories, filterCategories}) {
  function handleCategoryClick(event) {
    const button = event.target
    const filterBy = event.target.innerText
    const buttonSiblings = Array.from(event.target.parentNode.children).filter( (sibling) => sibling.innerText !== filterBy )


    filterCategories(filterBy)
    button.className = "selected"
    buttonSiblings.map( button => button.className = "")
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map( (category, index) => {
        return <button key={index} onClick={handleCategoryClick}>{category}</button>
      } )}
    </div>
  );
}

export default CategoryFilter;
