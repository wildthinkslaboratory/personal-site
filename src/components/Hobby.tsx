import { Link } from "react-router-dom";

export type HobbyProps = {
  path: string;
  title: string;
  image: string;
};

function Hobby({ path, title, image }: HobbyProps) {
  return (
    <Link to={path}>
      <div className="hobby-div">
        <div className="hobby-image-holder">
          <img src={image} />
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
