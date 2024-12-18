import { useRef, useImperativeHandle } from "react"

export default function ResultModal({ref, result, targetTimer}) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return{
      open(){
        dialog.current.showModal();
      }
    }
  })

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The targer time was <strong>{targetTimer} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}

/** If version of React is less than 19 **/
/** Then to receive ref by props, we need to use forwardRef **/

// import {forwardRef} from 'react';

// const ResultModal = forwardRef(function ResultModal({result, targetTimer}, ref) {
//     return (
//       <dialog ref={ref} className="result-modal">
//         <h2>You {result}</h2>
//         <p>
//           The targer time was <strong>{targetTimer} seconds.</strong>
//         </p>
//         <p>
//           You stopped the timer with <strong>X seconds left.</strong>
//         </p>
//         <form action="dialog">
//           <button>Close</button>
//         </form>
//       </dialog>
//     );
//   }
// ) 

// export default ResultModal;
