import { Heading } from "@radix-ui/themes";
import Pagination from "./components/Pagination";

const Home = async ({ searchParams }: { searchParams: { page: string } }) => {
  const { page } = await searchParams;

  const currentPage = Number.isNaN(parseInt(page)) ? 1 : parseInt(page);

  return (
    <>
      <Heading>Home</Heading>
      <Pagination itemCount={100} pageSize={10} currentPage={currentPage} />
    </>
  );
};

export default Home;
