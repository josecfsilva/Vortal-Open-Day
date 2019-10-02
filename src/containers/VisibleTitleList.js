import { connect } from 'react-redux'
import { toggleTitle } from '../actions'
import TitleList from '../components/TitleList'
import { VisibilityFilters } from '../actions'

const getVisibleTitles = (titles, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return titles
    case VisibilityFilters.SHOW_PAGE2:
      return titles.filter(t => t.text !== "Page2")
    case VisibilityFilters.SHOW_PAGE3:
      return titles.filter(t => t.text !== "Page3")
      case VisibilityFilters.SHOW_CONTACTS:
          return titles.filter(t => t.text !== "Contacts")
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  titles: getVisibleTitles(state.titles, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTitle: id => dispatch(toggleTitle(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleList)
