import { useRef, useImperativeHandle } from "react";
import { createPortal } from 'react-dom'

export default function ResultModal({ref, targetTimer, timeRemaining, onReset}) {
  const dialog = useRef();
  const userLost = timeRemaining <= 0;
  const formattedTimeRemaining = (timeRemaining / 1000).toFixed(2);
  const score = (((targetTimer * 1000) - timeRemaining) / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return{
      open(){
        dialog.current.showModal();
      }
    }
  })

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The targer time was <strong>{targetTimer} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formattedTimeRemaining} seconds left.</strong>
      </p>
      <form action="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
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
