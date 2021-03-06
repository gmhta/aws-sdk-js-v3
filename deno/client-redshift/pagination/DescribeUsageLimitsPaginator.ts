
import { Redshift } from "../Redshift.ts";
import { RedshiftClient } from "../RedshiftClient.ts";
import {
  DescribeUsageLimitsCommand,
  DescribeUsageLimitsCommandInput,
  DescribeUsageLimitsCommandOutput,
} from "../commands/DescribeUsageLimitsCommand.ts";
import { RedshiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeUsageLimitsCommandInput,
  ...args: any
): Promise<DescribeUsageLimitsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeUsageLimitsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeUsageLimitsCommandInput,
  ...args: any
): Promise<DescribeUsageLimitsCommandOutput> => {
  // @ts-ignore
  return await client.describeUsageLimits(input, ...args);
};
export async function* describeUsageLimitsPaginate(
  config: RedshiftPaginationConfiguration,
  input: DescribeUsageLimitsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeUsageLimitsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeUsageLimitsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Redshift) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Redshift | RedshiftClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
