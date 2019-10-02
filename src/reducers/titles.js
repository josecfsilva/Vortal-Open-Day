const titles = (state = [
  {
    id: 1,
    text: "Task1",
    completed: false
  },
  {
    id: 2,
    text: "Task2",
    completed: false
  },
  {
    id: 3,
    text: "Task3",
    completed: false
  },
  {
    id: 4,
    text: "Contacts",
    completed: false
  }], action) => {
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
          ? { ...title, completed: !title.completed }
          : title
      )
    default:
      return state
  }
}

export default titles
