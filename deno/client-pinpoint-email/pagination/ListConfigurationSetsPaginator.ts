
import { PinpointEmail } from "../PinpointEmail.ts";
import { PinpointEmailClient } from "../PinpointEmailClient.ts";
import {
  ListConfigurationSetsCommand,
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "../commands/ListConfigurationSetsCommand.ts";
import { PinpointEmailPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: PinpointEmailClient,
  input: ListConfigurationSetsCommandInput,
  ...args: any
): Promise<ListConfigurationSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfigurationSetsCommand(input, ...args));
};
const makePagedRequest = async (
  client: PinpointEmail,
  input: ListConfigurationSetsCommandInput,
  ...args: any
): Promise<ListConfigurationSetsCommandOutput> => {
  // @ts-ignore
  return await client.listConfigurationSets(input, ...args);
};
export async function* listConfigurationSetsPaginate(
  config: PinpointEmailPaginationConfiguration,
  input: ListConfigurationSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListConfigurationSetsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListConfigurationSetsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["PageSize"] = config.pageSize;
    if (config.client instanceof PinpointEmail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PinpointEmailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PinpointEmail | PinpointEmailClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
