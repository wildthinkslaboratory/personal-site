import ResumeItem from "./ResumeItem";
import { ResumeItemProps } from "./ResumeItem";

type ResumeItemListProps = {
  items: ResumeItemProps[];
};

export default function ResumeList({ items }: ResumeItemListProps) {
  return (
    <ul className="resume-item-list">
      {items.map((item) => (
        <li key={item.id}>
          <ResumeItem {...item} />
        </li>
      ))}
    </ul>
  );
}
