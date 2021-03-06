
import { AlexaForBusiness } from "../AlexaForBusiness.ts";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient.ts";
import {
  ListConferenceProvidersCommand,
  ListConferenceProvidersCommandInput,
  ListConferenceProvidersCommandOutput,
} from "../commands/ListConferenceProvidersCommand.ts";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: ListConferenceProvidersCommandInput,
  ...args: any
): Promise<ListConferenceProvidersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConferenceProvidersCommand(input, ...args));
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: ListConferenceProvidersCommandInput,
  ...args: any
): Promise<ListConferenceProvidersCommandOutput> => {
  // @ts-ignore
  return await client.listConferenceProviders(input, ...args);
};
export async function* listConferenceProvidersPaginate(
  config: AlexaForBusinessPaginationConfiguration,
  input: ListConferenceProvidersCommandInput,
  ...additionalArguments: any
): Paginator<ListConferenceProvidersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListConferenceProvidersCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AlexaForBusiness) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof AlexaForBusinessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AlexaForBusiness | AlexaForBusinessClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
