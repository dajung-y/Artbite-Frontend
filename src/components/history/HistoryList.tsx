import type { HistoryItems } from "../../types/history"
import HistoryItem from "./HistoryItem";

interface HistoryListProps {
  notes: HistoryItems[];
}

export default function HistoryList({notes} : HistoryListProps) {
  return (
    <div className="flex flex-col">
      {notes.map((item) => (
        <HistoryItem key={item.id} data={item} />
      ))}
    </div>
  )
}
