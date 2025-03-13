import { Link } from "react-router-dom";

export type ResumeItemProps = {
  id: number;
  path: string;
  title1: string;
  title2: string;
  summary: string;
  start_date: string;
  end_date: string;
  image: string;
};

export default function ResumeItem({
  id,
  path,
  title1,
  title2,
  summary,
  start_date,
  end_date,
  image,
}: ResumeItemProps) {
  return (
    <Link to={path}>
      <div className="resume-item">
        <div className="resume-item-image-holder">
          <img src={image} />
        </div>
        <div className="resume-item-data">
          <h3>{title1}</h3>
          <p>{summary}</p>
        </div>
      </div>
    </Link>
  );
}
