import NewTask from "./NewTask"

export default function Tasks({ onAddNewTask, onDeleteTask, tasksData }) {
  return (
    <section className="flex flex-col gap-4 p-2">
      <h2 className="text-2xl font-bold text-stone-700 text-center">Tasks</h2>
      <NewTask onAdd={onAddNewTask} />
      {tasksData.length === 0 && <p className="text-stone-800">This project does not have any tasks yet.</p>}
      {tasksData.length > 0 
      &&  <ul className="flex flex-col gap-2 p-3 bg-stone-200 rounded-md">
        {tasksData.map((task) => (
          <li 
            key={task.id} 
            className="px-4 py-2 rounded-sm bg-stone-300 hover:bg-stone-400 flex justify-between items-center"
          >
            <p className="text-stone-600">{task.text}</p>
            <button 
              className="text-stone-600 hover:text-red-500"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>}
    </section>
  )
}