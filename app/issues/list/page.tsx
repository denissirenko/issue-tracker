import Pagination from "@/app/components/Pagination";
import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import { Flex, Heading } from "@radix-ui/themes";
import IssueActions from "./IssueActions";
import IssueTable, { IssueQuery, columnNames } from "./IssueTable";

interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const searchParamsValue = await searchParams;

  const { status, orderBy, page } = searchParamsValue;

  const statusValue =
    statuses.includes(status) && status !== "ALL" ? status : undefined;

  const where = statusValue ? { status: statusValue } : {};

  const orderByValue = columnNames.includes(orderBy)
    ? { [orderBy]: "asc" }
    : undefined;

  const pageNumber = parseInt(page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy: orderByValue,
    skip: (pageNumber - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({ where });

  return (
    <Flex direction="column" gap="3">
      <Heading className="mb-5">Issues</Heading>
      <IssueActions />

      <IssueTable searchParams={searchParamsValue} issues={issues} />

      <Pagination
        pageSize={pageSize}
        currentPage={pageNumber}
        itemCount={issueCount}
      />
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
