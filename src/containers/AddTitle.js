import React from 'react'
import { connect } from 'react-redux'
import { addTitle } from '../actions'

const AddTitle = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTitle(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Title
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTitle)
