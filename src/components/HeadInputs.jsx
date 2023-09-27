import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../store/todo-slice';

export default function HeadInputs() {
    const [todoTitle, setTodoTitle] = useState('')
    const [todoContent, setTodoContent] = useState('')

    const dispatch = useDispatch();
    const addTodo = (event) => {
        event.preventDefault()
        if (todoContent && todoTitle) {
            const timestamp = new Date().getTime();
            const randomNum = Math.floor(Math.random() * 10000)
            dispatch(todoActions.addTodo({
                title: todoTitle,
                content: todoContent,
                id: timestamp * randomNum
            }))
            setTodoTitle('')
            setTodoContent('')
            alert('add')
        } else alert('please fill')

    }

    return (
        <div className='head_inputs'>
            <form onSubmit={addTodo}>
                <input
                    onChange={(e) => setTodoTitle(e.target.value)}
                    value={todoTitle}
                    className='todo_input'
                    placeholder='Title of Todo'
                    type="text"
                />
                <input
                    onChange={(e) => setTodoContent(e.target.value)}
                    value={todoContent}
                    className='todo_input'
                    placeholder='What do you want to do'
                    type="text"
                />
                <button onClick={addTodo}>submit</button>
            </form>
        </div>
    )
}
