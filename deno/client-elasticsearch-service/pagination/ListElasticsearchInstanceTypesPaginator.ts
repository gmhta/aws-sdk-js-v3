
import { ElasticsearchService } from "../ElasticsearchService.ts";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient.ts";
import {
  ListElasticsearchInstanceTypesCommand,
  ListElasticsearchInstanceTypesCommandInput,
  ListElasticsearchInstanceTypesCommandOutput,
} from "../commands/ListElasticsearchInstanceTypesCommand.ts";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: ListElasticsearchInstanceTypesCommandInput,
  ...args: any
): Promise<ListElasticsearchInstanceTypesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListElasticsearchInstanceTypesCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElasticsearchService,
  input: ListElasticsearchInstanceTypesCommandInput,
  ...args: any
): Promise<ListElasticsearchInstanceTypesCommandOutput> => {
  // @ts-ignore
  return await client.listElasticsearchInstanceTypes(input, ...args);
};
export async function* listElasticsearchInstanceTypesPaginate(
  config: ElasticsearchServicePaginationConfiguration,
  input: ListElasticsearchInstanceTypesCommandInput,
  ...additionalArguments: any
): Paginator<ListElasticsearchInstanceTypesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListElasticsearchInstanceTypesCommandOutput;
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
