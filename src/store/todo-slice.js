import { createSlice } from '@reduxjs/toolkit'


const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todosList: [
            { isDone: false, title: ' Buy Groceries', content: 'Make a list and go grocery shopping for the week.', id: 1 },
            { isDone: false, title: 'Exercise Plan', content: 'Create a workout routine and follow it regularly.', id: 2 },
            { isDone: false, title: 'Clean House', content: 'Schedule a day to clean the entire house, including dusting, vacuuming, and mopping.', id: 3 },
            { isDone: false, title: 'Read Book', content: 'Set aside some time every day to read a book of your choice.', id: 4 },
        ],
    },
    reducers: {
        addTodo(state, action) {
            const newTodo = action.payload

            state.todosList.push(
                {
                    title: newTodo.title,
                    content: newTodo.content,
                    id: newTodo.id,
                    isDone: false
                }
            )
        },
        removeTodo(state, action) {
            state.todosList = state.todosList.filter(item => item.id !== action.payload.id)
        },
        changeDone(state, action) {
            const index = state.todosList.findIndex(item => item.id === action.payload.id);
            const items = state.todosList[index].isDone
            state.todosList[index].isDone = !items
        },

    }
})

export const todoActions = todoSlice.actions

export default todoSlice