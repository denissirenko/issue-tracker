import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button>
      <Flex gap="1" align="center">
        <Pencil2Icon />
        <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
      </Flex>
    </Button>
  );
};

export default EditIssueButton;
