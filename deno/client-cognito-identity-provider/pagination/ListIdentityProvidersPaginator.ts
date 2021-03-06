
import { CognitoIdentityProvider } from "../CognitoIdentityProvider.ts";
import { CognitoIdentityProviderClient } from "../CognitoIdentityProviderClient.ts";
import {
  ListIdentityProvidersCommand,
  ListIdentityProvidersCommandInput,
  ListIdentityProvidersCommandOutput,
} from "../commands/ListIdentityProvidersCommand.ts";
import { CognitoIdentityProviderPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CognitoIdentityProviderClient,
  input: ListIdentityProvidersCommandInput,
  ...args: any
): Promise<ListIdentityProvidersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIdentityProvidersCommand(input, ...args));
};
const makePagedRequest = async (
  client: CognitoIdentityProvider,
  input: ListIdentityProvidersCommandInput,
  ...args: any
): Promise<ListIdentityProvidersCommandOutput> => {
  // @ts-ignore
  return await client.listIdentityProviders(input, ...args);
};
export async function* listIdentityProvidersPaginate(
  config: CognitoIdentityProviderPaginationConfiguration,
  input: ListIdentityProvidersCommandInput,
  ...additionalArguments: any
): Paginator<ListIdentityProvidersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListIdentityProvidersCommandOutput;
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
