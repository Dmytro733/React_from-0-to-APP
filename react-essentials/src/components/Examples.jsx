import { useState } from "react";
import { EXAMPLES } from "../../data";
import TubButton from "./TubButton";
import Section from "./Section";

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
    <Section id="examples" title="Examples">
      <menu>
        <TubButton 
          title="Components" 
          onClick={() => setSelectedTopic('components')} 
          isSelected={selectedTopic === 'components'}
        />
        <TubButton 
          title="JSX" 
          onClick={() => setSelectedTopic('jsx')}
          isSelected={selectedTopic === 'jsx'}
        />
        <TubButton 
          title="Props" 
          onClick={() => setSelectedTopic('props')} 
          isSelected={selectedTopic === 'props'}
        />
        <TubButton 
          title="State" 
          onClick={() => setSelectedTopic('state')} 
          isSelected={selectedTopic === 'state'}
        />
      </menu>
      <div id="tab-content">
        {contentMarkup}
      </div>
    </Section>
  )
}