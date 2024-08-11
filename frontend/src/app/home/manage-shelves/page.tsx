import ManageShelvesButtonSection from "@/components/manage-shelves-button-section";
import ShelfDisplayCard from "@/components/shelf-display-card";
import { Shelf } from "@/types/shelf.type";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";

async function getUserShelves() {
  const { getToken, userId } = auth();

  const token = await getToken();

  const { data: shelves } = await axios.get<Shelf[]>(`${process.env.NEXT_PUBLIC_API_URL}/api/shelves/user/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

  return shelves;
}

export default async function ManageShelvesPage() {

  const userShelves = await getUserShelves();

  return (
    <div className="pb-10 px-2 md:px-5">
      <ManageShelvesButtonSection />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">

        {userShelves.map((shelf, key) => (
          <ShelfDisplayCard key={key} {...shelf} />
        ))}

      </div>
    </div>
  )
}