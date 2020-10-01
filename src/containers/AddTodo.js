import React from 'react'
import { connect } from 'react-redux'
import { addTodo,deleteAllTodo } from '../actions'
import './AddTodo.scss'


import { Button } from 'carbon-components-react';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <Button kind='primary' size='default' type="submit">
          Add Todo
        </Button>
        <Button kind='secondary' size='default' onClick={ e => {
          dispatch(deleteAllTodo())
      	}}>
          Delete All Todo
        </Button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
