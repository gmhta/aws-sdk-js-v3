
import { RDS } from "../RDS.ts";
import { RDSClient } from "../RDSClient.ts";
import {
  DescribeDBClusterParametersCommand,
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput,
} from "../commands/DescribeDBClusterParametersCommand.ts";
import { RDSPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBClusterParametersCommandInput,
  ...args: any
): Promise<DescribeDBClusterParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBClusterParametersCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBClusterParametersCommandInput,
  ...args: any
): Promise<DescribeDBClusterParametersCommandOutput> => {
  // @ts-ignore
  return await client.describeDBClusterParameters(input, ...args);
};
export async function* describeDBClusterParametersPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeDBClusterParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBClusterParametersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeDBClusterParametersCommandOutput;
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
