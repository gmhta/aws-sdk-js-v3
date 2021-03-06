
import { Connect } from "../Connect.ts";
import { ConnectClient } from "../ConnectClient.ts";
import {
  ListRoutingProfilesCommand,
  ListRoutingProfilesCommandInput,
  ListRoutingProfilesCommandOutput,
} from "../commands/ListRoutingProfilesCommand.ts";
import { ConnectPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListRoutingProfilesCommandInput,
  ...args: any
): Promise<ListRoutingProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRoutingProfilesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Connect,
  input: ListRoutingProfilesCommandInput,
  ...args: any
): Promise<ListRoutingProfilesCommandOutput> => {
  // @ts-ignore
  return await client.listRoutingProfiles(input, ...args);
};
export async function* listRoutingProfilesPaginate(
  config: ConnectPaginationConfiguration,
  input: ListRoutingProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListRoutingProfilesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListRoutingProfilesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
