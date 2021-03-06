
import { Batch } from "../Batch.ts";
import { BatchClient } from "../BatchClient.ts";
import {
  DescribeJobDefinitionsCommand,
  DescribeJobDefinitionsCommandInput,
  DescribeJobDefinitionsCommandOutput,
} from "../commands/DescribeJobDefinitionsCommand.ts";
import { BatchPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: BatchClient,
  input: DescribeJobDefinitionsCommandInput,
  ...args: any
): Promise<DescribeJobDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeJobDefinitionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Batch,
  input: DescribeJobDefinitionsCommandInput,
  ...args: any
): Promise<DescribeJobDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.describeJobDefinitions(input, ...args);
};
export async function* describeJobDefinitionsPaginate(
  config: BatchPaginationConfiguration,
  input: DescribeJobDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeJobDefinitionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeJobDefinitionsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Batch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof BatchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Batch | BatchClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
