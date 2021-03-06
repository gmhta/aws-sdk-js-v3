
import { Lambda } from "../Lambda.ts";
import { LambdaClient } from "../LambdaClient.ts";
import {
  ListVersionsByFunctionCommand,
  ListVersionsByFunctionCommandInput,
  ListVersionsByFunctionCommandOutput,
} from "../commands/ListVersionsByFunctionCommand.ts";
import { LambdaPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: LambdaClient,
  input: ListVersionsByFunctionCommandInput,
  ...args: any
): Promise<ListVersionsByFunctionCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVersionsByFunctionCommand(input, ...args));
};
const makePagedRequest = async (
  client: Lambda,
  input: ListVersionsByFunctionCommandInput,
  ...args: any
): Promise<ListVersionsByFunctionCommandOutput> => {
  // @ts-ignore
  return await client.listVersionsByFunction(input, ...args);
};
export async function* listVersionsByFunctionPaginate(
  config: LambdaPaginationConfiguration,
  input: ListVersionsByFunctionCommandInput,
  ...additionalArguments: any
): Paginator<ListVersionsByFunctionCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListVersionsByFunctionCommandOutput;
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
