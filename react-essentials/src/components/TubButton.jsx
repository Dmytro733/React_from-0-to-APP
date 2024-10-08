import { Fragment } from "react";

export default function TubButton({title, isSelected, ...props}){

  return(
    // <>
    //   <button 
    //     className={isSelected ? 'active' : undefined} 
    //     onClick={selectedTopic}
    //   >
    //     {title}
    //   </button>
    // </>

    <Fragment>
      <button 
        className={isSelected ? 'active' : undefined} 
        {...props}
      >
        {title}
      </button>
    </Fragment>
  )
} 