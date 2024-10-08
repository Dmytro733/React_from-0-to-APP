export default function TubButton(props){
  const {title, selectedTopic, isSelected} = props;

  return(
    <li>
      <button 
        className={isSelected ? 'active' : undefined} 
        onClick={selectedTopic}
      >
        {title}
      </button>
    </li>
  )
} 