interface ManageShelvesProps {
    children: React.ReactNode;
    addShelf: React.ReactNode;
}

export default function ManageShelvesLayout({ children, addShelf }: ManageShelvesProps) {
  return (
    <>
    {children}

    {addShelf}
    </>
  )
}