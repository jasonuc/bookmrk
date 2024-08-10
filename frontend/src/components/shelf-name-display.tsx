import { Shelf } from "@/types/shelf.type"

interface ShelfNameDisplayProps {
    shelf: Shelf;
}

export default function ShelfNameDisplay({ shelf }: ShelfNameDisplayProps) {

  const { name } = shelf;

  return (
    <p className="whitespace-nowrap w-10 md:w-fit overflow-hidden overflow-ellipsis">
      {name}
    </p>
  )
}