import React from 'react'
import PropTypes from 'prop-types'
import Title from './Title'

import { Anchor } from 'antd';

const handleClick = (e, link) => {
  e.preventDefault();
  switch (link.title) {
    case "Task1":
      
      break;
    case "Task2":

      break;
    case "Task3":

      break;
    case "Contacts":

      break;
    default:
      break;
  }
};

const TitleList = ({ titles, toggleTitle }) => (
  <div>
    <Anchor affix={true} onClick={handleClick}>
      {titles.map(title =>
        <Title
          key={title.id}
          {...title}
          onClick={() => console.log("")}
        />
      )}
    </Anchor>
  </div>

)

TitleList.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTitle: PropTypes.func.isRequired
}

export default TitleList
