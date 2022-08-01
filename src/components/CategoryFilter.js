import React from "react";

function CategoryFilter({ categories, handleFilter, filter }) {

    // when the button is clicked we want to set is filter to our
    // category value, then we want our tasks to be filtered based on the 
    // selected category 

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(value => 
        <button 
          key={value} 
          type="button" 
          value={value}
          className={filter === value ? "selected" : ""}
          onClick={handleFilter}
          >
          {value}</button>)}
    </div>
  );
}

export default CategoryFilter;
