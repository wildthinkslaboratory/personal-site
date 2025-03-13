import ResumeItem from "./ResumeItem";
import { ResumeItemProps } from "./ResumeItem";

type ResumeItemListProps = {
  items: ResumeItemProps[];
};

// type ResumeItemListProps = {
//   items: {
//     path: string;
//     title1: string;
//     title2: string;
//     summary: string;
//     start_date: string;
//     end_date: string;
//     image: string;
//   }[];
// };

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
