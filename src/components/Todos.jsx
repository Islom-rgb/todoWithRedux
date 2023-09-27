import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { todoActions } from '../store/todo-slice';

export default function Todos() {
    const todos = useSelector(state => state.todo.todosList)
    const [show, setShow] = useState(NaN)
    const dispatch = useDispatch();
    const removeTodo = (id) => {
        dispatch(todoActions.removeTodo({ id }))
    }
    const changeDone = (id) => {
        dispatch(todoActions.changeDone({ id }))
    }
    return (
        <div className='todo_container'>
            {
                todos.map(item => {
                    return (
                        <div key={item.id}>
                            <div className={`todo_one ${item.isDone ? 'done' : ''}`}>
                                <p >{item.title}</p>
                                {show === item.id ?
                                    <button onClick={() => setShow()} >Show less</button>
                                    :
                                    <button onClick={() => setShow(item.id)} >Show more</button>
                                }
                                <button onClick={() => removeTodo(item.id)} >Remove</button>
                                <button onClick={() => changeDone(item.id)} >{item.isDone ? 'done' : 'not finished'}</button>
                            </div>
                            {show === item.id &&
                                <div className='todo_two'>
                                    <p >{item.content}</p>
                                </div>}
                        </div>
                    )
                })
            }
        </div>
    )
}
