
import { XRay } from "../XRay.ts";
import { XRayClient } from "../XRayClient.ts";
import {
  GetServiceGraphCommand,
  GetServiceGraphCommandInput,
  GetServiceGraphCommandOutput,
} from "../commands/GetServiceGraphCommand.ts";
import { XRayPaginationConfiguration } from "./Interfaces.ts";
import { Paginator } from "../../types/mod.ts";

const makePagedClientRequest = async (
  client: XRayClient,
  input: GetServiceGraphCommandInput,
  ...args: any
): Promise<GetServiceGraphCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetServiceGraphCommand(input, ...args));
};
const makePagedRequest = async (
  client: XRay,
  input: GetServiceGraphCommandInput,
  ...args: any
): Promise<GetServiceGraphCommandOutput> => {
  // @ts-ignore
  return await client.getServiceGraph(input, ...args);
};
export async function* getServiceGraphPaginate(
  config: XRayPaginationConfiguration,
  input: GetServiceGraphCommandInput,
  ...additionalArguments: any
): Paginator<GetServiceGraphCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetServiceGraphCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    if (config.client instanceof XRay) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof XRayClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected XRay | XRayClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
