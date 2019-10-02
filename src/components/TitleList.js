import React from 'react'
import PropTypes from 'prop-types'
import Title from './Title'

import { Anchor } from 'antd';

const TitleList = ({ titles, toggleTitle }) => (
  /*<ul>
    {titles.map(title =>
      <Title
        key={title.id}
        {...title}
        onClick={() => toggleTitle(title.id)}
      />
    )}
  </ul>*/
  <Anchor affix={false}>
    {titles.map(title =>
      <Title
        key={title.id}
        {...title}
        onClick={() => toggleTitle(title.id)}
      />
    )}
  </Anchor>
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
