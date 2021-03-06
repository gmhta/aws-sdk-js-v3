
import { SecurityHub } from "../SecurityHub.ts";
import { SecurityHubClient } from "../SecurityHubClient.ts";
import {
  GetEnabledStandardsCommand,
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput,
} from "../commands/GetEnabledStandardsCommand.ts";
import { SecurityHubPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: GetEnabledStandardsCommandInput,
  ...args: any
): Promise<GetEnabledStandardsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetEnabledStandardsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SecurityHub,
  input: GetEnabledStandardsCommandInput,
  ...args: any
): Promise<GetEnabledStandardsCommandOutput> => {
  // @ts-ignore
  return await client.getEnabledStandards(input, ...args);
};
export async function* getEnabledStandardsPaginate(
  config: SecurityHubPaginationConfiguration,
  input: GetEnabledStandardsCommandInput,
  ...additionalArguments: any
): Paginator<GetEnabledStandardsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetEnabledStandardsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
