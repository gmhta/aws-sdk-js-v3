
import { CloudTrail } from "../CloudTrail.ts";
import { CloudTrailClient } from "../CloudTrailClient.ts";
import { ListTrailsCommand, ListTrailsCommandInput, ListTrailsCommandOutput } from "../commands/ListTrailsCommand.ts";
import { CloudTrailPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudTrailClient,
  input: ListTrailsCommandInput,
  ...args: any
): Promise<ListTrailsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTrailsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudTrail,
  input: ListTrailsCommandInput,
  ...args: any
): Promise<ListTrailsCommandOutput> => {
  // @ts-ignore
  return await client.listTrails(input, ...args);
};
export async function* listTrailsPaginate(
  config: CloudTrailPaginationConfiguration,
  input: ListTrailsCommandInput,
  ...additionalArguments: any
): Paginator<ListTrailsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTrailsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    if (config.client instanceof CloudTrail) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudTrailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudTrail | CloudTrailClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
