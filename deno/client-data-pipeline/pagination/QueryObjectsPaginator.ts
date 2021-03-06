
import { DataPipeline } from "../DataPipeline.ts";
import { DataPipelineClient } from "../DataPipelineClient.ts";
import {
  QueryObjectsCommand,
  QueryObjectsCommandInput,
  QueryObjectsCommandOutput,
} from "../commands/QueryObjectsCommand.ts";
import { DataPipelinePaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: DataPipelineClient,
  input: QueryObjectsCommandInput,
  ...args: any
): Promise<QueryObjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new QueryObjectsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DataPipeline,
  input: QueryObjectsCommandInput,
  ...args: any
): Promise<QueryObjectsCommandOutput> => {
  // @ts-ignore
  return await client.queryObjects(input, ...args);
};
export async function* queryObjectsPaginate(
  config: DataPipelinePaginationConfiguration,
  input: QueryObjectsCommandInput,
  ...additionalArguments: any
): Paginator<QueryObjectsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: QueryObjectsCommandOutput;
  while (hasNext) {
    input["marker"] = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof DataPipeline) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DataPipelineClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataPipeline | DataPipelineClient");
    }
    yield page;
    token = page["marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
