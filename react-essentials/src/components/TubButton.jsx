import { Fragment } from "react";

export default function TubButton(props){
  const {title, selectedTopic, isSelected} = props;

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
        onClick={selectedTopic}
      >
        {title}
      </button>
    </Fragment>
  )
} 