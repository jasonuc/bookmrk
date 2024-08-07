export default function HomeLayout({ children, addBook, addNote }: { children: React.ReactNode; addBook: React.ReactNode; addNote: React.ReactNode }) {
  return (
    <>
    {children}
    
    {addBook}
    
    {addNote}
    </>
  )
}