import "../App.css";
import "../components/resume/resume.css";
import ResumeList from "../components/resume/ResumeList";
import HobbyList from "../components/resume/Hobby";
import Socials from "../components/resume/Socials";

import { PROJECT_ITEMS } from "../components/resume/resume-data";
import { TEACHING_ITEMS } from "../components/resume/resume-data";
import { HOBBY_ITEMS } from "../components/resume/resume-data";

function Page() {
  return (
    <main className="main-page">
      <div className="main-vertical-header">
        <h1>Heidi Dixon</h1>
        <h3 className="identity">programmer, teacher, problem solver</h3>
        <p>
          I'm looking for opportunities to learn new ideas, figure things out,
          and build cool stuff.
        </p>
        <div className="lower-header-div">
          <Socials />
          <h3>Hobbies:</h3>
          <div className="hobby-list-holder">
            <HobbyList items={HOBBY_ITEMS} />
          </div>
        </div>
      </div>
      <div className="main-vertical-scroller">
        <article className="resume-item-page">
          <ResumeList items={PROJECT_ITEMS} />
        </article>
        <article className="resume-item-page">
          <ResumeList items={TEACHING_ITEMS} />
        </article>
      </div>
    </main>
  );
}

export default Page;
