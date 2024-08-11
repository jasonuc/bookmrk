import { Shelf } from "@/types/shelf.type"

interface ShelfNameDisplayProps {
  shelf: Shelf;
}

export default function ShelfNameDisplay({ shelf }: ShelfNameDisplayProps) {

  const { name, colour } = shelf;

  return (
    <div className="flex max-md:items-center max-md:justify-center">
      <p className="whitespace-nowrap max-md:hidden w-10 md:w-fit overflow-hidden overflow-ellipsis">
        {name}
      </p>
      <div style={{ backgroundColor: colour }} className="md:hidden border shadow-sm size-3 rounded-full" />
    </div>
  )
}