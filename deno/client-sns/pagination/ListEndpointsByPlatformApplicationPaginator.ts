
import { SNS } from "../SNS.ts";
import { SNSClient } from "../SNSClient.ts";
import {
  ListEndpointsByPlatformApplicationCommand,
  ListEndpointsByPlatformApplicationCommandInput,
  ListEndpointsByPlatformApplicationCommandOutput,
} from "../commands/ListEndpointsByPlatformApplicationCommand.ts";
import { SNSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SNSClient,
  input: ListEndpointsByPlatformApplicationCommandInput,
  ...args: any
): Promise<ListEndpointsByPlatformApplicationCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEndpointsByPlatformApplicationCommand(input, ...args));
};
const makePagedRequest = async (
  client: SNS,
  input: ListEndpointsByPlatformApplicationCommandInput,
  ...args: any
): Promise<ListEndpointsByPlatformApplicationCommandOutput> => {
  // @ts-ignore
  return await client.listEndpointsByPlatformApplication(input, ...args);
};
export async function* listEndpointsByPlatformApplicationPaginate(
  config: SNSPaginationConfiguration,
  input: ListEndpointsByPlatformApplicationCommandInput,
  ...additionalArguments: any
): Paginator<ListEndpointsByPlatformApplicationCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListEndpointsByPlatformApplicationCommandOutput;
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
