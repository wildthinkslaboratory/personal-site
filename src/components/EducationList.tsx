export type EducationItemProps = {
  advisor: string;
  thesis: string;
  thesis_link: string;
  department: string;
  school: string;
  school_link: string;
  degree: string;
  year: string;
};

function EducationItem({
  thesis,
  thesis_link,
  department,
  school,
  school_link,
  degree,
  year,
}: EducationItemProps) {
  return (
    <div className="resume-item">
      <div className="education-item">
        <span className="year">{year}</span>
        <div className="school-info">
          <p>
            <span className="degree">{degree}</span> in{" "}
            <span className="department">{department}</span> from{" "}
            <a href={school_link} target="_blank" className="external-link">
              {school}
            </a>
          </p>
          {thesis.length > 0 && (
            <p>
              Thesis:{" "}
              <a href={thesis_link} target="_blank" className="external-link">
                {thesis}
              </a>
            </p>
          )}
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
