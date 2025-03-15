export type EducationItemProps = {
  advisor: string;
  thesis: string;
  department: string;
  school: string;
  degree: string;
  year: string;
};

function EducationItem({
  advisor,
  thesis,
  department,
  school,
  degree,
  year,
}: EducationItemProps) {
  return (
    <div className="resume-item">
      <div className="education-item">
        <span className="year">{year}</span>
        <div className="school-info">
          <h4>
            {degree} in {department} from {school}
          </h4>
          <p>{thesis}</p>
          <p>{advisor}</p>
        </div>
      </div>
    </div>
  );
}

type EducationListProps = {
  items: EducationItemProps[];
};

export default function EducationList({ items }: EducationListProps) {
  return (
    <ul className="resume-item-list">
      {items.map((item, index) => (
        <li key={index}>
          <EducationItem {...item} />
        </li>
      ))}
    </ul>
  );
}
