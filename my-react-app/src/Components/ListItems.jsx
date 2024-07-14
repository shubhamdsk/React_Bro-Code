import React from "react";
import PropTypes from "prop-types";

const ListItems = (props) => {
  const items = props.items;
  const category = props.category;
  return (
    <>
      <h2 className="list-category">{category}</h2>
      <ol className="list-items">
        {items.map((item) => (
          <li key={item.id}>
            {item.name}: &nbsp; {item.calories}
          </li>
        ))}
      </ol>
    </>
  );
};

ListItems.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
export default ListItems;
