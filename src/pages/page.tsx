import "../App.css";
import "../components/resume/resume.css";
import ResumeList from "../components/resume/ResumeList";
import { PROJECT_ITEMS } from "../components/resume/resume-data";
import { TEACHING_ITEMS } from "../components/resume/resume-data";

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
            <article className="resume-item-page">
              <ResumeList items={PROJECT_ITEMS} />
            </article>
            <article className="resume-item-page">
              <ResumeList items={TEACHING_ITEMS} />
            </article>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Page;
