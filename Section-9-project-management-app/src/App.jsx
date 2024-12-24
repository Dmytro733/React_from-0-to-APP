import { useState } from "react";

import ProjectsSidebar from "./assets/components/ProjectsSidebar";
import NewProject from "./assets/components/NewProject";
import NoProjectSelected from "./assets/components/NoProjectSelected";
import SelectedProject from "./assets/components/SelectedProject";

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

  function handleCancelAddProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined
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
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  function handleSelectedProject(id){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let contnet = <SelectedProject project={selectedProject} />;

  if(projectsState.selectedProjectId === undefined){
    contnet = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }else if(projectsState.selectedProjectId === 'create'){
    contnet = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        onSelectedProject={handleSelectedProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {contnet}
    </main>
  );
}

export default App;
