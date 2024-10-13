import { useState } from "react";
import { EXAMPLES } from "../../data";
import Section from "./Section";
import TubsWrapper from "./TubsWrapper";
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
    <Section id="examples" title="Examples">
      <TubsWrapper
        buttons={
          Object.entries(EXAMPLES).map(([key], index) => {
            return(
              <TubButton 
                key={index}
                title={EXAMPLES[key].title}
                onClick={() => setSelectedTopic(key)} 
                isSelected={selectedTopic === key}
              />
            )
          })
        }
        contentMarkup={contentMarkup}
      />
    </Section>
  )
}