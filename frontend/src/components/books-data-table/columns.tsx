"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Book, Status } from "@/types/book.type";
import { Rating } from '@smastrom/react-rating'
import FormattedStatus from "@/components/formatted-status";
import TableHeader from "./table-header";
import ActionButton from "./action-button";
import { format } from "date-fns";
import { Shelf } from "@/types/shelf.type";
import ShelfNameDisplay from "../shelf-name-display";

export const booksColumns: ColumnDef<Book>[] = [
  {
    accessorKey: "title",
    header: () => <TableHeader header="Title" />,
    cell: ({ row }) => {
      const title: string = row.getValue("title");

      return (<p className="whitespace-nowrap w-10 md:w-fit md:max-w-[25rem] overflow-scroll [&::-webkit-scrollbar]:hidden">
        {title}
      </p>)
    }
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
    accessorKey: "shelf",
    header: () => <TableHeader header="Shelf" />,
    cell: ({ row }) => {
      const shelf: Shelf = row.getValue('shelf');

      return (<ShelfNameDisplay shelf={shelf} />)
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
