
import { CloudWatchLogs } from "../CloudWatchLogs.ts";
import { CloudWatchLogsClient } from "../CloudWatchLogsClient.ts";
import {
  DescribeMetricFiltersCommand,
  DescribeMetricFiltersCommandInput,
  DescribeMetricFiltersCommandOutput,
} from "../commands/DescribeMetricFiltersCommand.ts";
import { CloudWatchLogsPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: CloudWatchLogsClient,
  input: DescribeMetricFiltersCommandInput,
  ...args: any
): Promise<DescribeMetricFiltersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMetricFiltersCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudWatchLogs,
  input: DescribeMetricFiltersCommandInput,
  ...args: any
): Promise<DescribeMetricFiltersCommandOutput> => {
  // @ts-ignore
  return await client.describeMetricFilters(input, ...args);
};
export async function* describeMetricFiltersPaginate(
  config: CloudWatchLogsPaginationConfiguration,
  input: DescribeMetricFiltersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMetricFiltersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeMetricFiltersCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof CloudWatchLogs) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudWatchLogsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudWatchLogs | CloudWatchLogsClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
