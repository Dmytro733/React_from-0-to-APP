import { useState } from "react";

import ProjectsSidebar from "./assets/components/ProjectsSidebar";
import NewProject from "./assets/components/NewProject";
import NoProjectSelected from "./assets/components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectActionId: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectActionId: 'create'
      }
    })
  }

  function handleAddProject(projectData){
    const newProject = {
      ...projectData,
      id: Math.random(),
    }
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectActionId: undefined,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  let contnet;

  if(projectsState.selectedProjectActionId === undefined){
    contnet = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }else if(projectsState.selectedProjectActionId === 'create'){
    contnet = <NewProject onAdd={handleAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects}
      />
      {contnet}
    </main>
  );
}

export default App;
