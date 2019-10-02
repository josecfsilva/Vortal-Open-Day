const titles = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TITLE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TITLE':
      return state.map(title =>
        (title.id === action.id)
          ? {...title, completed: !title.completed}
          : title
      )
    default:
      return state
  }
}

export default titles
