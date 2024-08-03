interface BooksDataTableInterface {
    booksData: Book[];
}

export default function BooksDataTable({ booksData }: BooksDataTableInterface) {
    return (
        <div>
            <p>Data Table Goes Here</p>
        </div>
    )
}