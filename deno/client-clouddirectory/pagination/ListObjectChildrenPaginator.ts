
import { CloudDirectory } from "../CloudDirectory.ts";
import { CloudDirectoryClient } from "../CloudDirectoryClient.ts";
import {
  ListObjectChildrenCommand,
  ListObjectChildrenCommandInput,
  ListObjectChildrenCommandOutput,
} from "../commands/ListObjectChildrenCommand.ts";
import { CloudDirectoryPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudDirectoryClient,
  input: ListObjectChildrenCommandInput,
  ...args: any
): Promise<ListObjectChildrenCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListObjectChildrenCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudDirectory,
  input: ListObjectChildrenCommandInput,
  ...args: any
): Promise<ListObjectChildrenCommandOutput> => {
  // @ts-ignore
  return await client.listObjectChildren(input, ...args);
};
export async function* listObjectChildrenPaginate(
  config: CloudDirectoryPaginationConfiguration,
  input: ListObjectChildrenCommandInput,
  ...additionalArguments: any
): Paginator<ListObjectChildrenCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListObjectChildrenCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CloudDirectory) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudDirectoryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudDirectory | CloudDirectoryClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
