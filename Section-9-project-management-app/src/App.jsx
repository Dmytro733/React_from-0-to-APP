import { useState } from "react";

import ProjectsSidebar from "./assets/components/ProjectsSidebar";
import NewProject from "./assets/components/NewProject";
import NoProjectSelected from "./assets/components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: 'create'
      }
    })
  }

  let contnet;

  if(projectsState.selectedProjectId === undefined){
    contnet = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }else if(projectsState.selectedProjectId === 'create'){
    contnet = <NewProject />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {contnet}
    </main>
  );
}

export default App;
