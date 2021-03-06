
import { RAM } from "../RAM.ts";
import { RAMClient } from "../RAMClient.ts";
import {
  GetResourceSharesCommand,
  GetResourceSharesCommandInput,
  GetResourceSharesCommandOutput,
} from "../commands/GetResourceSharesCommand.ts";
import { RAMPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RAMClient,
  input: GetResourceSharesCommandInput,
  ...args: any
): Promise<GetResourceSharesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetResourceSharesCommand(input, ...args));
};
const makePagedRequest = async (
  client: RAM,
  input: GetResourceSharesCommandInput,
  ...args: any
): Promise<GetResourceSharesCommandOutput> => {
  // @ts-ignore
  return await client.getResourceShares(input, ...args);
};
export async function* getResourceSharesPaginate(
  config: RAMPaginationConfiguration,
  input: GetResourceSharesCommandInput,
  ...additionalArguments: any
): Paginator<GetResourceSharesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetResourceSharesCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RAM | RAMClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
