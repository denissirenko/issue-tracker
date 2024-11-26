import { notFound } from "next/navigation";
import prisma from "@/prisma/client";
import IssueFormWrapper from "../../_components/IssueFormWrapper";
import { Heading } from "@radix-ui/themes";

interface Props {
  params: { id: string };
}

const EditIssuePage = async ({ params }: Props) => {
  const { id } = await params;

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(id) },
  });

  if (!issue) notFound();

  return (
    <>
      <Heading className="mb-5">Edit Issue "{issue.title}"</Heading>
      <IssueFormWrapper issue={issue} />
    </>
  );
};

export default EditIssuePage;
