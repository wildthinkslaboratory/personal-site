import HomeButton from "../components/HomeButton";
import { Publications } from "./actual-resume";

function PublicationsPage() {
  return (
    <div className="publication-page-wrapper">
      <div className="publications-page">
        <HomeButton />
        <Publications />
      </div>
    </div>
  );
}

export default PublicationsPage;
