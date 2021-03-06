
import { Redshift } from "../Redshift.ts";
import { RedshiftClient } from "../RedshiftClient.ts";
import {
  DescribeClusterVersionsCommand,
  DescribeClusterVersionsCommandInput,
  DescribeClusterVersionsCommandOutput,
} from "../commands/DescribeClusterVersionsCommand.ts";
import { RedshiftPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: RedshiftClient,
  input: DescribeClusterVersionsCommandInput,
  ...args: any
): Promise<DescribeClusterVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeClusterVersionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Redshift,
  input: DescribeClusterVersionsCommandInput,
  ...args: any
): Promise<DescribeClusterVersionsCommandOutput> => {
  // @ts-ignore
  return await client.describeClusterVersions(input, ...args);
};
export async function* describeClusterVersionsPaginate(
  config: RedshiftPaginationConfiguration,
  input: DescribeClusterVersionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeClusterVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeClusterVersionsCommandOutput;
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
