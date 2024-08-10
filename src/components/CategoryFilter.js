import React, { useState } from "react";

function CategoryFilter({ categoriesData, filterThis }) {
  const [selectedBtn, setSelectedBtn] = useState("");

  function onSelected(evnt) {
    const currBtnName = evnt.target.name;
    setSelectedBtn(currBtnName);
    filterThis(currBtnName);
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesData.map((ctg) => {
        return (
          <button
            className={selectedBtn === ctg ? "selected" : ""}
            key={ctg}
            onClick={onSelected}
            name={ctg}
          >
            {ctg}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
