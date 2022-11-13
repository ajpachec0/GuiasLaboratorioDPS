import React from 'react';

const Todo = ({todo, index, deleteTodo}) => {
    return (

        <>
            <div className='list'>
                <h3>{todo.todo}</h3> - <h3>{todo.cantidad}</h3> <button className='btn-delete' onClick={() => deleteTodo(index)}>x</button>
            </div>
        </>
    )
}

export default Todo