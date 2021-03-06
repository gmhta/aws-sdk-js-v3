
import { CloudWatch } from "../CloudWatch.ts";
import { CloudWatchClient } from "../CloudWatchClient.ts";
import { ListMetricsCommand, ListMetricsCommandInput, ListMetricsCommandOutput } from "../commands/ListMetricsCommand.ts";
import { CloudWatchPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudWatchClient,
  input: ListMetricsCommandInput,
  ...args: any
): Promise<ListMetricsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMetricsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudWatch,
  input: ListMetricsCommandInput,
  ...args: any
): Promise<ListMetricsCommandOutput> => {
  // @ts-ignore
  return await client.listMetrics(input, ...args);
};
export async function* listMetricsPaginate(
  config: CloudWatchPaginationConfiguration,
  input: ListMetricsCommandInput,
  ...additionalArguments: any
): Paginator<ListMetricsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListMetricsCommandOutput;
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
