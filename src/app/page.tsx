import MainLayout from "@/components/layout";
import List from '@/components/listNotes';

export default function Home() {
  const notes = [
    {
      "_id": "66d02c103218376e70ee3ae1",
      "title": "damilola",
      "content": "dkvdjbcjdbvjdbvjdbvjdbv",
      "createdAt": "2024-08-29T08:06:40.057Z",
      "isDeleted": false,
    },
    {
      "_id": "66d0319081047b4c87a3992c",
      "title": "damilola",
      "content": "dkvdjbcjdbvjdbvjdbvjdbv",
      "createdAt": "2024-08-29T08:30:08.302Z",
      "isDeleted": false,
    },
    {
      "_id": "66d038b147a70ad59c386620",
      "title": "damilola",
      "content": "dkkdsnksnvs",
      "createdAt": "2024-08-29T09:00:33.640Z",
      "isDeleted": false,
    },
    {
      "_id": "66d039a1d0354fe09cd6a5db",
      "title": "ddkfkdjfkdjfkd",
      "content": "dkkdsnsfsfsfsksnvs",
      "createdAt": "2024-08-29T09:04:33.032Z",
      "isDeleted": false,
    },
    {
      "_id": "66d042cfaf1296f4a5af91e7",
      "title": "damilola",
      "content": "added this new note",
      "createdAt": "2024-08-29T09:43:43.112Z",
      "isDeleted": false,
    },
  ]
  return (
    <MainLayout>
      <div className="text-neutral-950">Notes</div>
      <List notes={notes} />
    </MainLayout>
  );
}
