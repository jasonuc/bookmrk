export default function HomeLayout({ children, addBook, addNote, editBook }: { children: React.ReactNode; addBook: React.ReactNode; addNote: React.ReactNode; editBook: React.ReactNode }) {
  return (
    <>
    {children}
    
    {addBook}
    
    {addNote}
    
    {editBook}
    </>
  )
}