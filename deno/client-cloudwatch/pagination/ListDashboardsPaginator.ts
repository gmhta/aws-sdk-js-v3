
import { CloudWatch } from "../CloudWatch.ts";
import { CloudWatchClient } from "../CloudWatchClient.ts";
import {
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
} from "../commands/ListDashboardsCommand.ts";
import { CloudWatchPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudWatchClient,
  input: ListDashboardsCommandInput,
  ...args: any
): Promise<ListDashboardsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDashboardsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudWatch,
  input: ListDashboardsCommandInput,
  ...args: any
): Promise<ListDashboardsCommandOutput> => {
  // @ts-ignore
  return await client.listDashboards(input, ...args);
};
export async function* listDashboardsPaginate(
  config: CloudWatchPaginationConfiguration,
  input: ListDashboardsCommandInput,
  ...additionalArguments: any
): Paginator<ListDashboardsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDashboardsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    if (config.client instanceof CloudWatch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudWatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatch | CloudWatchClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
