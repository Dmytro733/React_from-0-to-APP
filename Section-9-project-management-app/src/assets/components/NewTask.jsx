import { useState } from "react"

export default function NewTask({ onAdd }) {
  const [enteredInput, setEnteredInput] = useState('');

  function handleChangeInput(event) {
    setEnteredInput(event.target.value);
  }

  function handleAddTask() {
    if(enteredInput.trim() === '') return;
    setEnteredInput('');
    onAdd(enteredInput);
  }

  return (
    <div className="flex items-center gap-4 relative">
      <input 
        type="text" 
        className="w-full px-4 py-2 pr-24 rounded-md bg-stone-200" 
        onChange={handleChangeInput} 
        value={enteredInput}
      />
      <button 
        className="text-stone-700 hover:text-stone-950 absolute right-4 top-1/2 -translate-y-1/2"
        onClick={handleAddTask}
      >
        Add Task
      </button>
    </div>
  )
}