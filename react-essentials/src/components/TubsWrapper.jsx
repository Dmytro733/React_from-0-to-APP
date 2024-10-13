export default function TubsWrapper({ButtonsContainer = 'menu', buttons, contentMarkup}){
  return(
    <>
      <ButtonsContainer>
        {buttons}
      </ButtonsContainer>
      <div id="tab-content">
        {contentMarkup}
      </div>
    </>
  )
} 