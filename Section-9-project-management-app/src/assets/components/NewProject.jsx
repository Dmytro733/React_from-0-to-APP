import { useRef } from "react";

import Input from "./Input";
import Modal from "./ModalError";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modal = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDate.trim() === ''){
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDate
    })
  }

  return <>
    <Modal 
      ref={modal}
      buttonCaption='Close'
    >
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
      <p className="text-stone-700 mb-4">Oops... Looks like you forgot to enter a value</p>
      <p className="text-stone-700 mb-4">Please make sure you provide a valid value for every input field</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button 
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >Cancel
          </button>
        </li>
        <li>
          <button 
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} type='text' label='Title' />
        <Input ref={description} label='Description' isTextarea />
        <Input ref={date}  type='date' label='Due Date' />
      </div>
    </div>
  </> 
}