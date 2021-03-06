
import { SecurityHub } from "../SecurityHub.ts";
import { SecurityHubClient } from "../SecurityHubClient.ts";
import {
  DescribeStandardsControlsCommand,
  DescribeStandardsControlsCommandInput,
  DescribeStandardsControlsCommandOutput,
} from "../commands/DescribeStandardsControlsCommand.ts";
import { SecurityHubPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: DescribeStandardsControlsCommandInput,
  ...args: any
): Promise<DescribeStandardsControlsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeStandardsControlsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SecurityHub,
  input: DescribeStandardsControlsCommandInput,
  ...args: any
): Promise<DescribeStandardsControlsCommandOutput> => {
  // @ts-ignore
  return await client.describeStandardsControls(input, ...args);
};
export async function* describeStandardsControlsPaginate(
  config: SecurityHubPaginationConfiguration,
  input: DescribeStandardsControlsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeStandardsControlsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeStandardsControlsCommandOutput;
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
