import { useState } from "react";
import { EXAMPLES } from "../../data";
import TubButton from "./TubButton";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState()

  let contentMarkup = <p>Please, select topic</p>

  if(selectedTopic){
    contentMarkup = (<>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </>)
  }

  return(
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TubButton 
          title="Components" 
          selectedTopic={() => setSelectedTopic('components')} 
          isSelected={selectedTopic === 'components'}
        />
        <TubButton 
          title="JSX" 
          selectedTopic={() => setSelectedTopic('jsx')}
          isSelected={selectedTopic === 'jsx'}
        />
        <TubButton 
          title="Props" 
          selectedTopic={() => setSelectedTopic('props')} 
          isSelected={selectedTopic === 'props'}
        />
        <TubButton 
          title="State" 
          selectedTopic={() => setSelectedTopic('state')} 
          isSelected={selectedTopic === 'state'}
        />
      </menu>
      <div id="tab-content">
        {contentMarkup}
      </div>
    </section>
  )
}