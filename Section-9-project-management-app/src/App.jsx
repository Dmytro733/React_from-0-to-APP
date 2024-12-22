import ProjectsSidebar from "./assets/components/ProjectsSidebar";
import NewProject from "./assets/components/NewProject";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}

export default App;
