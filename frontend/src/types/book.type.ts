import { Shelf } from "./shelf.type";
import { User } from "./user.type";

export enum Status {
    READING="READING",
    TBR="TBR",
    DNF="DNF",
    FINISHED="FINISHED",
};

export type Book = {
    id: string;
    title: string;
    imageUrl: string;
    rating: number;
    status: Status;
    userId: string;
    shelfId: string;
    lastUpdated: Date;
    dateAdded: Date;
    user: User;
    shelf: Shelf;
}