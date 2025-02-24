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
