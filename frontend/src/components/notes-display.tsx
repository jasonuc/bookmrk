import { Note } from "@/types/note.type";
import NoteDisplay from "./note-display";

interface NotesListDisplayProps {
    notes: Note[];
}

export default function NotesListDisplay({ notes }: NotesListDisplayProps) {
  return (
    <div className="flex flex-col gap-y-3 items-center">
        { notes.map((note) => (
            <NoteDisplay key={note.id} {...note} />
        )) }
    </div>
  )
}