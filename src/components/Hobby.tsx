import { Link } from "react-router-dom";

export type HobbyProps = {
  id: number;
  path: string;
  title: string;
  image: string;
};

function Hobby({ path, image }: HobbyProps) {
  return (
    <Link to={path}>
      <div className="hobby-image-holder">
        <img src={image} />
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
      {items.map((item) => (
        <li key={item.id}>
          <Hobby {...item} />
        </li>
      ))}
    </ul>
  );
}
