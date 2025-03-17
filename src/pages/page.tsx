import "../App.css";
import "../components/resume.css";
import ResumeList from "../components/ResumeList";
import HobbyList from "../components/Hobby";
import Socials from "../components/Socials";
import EducationList from "../components/EducationList";

import { PROJECT_ITEMS } from "../components/resume-data";
import { TEACHING_ITEMS } from "../components/resume-data";
import { HOBBY_ITEMS } from "../components/resume-data";
import { EDUCATION_ITEMS } from "../components/resume-data";

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
        </div>
      </div>
      <div className="main-vertical-scroller">
        <article className="resume-item-page">
          <h2>Projects</h2>
          <ResumeList items={PROJECT_ITEMS} />
        </article>
        <article className="resume-item-page">
          <h2>Teaching</h2>
          <ResumeList items={TEACHING_ITEMS} />
        </article>
        <article className="resume-item-page">
          <h2>Education</h2>
          <EducationList items={EDUCATION_ITEMS} />
        </article>
        <article className="resume-item-page">
          <h2>Hobbies</h2>
          <div className="hobby-list-holder">
            <HobbyList items={HOBBY_ITEMS} />
          </div>
        </article>
        <div className="footer"></div>
      </div>
    </main>
  );
}

export default Page;
