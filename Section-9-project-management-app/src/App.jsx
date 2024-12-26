import { useState } from "react";

import ProjectsSidebar from "./assets/components/ProjectsSidebar";
import NewProject from "./assets/components/NewProject";
import NoProjectSelected from "./assets/components/NoProjectSelected";
import SelectedProject from "./assets/components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddNewTask(text) {
    setProjectsState(prevState => {
      const newTask = {
        text: text,
        id: Math.random(),
        projectID: prevState.selectedProjectId
      }

      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      }
    })
  }

  function handleDeleteNewTask(id) {
    setProjectsState(prevState => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      }
    })
  }

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

  function handleDeleteProject(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let contnet = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} onAddNewTask={handleAddNewTask} onDeleteTask={handleDeleteNewTask} tasksData={projectsState.tasks} />;

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
