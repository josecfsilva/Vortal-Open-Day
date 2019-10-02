import React from 'react'
import PropTypes from 'prop-types'
import Title from './Title'

import { Anchor } from 'antd';

const TitleList = ({ titles, toggleTitle }) => (
  <div>
    <Anchor affix={true}>
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
