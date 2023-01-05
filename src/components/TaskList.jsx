import { useContext } from 'react'
import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext'

function TaskList() {
  const { tasks } = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className='text-white text-4xl text-center font-bold mt-5'>No hay tareas disponibles</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  )
}

export default TaskList
