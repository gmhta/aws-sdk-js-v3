
import { AlexaForBusiness } from "../AlexaForBusiness.ts";
import { AlexaForBusinessClient } from "../AlexaForBusinessClient.ts";
import {
  SearchContactsCommand,
  SearchContactsCommandInput,
  SearchContactsCommandOutput,
} from "../commands/SearchContactsCommand.ts";
import { AlexaForBusinessPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: AlexaForBusinessClient,
  input: SearchContactsCommandInput,
  ...args: any
): Promise<SearchContactsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchContactsCommand(input, ...args));
};
const makePagedRequest = async (
  client: AlexaForBusiness,
  input: SearchContactsCommandInput,
  ...args: any
): Promise<SearchContactsCommandOutput> => {
  // @ts-ignore
  return await client.searchContacts(input, ...args);
};
export async function* searchContactsPaginate(
  config: AlexaForBusinessPaginationConfiguration,
  input: SearchContactsCommandInput,
  ...additionalArguments: any
): Paginator<SearchContactsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: SearchContactsCommandOutput;
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
