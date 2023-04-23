import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './app.css';

// Single List Item
const SingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red'}}
      onClick={()=>onClickHandler(index)}
    >
      {text}
    </li>
  );
};

SingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

// List Component
const List = ({
  items,
}) => {
  const [selectedIndex,setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
    <img src='https://www.steel-eye.com/hubfs/Blend%202019/Global/steeleye_logo_blue.svg' alt='steeleye logo'/>
    <h1>Frontend Assignment</h1>
    <ul style={{ textAlign: 'left' }}>
      {items && items.map(({text}, index) => (
        <SingleListItem
          {...{onClickHandler: handleClick, text, index, isSelected: selectedIndex === index}}
          key={index}
        />
      ))}
    </ul>
    <footer>© Arun Sharma (12001430) || All Rights Reserved</footer>
    </>
  )
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};

List.defaultProps = {
  items: null,
};

export default List;
