
import { GuardDuty } from "../GuardDuty.ts";
import { GuardDutyClient } from "../GuardDutyClient.ts";
import {
  ListPublishingDestinationsCommand,
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput,
} from "../commands/ListPublishingDestinationsCommand.ts";
import { GuardDutyPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: ListPublishingDestinationsCommandInput,
  ...args: any
): Promise<ListPublishingDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPublishingDestinationsCommand(input, ...args));
};
const makePagedRequest = async (
  client: GuardDuty,
  input: ListPublishingDestinationsCommandInput,
  ...args: any
): Promise<ListPublishingDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.listPublishingDestinations(input, ...args);
};
export async function* listPublishingDestinationsPaginate(
  config: GuardDutyPaginationConfiguration,
  input: ListPublishingDestinationsCommandInput,
  ...additionalArguments: any
): Paginator<ListPublishingDestinationsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPublishingDestinationsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GuardDuty) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GuardDutyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GuardDuty | GuardDutyClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
