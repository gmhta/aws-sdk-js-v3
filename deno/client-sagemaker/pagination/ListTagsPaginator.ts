
import { SageMaker } from "../SageMaker.ts";
import { SageMakerClient } from "../SageMakerClient.ts";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand.ts";
import { SageMakerPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListTagsCommandInput,
  ...args: any
): Promise<ListTagsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTagsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListTagsCommandInput,
  ...args: any
): Promise<ListTagsCommandOutput> => {
  // @ts-ignore
  return await client.listTags(input, ...args);
};
export async function* listTagsPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListTagsCommandInput,
  ...additionalArguments: any
): Paginator<ListTagsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTagsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
