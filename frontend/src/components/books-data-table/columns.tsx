"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Book, Status } from "@/types/book.type";
import { Rating } from '@smastrom/react-rating'
import FormattedStatus from "../formatted-status";


export const booksColumns: ColumnDef<Book>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: Status = row.getValue("status");
      return <FormattedStatus status={status} />
    }
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
    cell: ({ row }) => {
      const lastUpdated = new Date(row.getValue("lastUpdated")).toDateString();

      return lastUpdated;
    }
  }
]
