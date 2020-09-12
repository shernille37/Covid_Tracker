import React from 'react';
import PropTypes from 'prop-types';

const SubjectItems = ({ title, value, icon }) => {
  return (
    <div>
      <h1>{title}</h1>
      <i className={icon} />
      <p>{value}</p>
    </div>
  );
};

SubjectItems.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SubjectItems;
