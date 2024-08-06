export default function HomeLayout({ children, addBook }: { children: React.ReactNode, addBook: React.ReactNode }) {
  return (
    <>
    {children}
    
    {addBook}
    </>
  )
}