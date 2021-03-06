
import { CognitoIdentityProvider } from "../CognitoIdentityProvider.ts";
import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient.ts";
import {
  AdminListUserAuthEventsCommand,
  AdminListUserAuthEventsCommandInput,
  AdminListUserAuthEventsCommandOutput,
} from "../commands/AdminListUserAuthEventsCommand.ts";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CognitoIdentityProviderClient,
  input: AdminListUserAuthEventsCommandInput,
  ...args: any
): Promise<AdminListUserAuthEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new AdminListUserAuthEventsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CognitoIdentityProvider,
  input: AdminListUserAuthEventsCommandInput,
  ...args: any
): Promise<AdminListUserAuthEventsCommandOutput> => {
  // @ts-ignore
  return await client.adminListUserAuthEvents(input, ...args);
};
export async function* adminListUserAuthEventsPaginate(
  config: CognitoIdentityProviderPaginationConfiguration,
  input: AdminListUserAuthEventsCommandInput,
  ...additionalArguments: any
): Paginator<AdminListUserAuthEventsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: AdminListUserAuthEventsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CognitoIdentityProvider) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CognitoIdentityProviderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CognitoIdentityProvider | CognitoIdentityProviderClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
