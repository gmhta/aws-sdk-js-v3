
import { Lambda } from "../Lambda.ts";
import { LambdaClient } from "../LambdaClient.ts";
import { ListLayersCommand, ListLayersCommandInput, ListLayersCommandOutput } from "../commands/ListLayersCommand.ts";
import { LambdaPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: LambdaClient,
  input: ListLayersCommandInput,
  ...args: any
): Promise<ListLayersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLayersCommand(input, ...args));
};
const makePagedRequest = async (
  client: Lambda,
  input: ListLayersCommandInput,
  ...args: any
): Promise<ListLayersCommandOutput> => {
  // @ts-ignore
  return await client.listLayers(input, ...args);
};
export async function* listLayersPaginate(
  config: LambdaPaginationConfiguration,
  input: ListLayersCommandInput,
  ...additionalArguments: any
): Paginator<ListLayersCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListLayersCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof Lambda) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LambdaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Lambda | LambdaClient");
    }
    yield page;
    token = page["NextMarker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
