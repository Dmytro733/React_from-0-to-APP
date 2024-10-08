export default function Section({title, children, ...props}){
  return(
    <Section {...props}>
      <h2>{title}</h2>
      {children}
    </Section>
  )
}