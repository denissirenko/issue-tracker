import { Heading } from "@radix-ui/themes";
import LatestIssues from "./LatestIssues";

const Home = async ({ searchParams }: { searchParams: { page: string } }) => {
  const { page } = await searchParams;

  const currentPage = Number.isNaN(parseInt(page)) ? 1 : parseInt(page);

  return (
    <>
      <Heading mb="4">Home</Heading>
      <LatestIssues />
    </>
  );
};

export default Home;
