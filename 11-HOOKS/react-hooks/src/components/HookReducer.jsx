import { useReducer, useState } from 'react'

const HookReducer = () => {
  // 166 useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state)
  })

  // 167 useReducer com actions
  const initialTasks = [
    { id: 1, text: '2. fazer alguma coisa' },
    { id: 2, text: '1. fazer outra coisa' }
  ]

  const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        const newTask = {
          id: Math.random(),
          text: taskText,
        }
        setTaskText('')
        return [...state, newTask]
      // remode data from api

      case 'DELETE':
        return state.filter((task) => task.id !== action.id)
      // remode data from api

      default:
        return state;
    }

  }
  const [taskText, setTaskText] = useState('')
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatchTasks({ type: 'ADD' })
  }

  const removeTask = (id) => {
    dispatchTasks({ type: 'DELETE', id: id })
  }
  return (
    <div>
      {/* 166 useReducer */}
      <hr />
      <h2>166 Hook UseReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar o Número</button>

      {/* 167 useReducer com actions */}
      <hr />
      <h2>167 useReducer com actions</h2>
      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText} />
        <input type='submit' onClick={handleSubmit} />
        <h6>(double click to delete!)</h6>
      </form>
      {tasks.map((task) =>
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
      )}

    </div>
  )
}

export default HookReducer

