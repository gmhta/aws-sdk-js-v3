
import { SecurityHub } from "../SecurityHub.ts";
import { SecurityHubClient } from "../SecurityHubClient.ts";
import { GetFindingsCommand, GetFindingsCommandInput, GetFindingsCommandOutput } from "../commands/GetFindingsCommand.ts";
import { SecurityHubPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: GetFindingsCommandInput,
  ...args: any
): Promise<GetFindingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetFindingsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SecurityHub,
  input: GetFindingsCommandInput,
  ...args: any
): Promise<GetFindingsCommandOutput> => {
  // @ts-ignore
  return await client.getFindings(input, ...args);
};
export async function* getFindingsPaginate(
  config: SecurityHubPaginationConfiguration,
  input: GetFindingsCommandInput,
  ...additionalArguments: any
): Paginator<GetFindingsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetFindingsCommandOutput;
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
