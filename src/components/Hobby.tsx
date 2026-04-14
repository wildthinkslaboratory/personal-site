import { Link } from "react-router-dom";

export type HobbyProps = {
  path: string;
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

function Hobby({ path, title, Icon }: HobbyProps) {
  return (
    <Link to={path}>
      <div className="hobby-div">
        <div className="hobby-image-holder">
          <Icon />
        </div>
        <span className="hobby-name">{title}</span>
      </div>
    </Link>
  );
}

type HobbyListProps = {
  items: HobbyProps[];
};

export default function HobbyList({ items }: HobbyListProps) {
  return (
    <ul className="hobby-list">
      {items.map((item, index) => (
        <li key={index}>
          <Hobby {...item} />
        </li>
      ))}
    </ul>
  );
}
