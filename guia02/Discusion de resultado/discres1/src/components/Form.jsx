import React from "react";
import Todo from "./Todo"  ;
import { useState } from "react";

const Form = () => {
    const [todo, setTodo] = useState({});
    const [todos, setTodos] = useState([
        {todo: 'Manzana' , cantidad: 3},
        {todo: 'Agua', cantidad: 8}, 
        {todo: 'Tomate', cantidad: 6}
        
    ])

    const [nombre, setNombre] = useState("")
    const [cant, setCantidad] = useState(0)

const handleChange2 = e => { setCantidad(e.target.value)
    setTodo({todo: nombre, cantidad: e.target.value})}

const handleChange = e => { setNombre(e.target.value)
    setTodo({todo: e.target.value, cantidad: cant})}
const handleClick = e => {
    if(Object.keys(todo).length === 0 || todo.todo.trim() === '') {
        alert('El campo no puede estar vacio')
        return
    }
    setTodos([...todos, todo])
}

const deleteTodo = indice => {
    const newTodos = [...todos]
    newTodos.splice(indice, 1)
    setTodos(newTodos)
}

    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <label>Agregar a lista de comprar</label>< br />
            <input type="text" name="todo" onChange={handleChange}></input>
            <input type="text" name="todocant" onChange={handleChange2}></input>

            <button onClick={handleClick}>Agregar</button>
        </form>

        {todos.map((value, index) => (<Todo todo={value} key={index} index={index} deleteTodo={deleteTodo} />))}
        </>
    )
}

export default Form

