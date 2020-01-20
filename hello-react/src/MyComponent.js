import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      내이름은 {name}, children은 {children}, favorite {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름'
};

// eslint-disable-next-line react/no-typos
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
