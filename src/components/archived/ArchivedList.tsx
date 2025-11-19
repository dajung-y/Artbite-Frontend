import type { ArchivedCotent } from "../../types/archived";
import ArchivedItem from "./ArchivedItem";

interface ArchivedListProps {
  notes: ArchivedCotent[];
}

export default function ArchivedList({notes} : ArchivedListProps) {
  return (
    <div className="flex flex-col">
      {notes.map((item) => (
        <ArchivedItem key={item.id} data={item} />
      ))}
    </div>
  )
}
