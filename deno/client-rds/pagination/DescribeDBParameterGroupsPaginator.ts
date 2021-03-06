
import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeDBParameterGroupsCommand,
  DescribeDBParameterGroupsCommandInput,
  DescribeDBParameterGroupsCommandOutput,
} from "../commands/DescribeDBParameterGroupsCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeDBParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBParameterGroupsCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBParameterGroupsCommandInput,
  ...args: any
): Promise<DescribeDBParameterGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBParameterGroups(input, ...args);
};
export async function* describeDBParameterGroupsPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeDBParameterGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBParameterGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDBParameterGroupsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
