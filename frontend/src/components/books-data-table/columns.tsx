"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Book, Status } from "@/types/book.type";
import { Rating } from '@smastrom/react-rating'


export const booksColumns: ColumnDef<Book>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => {
      const rating = parseInt(row.getValue("rating"));
      return (<Rating
        style={{ maxWidth: 80 }}
        value={rating}
        readOnly />)
    }
  },
  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
  }
]
