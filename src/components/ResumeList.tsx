import { Link } from "react-router-dom";

type ResumeItemProps = {
  path: string;
  title1: string;
  title2: string;
  summary: string;
  start_date: string;
  end_date: string;
  image: string;
};

function ResumeItem({ path, title1, title2, summary, image }: ResumeItemProps) {
  return (
    <Link to={path}>
      <div className="resume-item">
        <div className="resume-item-image-holder">
          <img src={image} />
        </div>
        <div className="resume-item-data">
          <h4>{title1}</h4>
          <h5>{title2}</h5>
          <p>{summary}</p>
        </div>
      </div>
    </Link>
  );
}

type ResumeItemListProps = {
  items: ResumeItemProps[];
};

export default function ResumeList({ items }: ResumeItemListProps) {
  return (
    <ul className="resume-item-list">
      {items.map((item, index) => (
        <li key={index}>
          <ResumeItem {...item} />
        </li>
      ))}
    </ul>
  );
}
