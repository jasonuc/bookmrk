import { Book } from "./book.type";

export enum Role {
    USER="USER",
    ADMIN="ADMIN",
    OWNER="OWNER"
}

export type User = {
    id: string;
    username: string;
}