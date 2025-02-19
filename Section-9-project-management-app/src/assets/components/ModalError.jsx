import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

const Modal = forwardRef(function Modal({children, buttonCaption}, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return{
      open(){
        dialog.current.showModal();
      }
    }
  })

  return createPortal(
    <dialog 
      ref={dialog}
      className='backdrop:bg-stone-900/90 rounded-md p-4 shadow-md'
    >
      {children}
      <form action="dialog" className='mt-4 text-right'>
        <Button type="submit">
          {buttonCaption}
        </Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  )
})

export default Modal