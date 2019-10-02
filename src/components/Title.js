import React from 'react';
import PropTypes from 'prop-types';

import { Anchor } from 'antd';

const { Link } = Anchor;

const Title = ({ onClick, completed, text }) => (
  <Link href={"#" + text} title={text} />

  /*
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li> */
)

Title.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Title
