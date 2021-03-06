import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SubjectItems = ({ title, value, icon }) => {
  const [initialValue, setInitialValue] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const target = value;
      const count = initialValue;

      if (count < target) {
        setTimeout(() => {
          setInitialValue((prev) => prev + 500);
        }, 1);
      } else {
        setInitialValue(target);
      }
    };

    updateCount();
  }, [initialValue, value]);

  return (
    <div>
      <h1>{title}</h1>
      <i className={icon} />
      <p>{initialValue.toLocaleString('en')}</p>
    </div>
  );
};

SubjectItems.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SubjectItems;
