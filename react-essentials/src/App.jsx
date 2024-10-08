import { useState } from "react";
import Header from "./components/Header/Header";
import ConceptComponent from "./components/CoreConcept/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "../data";
import TubButton from "./components/TubButton";



export default function App() {
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
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            {
              CORE_CONCEPTS.map((concept, index) => (
                <ConceptComponent 
                  key={index}
                  image={concept.image} 
                  title={concept.title} 
                  description={concept.description} 
                />
              ))
            }
          </ul>
        </section>
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
      </main>
    </div>
  );
}