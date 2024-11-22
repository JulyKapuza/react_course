import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });

  const addTask=(text)=>{
setProjectsState((prev) => {
  const newTask = {
    text:text,
    projectId:prev.selectedProjectId,
    id: Math.random(),
  };
  return {
    ...prev,
    tasks: [...prev.tasks, newTask],
  };
});
  }
   const deleteTask = (id) => {
     setProjectsState((prev) => {
       return {
         ...prev,
         tasks: [
           ...prev.tasks.filter((task) => task.id !== id),
         ],
       };
     });
   };

  const hideAddProject = () => {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  };
  const handleStartAddProject=()=>{
    setProjectsState((prev)=>{
      return{
        ...prev,
        selectedProjectId:null
      }
    })
  }

  const handleAddProject=(projectData)=>{
    setProjectsState((prev)=>{
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prev,

        projects: [...prev.projects, newProject],
      };
    })
   hideAddProject()
  }


  const selectProject=(id)=>{
 setProjectsState((prev) => {
   return {
     ...prev,
     selectedProjectId: id,
   };
 });
  }

  const onClickDelete =()=>{
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
         projects: [...prev.projects.filter((item)=>item.id !==prev.selectedProjectId)]
      };
    });
  }

  const selectedProjectById = projectsState.projects.find((project)=>project.id ===projectsState.selectedProjectId)
  const projectTaskByIg = projectsState.tasks.filter((el) => el.projectId === projectsState.selectedProjectId);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onClick={handleStartAddProject}
        onSelect={selectProject}
        projectList={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {projectsState.selectedProjectId === null && (
        <NewProject
          onClickCancel={hideAddProject}
          onClickSave={handleAddProject}
        />
      )}
      {projectsState.selectedProjectId === undefined && (
        <NoProjectSelected onClick={handleStartAddProject} />
      )}
      {projectsState.selectedProjectId && (
        <SelectedProject
          project={selectedProjectById}
          onClickDelete={onClickDelete}
          onAdd={addTask}
          onDelete={deleteTask}
          tasks={projectTaskByIg}
        />
      )}
    </main>
  );
}

export default App;
