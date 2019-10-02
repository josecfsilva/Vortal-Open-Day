import React from 'react';
import PropTypes from 'prop-types';
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

import { Anchor } from 'antd';

const { Link } = Anchor;

const Title = ({ onClick, completed, text }) => (
  <FilterLink filter={VisibilityFilters.SHOW_CONTACTS /* APRESENTE UM ERRO 
    () => {
    if (text === "Task1") {
      text = VisibilityFilters.SHOW_ALL;
    } else if (text === "Task2") {
      text =  VisibilityFilters.SHOW_PAGE2;
    } else if (text === "Task3") {
      text =  VisibilityFilters.SHOW_PAGE3;
    } else {
      text =  VisibilityFilters.SHOW_CONTACTS;
    }
  }*/ }>
    <Link href={"#" + text} title={text} />
  </FilterLink >
)

Title.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Title
