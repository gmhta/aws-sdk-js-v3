
import { ElasticsearchService } from "../ElasticsearchService.ts";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient.ts";
import {
  DescribePackagesCommand,
  DescribePackagesCommandInput,
  DescribePackagesCommandOutput,
} from "../commands/DescribePackagesCommand.ts";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: DescribePackagesCommandInput,
  ...args: any
): Promise<DescribePackagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePackagesCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElasticsearchService,
  input: DescribePackagesCommandInput,
  ...args: any
): Promise<DescribePackagesCommandOutput> => {
  // @ts-ignore
  return await client.describePackages(input, ...args);
};
export async function* describePackagesPaginate(
  config: ElasticsearchServicePaginationConfiguration,
  input: DescribePackagesCommandInput,
  ...additionalArguments: any
): Paginator<DescribePackagesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribePackagesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ElasticsearchService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticsearchServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticsearchService | ElasticsearchServiceClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
