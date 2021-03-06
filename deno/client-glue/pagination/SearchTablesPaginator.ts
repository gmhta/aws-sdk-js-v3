
import { Glue } from "../Glue.ts";
import { GlueClient } from "../GlueClient.ts";
import {
  SearchTablesCommand,
  SearchTablesCommandInput,
  SearchTablesCommandOutput,
} from "../commands/SearchTablesCommand.ts";
import { GluePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: GlueClient,
  input: SearchTablesCommandInput,
  ...args: any
): Promise<SearchTablesCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchTablesCommand(input, ...args));
};
const makePagedRequest = async (
  client: Glue,
  input: SearchTablesCommandInput,
  ...args: any
): Promise<SearchTablesCommandOutput> => {
  // @ts-ignore
  return await client.searchTables(input, ...args);
};
export async function* searchTablesPaginate(
  config: GluePaginationConfiguration,
  input: SearchTablesCommandInput,
  ...additionalArguments: any
): Paginator<SearchTablesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: SearchTablesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Glue) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlueClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Glue | GlueClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
