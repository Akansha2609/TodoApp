import React from 'react'
import PropTypes from 'prop-types'
import './App.scss'

import { Button } from 'carbon-components-react';

const Todo = ({ onClick, onDeleteClick, completed, text }) => (
  <div>
    <span
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text} &nbsp;&nbsp;
    </span>
    <Button kind='danger' size='small' onClick={onDeleteClick}>delete</Button>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo