import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class TodoItem extends Component {
 
    getStyle = () => {
        if(this.props.todo.completed){
          return {
              background: '#f4f4f4',
              //padding: '10px',
              borderBottom: '1px #ccc dotted',
              textDecoration: this.props.todo.completed? 
              'line-through': 'none'
            }
        }
    }


    render() {
        const {id, title } = this.props.todo;
        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type = 'checkbox' onChange={this.props.markComplete.bind(this, id)} /> { '' }
                   {title}
                   <button style = {btnStyle} onClick = {this.props.delTodo.bind(this,id)}>X</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius:'50%',
    cursor: 'pointer',
    float: 'right'

}


TodoItem.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default TodoItem;
