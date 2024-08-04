export type Status = "READING" | "TBR" | "DNF" | "FINISHED";

export type Book = {
    id: string;
    title: string;
    imageUrl: string;
    rating: number;
    status: Status;
    userId: string;
    lastUpdated: Date;
    dateAdded: Date;
}