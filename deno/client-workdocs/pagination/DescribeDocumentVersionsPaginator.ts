
import { WorkDocs } from "../WorkDocs.ts";
import { WorkDocsClient } from "../WorkDocsClient.ts";
import {
  DescribeDocumentVersionsCommand,
  DescribeDocumentVersionsCommandInput,
  DescribeDocumentVersionsCommandOutput,
} from "../commands/DescribeDocumentVersionsCommand.ts";
import { WorkDocsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: WorkDocsClient,
  input: DescribeDocumentVersionsCommandInput,
  ...args: any
): Promise<DescribeDocumentVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDocumentVersionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: WorkDocs,
  input: DescribeDocumentVersionsCommandInput,
  ...args: any
): Promise<DescribeDocumentVersionsCommandOutput> => {
  // @ts-ignore
  return await client.describeDocumentVersions(input, ...args);
};
export async function* describeDocumentVersionsPaginate(
  config: WorkDocsPaginationConfiguration,
  input: DescribeDocumentVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDocumentVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDocumentVersionsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof WorkDocs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkDocsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkDocs | WorkDocsClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
