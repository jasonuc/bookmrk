import { Note } from "@/types/note.type";

export default function NoteDisplay({ content, createdAt }: Note) {
  return (
    <div className="group relative px-4 bg-white w-full rounded-md shadow-sm group-hover:shadow-md transition ease-in-out duration-300">
        <small className="absolute right-3 top-2 text-xs p-1 group-hover:shadow-sm rounded-sm">{ (new Date(createdAt)).toLocaleDateString() }</small>
        <p className="py-7">{ content }</p>
    </div>
  )
}