
import { SNS } from "../SNS.ts";
import { SNSClient } from "../SNSClient.ts";
import { ListTopicsCommand, ListTopicsCommandInput, ListTopicsCommandOutput } from "../commands/ListTopicsCommand.ts";
import { SNSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SNSClient,
  input: ListTopicsCommandInput,
  ...args: any
): Promise<ListTopicsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTopicsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SNS,
  input: ListTopicsCommandInput,
  ...args: any
): Promise<ListTopicsCommandOutput> => {
  // @ts-ignore
  return await client.listTopics(input, ...args);
};
export async function* listTopicsPaginate(
  config: SNSPaginationConfiguration,
  input: ListTopicsCommandInput,
  ...additionalArguments: any
): Paginator<ListTopicsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTopicsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    if (config.client instanceof SNS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SNSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SNS | SNSClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
