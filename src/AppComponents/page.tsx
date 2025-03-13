import "./App.css";
import IntroTab from "../Tabs/IntroTab";
import ProjectsTab from "../Tabs/ProjectsTab";
import TeachingTab from "../Tabs/TeachingTab";
import PublicationsTab from "../Tabs/PublicationsTab";
import HobbiesTab from "../Tabs/HobbiesTab";

function Page() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="main_nav">
          <ul>
            <li className="main_nav_item">Education</li>
            <li className="main_nav_item">Projects</li>
            <li className="main_nav_item">Teaching</li>
          </ul>
        </nav>
        <IntroTab></IntroTab>
        <ProjectsTab></ProjectsTab>
        <TeachingTab></TeachingTab>
        <HobbiesTab></HobbiesTab>
        <PublicationsTab></PublicationsTab>
      </header>
    </div>
  );
}

export default Page;
