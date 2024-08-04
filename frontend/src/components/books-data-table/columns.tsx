"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Book, Status } from "@/types/book.type";

export const booksColumns: ColumnDef<Book>[] = [
  {
    accessorKey: "title",
    header: "Title"
  },
  {
    accessorKey: "status",
    header: "Status"
  },
  {
    accessorKey: "rating",
    header: "Rating"
  },
  {
    accessorKey: "lastUpdated",
    header: "Last Updated"
  }
]
