import "./App.css";
import ProjectsTab from "../Tabs/ProjectsTab";
import PublicationsTab from "../Tabs/PublicationsTab";

function Page() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectsTab></ProjectsTab>
        <PublicationsTab></PublicationsTab>
      </header>
    </div>
  );
}

export default Page;
