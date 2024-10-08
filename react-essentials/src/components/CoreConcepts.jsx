import Section from "./Section";
import CoreConcept from "./CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConcepts(){
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {
          CORE_CONCEPTS.map((concept, index) => (
            <CoreConcept 
              key={index}
              image={concept.image} 
              title={concept.title} 
              description={concept.description} 
            />
          ))
        }
      </ul>
    </Section>
  )
}