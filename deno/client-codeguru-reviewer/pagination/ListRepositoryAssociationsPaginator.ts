
import { CodeGuruReviewer } from "../CodeGuruReviewer.ts";
import { CodeGuruReviewerClient } from "../CodeGuruReviewerClient.ts";
import {
  ListRepositoryAssociationsCommand,
  ListRepositoryAssociationsCommandInput,
  ListRepositoryAssociationsCommandOutput,
} from "../commands/ListRepositoryAssociationsCommand.ts";
import { CodeGuruReviewerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CodeGuruReviewerClient,
  input: ListRepositoryAssociationsCommandInput,
  ...args: any
): Promise<ListRepositoryAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRepositoryAssociationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodeGuruReviewer,
  input: ListRepositoryAssociationsCommandInput,
  ...args: any
): Promise<ListRepositoryAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.listRepositoryAssociations(input, ...args);
};
export async function* listRepositoryAssociationsPaginate(
  config: CodeGuruReviewerPaginationConfiguration,
  input: ListRepositoryAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListRepositoryAssociationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListRepositoryAssociationsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CodeGuruReviewer) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodeGuruReviewerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeGuruReviewer | CodeGuruReviewerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
