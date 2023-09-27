import React from 'react'
import HeadInputs from './components/HeadInputs'
import Todos from './components/Todos'

export default function App() {

    return (
        <div className='main_box'>
            <HeadInputs />
            <Todos />
        </div>
    )
}
