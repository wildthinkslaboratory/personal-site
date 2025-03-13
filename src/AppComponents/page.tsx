import "./App.css";
import ProjectsTab from "../Tabs/ProjectsTab";

function Page() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-page">
          <div className="main-vertical-header">
            <h1>Heidi Dixon</h1>
            <h3 className="identity">
              creative problem solver, programmer, teacher.
            </h3>
          </div>
          <div className="main-vertical-scroller">
            <ProjectsTab></ProjectsTab>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Page;
