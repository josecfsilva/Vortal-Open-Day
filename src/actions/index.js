let nextTitleId = 0
export const addTitle = text => ({
  type: 'ADD_TITLE',
  id: nextTitleId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTitle = id => ({
  type: 'TOGGLE_TITLE',
  id
})

// To change to different Pages
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_PAGE2: 'SHOW_PAGE2',
  SHOW_PAGE3: 'SHOW_PAGE3',
  SHOW_CONTACTS: 'SHOW_CONTACTS'
}
