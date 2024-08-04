"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Book, Status } from "@/types/book.type";
import { Rating } from '@smastrom/react-rating'
import FormattedStatus from "@/components/formatted-status";
import TableHeader from "./table-header";
import ActionButton from "./action-button";

export const booksColumns: ColumnDef<Book>[] = [
  {
    accessorKey: "title",
    header: () => <TableHeader header="Title" />,
  },
  {
    accessorKey: "status",
    header: () => <TableHeader header="Status" />,
    cell: ({ row }) => {
      const status: Status = row.getValue("status");
      return <FormattedStatus status={status} />
    }
  },
  {
    accessorKey: "rating",
    header: () => <TableHeader header="Rating" />,
    cell: ({ row }) => {
      const rating = parseInt(row.getValue("rating"));
      return (<Rating
        className="max-w-[80px]"
        value={rating}
        readOnly />)
    }
  },
  {
    accessorKey: "lastUpdated",
    header: () => <TableHeader header="Last Updated" />,
    cell: ({ row }) => {
      const lastUpdated = new Date(row.getValue("lastUpdated")).toDateString();

      return lastUpdated;
    }
  },
  {
    accessorKey: "action",
    header: () => <TableHeader header="" />,
    cell: ({ row }) => {
      const book = row.original;

      return (
        <ActionButton book={book} />
      )
    }
  }
]
