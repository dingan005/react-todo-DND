import { useState } from 'react'
import CreateTask from './Components/CreateTask'
import ListTask from './Components/ListTask'
import { useEffect } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Toaster } from 'react-hot-toast';

function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('tasks')) || [])
  }, [])
  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster toastOptions={{
        duration: 3000,
      }} />
      <div className='w-screen -h-screen flex flex-col items-center pt-3 gap-16 mt-12'>
        <div>
          <h1 className='text-4xl text-center font-bold text-slate-700'>Task Manager</h1>
          <p className='text-slate-500'>Drag and drop tasks to change their status</p>
        </div>
        <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTask tasks={tasks} setTasks={setTasks} />
      </div>
    
    </DndProvider>
  )
}

export default App
